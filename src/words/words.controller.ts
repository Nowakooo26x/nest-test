import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Word } from './word.entity';
import { CreateWordDto } from './dto/create-word.dto';
import { WordsService } from './words.service';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Public } from 'src/auth/public.decorator';

@Controller('words')
export class WordsController {
  constructor(private wordsService: WordsService) {}

  //@Public()
  @Get()
  getWords(): Promise<Word[]> {
    return this.wordsService.getWords();
  }

  //@Public()
  //@UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @Post()
  createWord(@Body() createWordDto: CreateWordDto): Promise<Word> {
    return this.wordsService.createWord(createWordDto);
  }
}
