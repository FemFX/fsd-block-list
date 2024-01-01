import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { AddBlockItemDto, BlockListQueryDto } from './block-list.dto';

@Injectable()
export class BlockListService {
  constructor(private readonly prisma: DbService) {}
  create(userId: number) {
    return this.prisma.blockList.create({
      data: {
        ownerId: userId,
      },
    });
  }

  getByUserId(userId: number, query: BlockListQueryDto) {
    return this.prisma.blockList.findUniqueOrThrow({
      where: { ownerId: userId },
      include: {
        items: {
          where: {
            data: {
              contains: query.q,
              mode: 'insensitive',
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });
  }

  async addItem(userId: number, data: AddBlockItemDto) {
    const blockList = await this.prisma.blockList.findUniqueOrThrow({
      where: { ownerId: userId },
    });
    return this.prisma.blockItem.create({
      data: { blockListId: blockList.id, ...data },
    });
  }

  async removeItem(userId: number, itemId: number) {
    const blockList = await this.prisma.blockList.findUniqueOrThrow({
      where: { ownerId: userId },
    });
    return this.prisma.blockItem.delete({
      where: {
        blockListId: blockList.id,
        id: itemId,
      },
    });
  }
}
