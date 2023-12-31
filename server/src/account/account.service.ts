import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { PatchAccountDto } from './account.dto';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: DbService) {}

  async getAccount(userId: number) {
    return this.prisma.account.findUniqueOrThrow({
      where: { ownerId: userId },
    });
  }

  async create(userId: number) {
    return this.prisma.account.create({
      data: {
        ownerId: userId,
        isBlockingEnabled: false,
      },
    });
  }

  async patchAccount(userId: number, dto: PatchAccountDto) {
    return this.prisma.account.update({
      where: { ownerId: userId },
      data: dto,
    });
  }
}
