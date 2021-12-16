import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('professor_disciplina')
export default class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}