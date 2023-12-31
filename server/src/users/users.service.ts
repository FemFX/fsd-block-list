import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: DbService) {}

  findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: { email },
    });
  }

  create(email: string, hash: string, salt: string) {
    return this.prisma.user.create({
      data: {
        email,
        salt,
        hash,
      },
    });
  }
}
