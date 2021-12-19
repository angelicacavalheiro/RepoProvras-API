import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from "typeorm";
import Prova from "./Prova";

@Entity('nomes')
export default class Semestre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Prova, prova => prova.NomeId)
  prova: Prova
}