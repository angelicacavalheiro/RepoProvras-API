import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('disciplinas')
export default class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}