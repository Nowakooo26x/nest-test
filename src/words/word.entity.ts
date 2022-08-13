import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('words')
export class Word {
  @ObjectIdColumn() id: ObjectID;
  @Column() polish: string;
  @Column() english: string;
}
