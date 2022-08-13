import { Inject, Injectable } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { Word } from './word.entity';
import { WordsRepository } from './words.repository';

@Injectable()
export class WordsService {
  constructor(
    @Inject(WordsRepository)
    private readonly wordsRepository: WordsRepository,
  ) {}

  createWord(createWordDto: CreateWordDto): Promise<Word> {
    return this.wordsRepository.createWord(createWordDto);
  }

  getWords(): Promise<Word[]> {
    return this.wordsRepository.getWords();
  }
}
