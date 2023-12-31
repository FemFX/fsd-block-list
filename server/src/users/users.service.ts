import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: DbService,
    private readonly accountService: AccountService,
  ) {}

  findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: { email },
    });
  }

  async create(email: string, hash: string, salt: string) {
    const user = await this.prisma.user.create({
      data: {
        email,
        salt,
        hash,
      },
    });
    await this.accountService.create(user.id);
    return user;
  }
}
