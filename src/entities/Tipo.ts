import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('tipos')
export default class Tipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}