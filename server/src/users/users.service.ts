import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { BlockListService } from 'src/block-list/block-list.service';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: DbService,
    private readonly accountService: AccountService,
    private readonly blockListService: BlockListService,
  ) {}

  findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: { email },
    });
  }

  async create(email: string, hash: string, salt: string) {
    return await this.prisma.$transaction(async () => {
      const user = await this.prisma.user.create({
        data: {
          email,
          salt,
          hash,
        },
      });

      await this.accountService.create(user.id);
      await this.blockListService.create(user.id);

      return user;
    });
  }
}
