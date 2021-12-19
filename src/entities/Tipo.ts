import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from "typeorm";
import Prova from "./Prova";

@Entity('tipos')
export default class Tipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Prova, prova => prova.tipo, {eager: true})
  prova: Prova;
}