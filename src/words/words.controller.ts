import { Body, Controller, Get, Post } from '@nestjs/common';
import { Word } from './word.entity';
import { CreateWordDto } from './dto/create-word.dto';
import { WordsService } from './words.service';

@Controller('words')
export class WordsController {
  constructor(private wordsService: WordsService) {}

  @Get()
  getWords(): Promise<Word[]> {
    return this.wordsService.getWords();
  }

  @Post()
  createWord(@Body() createWordDto: CreateWordDto): Promise<Word> {
    return this.wordsService.createWord(createWordDto);
  }
}
