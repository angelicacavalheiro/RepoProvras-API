import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('professores')
export default class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}