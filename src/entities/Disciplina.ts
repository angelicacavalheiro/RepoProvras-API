import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import Periodo from './Periodo'
import Prova from './Prova';

@Entity('disciplinas')
export default class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ name: 'periodo_id' })
  periodoId: string;

  @ManyToOne(() => Periodo, periodo => periodo.id)
  @JoinColumn({ name: 'periodo_id' })
  periodo: Periodo;

  @OneToMany(() => Prova, prova => prova.diciplinaId)
  prova: Prova;
}