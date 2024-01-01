import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BlockListService } from './block-list.service';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import {
  AddBlockItemDto,
  BlockItemDto,
  BlockListDto,
  BlockListQueryDto,
} from './block-list.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/auth.dto';

@Controller('block-list')
@UseGuards(AuthGuard)
export class BlockListController {
  constructor(private readonly blockListService: BlockListService) {}

  @Get()
  @ApiOkResponse({
    type: BlockListDto,
  })
  getList(
    @Query() query: BlockListQueryDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<BlockListDto> {
    return this.blockListService.getByUserId(session.id, query);
  }

  @Post('item')
  @ApiCreatedResponse({
    type: BlockListDto,
  })
  addBlockListItem(
    @Body() dto: AddBlockItemDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<BlockItemDto> {
    return this.blockListService.addItem(session.id, dto);
  }

  @Delete('item/:id')
  @ApiOkResponse({
    type: BlockItemDto,
  })
  async removeBlockItem(
    @Param(ParseIntPipe) id: number,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<BlockItemDto> {
    return await this.blockListService.removeItem(session.id, id);
  }
}
