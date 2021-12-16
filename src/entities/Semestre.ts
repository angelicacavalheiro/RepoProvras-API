import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('semestres')
export default class Semestre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}