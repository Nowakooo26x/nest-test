import { DataSource } from 'typeorm';
import { Word } from './word.entity';
import { CreateWordDto } from './dto/create-word.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WordsRepository {
  constructor(private dataSource: DataSource) {}

  async createWord(createWordDto: CreateWordDto): Promise<Word> {
    const { polish, english } = createWordDto;

    const word = this.dataSource.getRepository(Word).create({
      polish,
      english,
    });

    await this.dataSource.getRepository(Word).save(word);
    return word;
  }

  async getWords(): Promise<Word[]> {
    const words = await this.dataSource.getRepository(Word).find();
    return words;
  }
}
