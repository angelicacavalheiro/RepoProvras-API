import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Prova from './Prova';

@Entity('professores')
export default class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Prova, prova => prova.professorId)
  prova: Prova
}