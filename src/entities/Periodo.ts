import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany } from "typeorm";
import Disciplina from "./Disciplina";

@Entity('periodo')
export default class Periodo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Disciplina, disciplina => disciplina.periodo, {eager: true})
  disciplinas: Disciplina;
}