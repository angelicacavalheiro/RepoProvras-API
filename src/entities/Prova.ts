import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import Semestre from "./Semestre";
import Professor from "./Professor";
import Disciplina from "./Disciplina";
import Tipo from "./Tipo";

@Entity('provas')
export default class Prova {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => Semestre, NomeId => NomeId.id, { eager: true})
  @JoinColumn({ name: 'nome_id'})
  NomeId: Semestre

  @ManyToOne(() => Professor, professorId => professorId.id, { eager: true})
  @JoinColumn({ name: 'professores_id'})
  professorId: Professor;

  @ManyToOne(() => Disciplina, diciplinaId => diciplinaId.id, { eager: true})
  @JoinColumn({ name: 'disciplina_id'})
  diciplinaId: Disciplina;

  @ManyToOne(() => Tipo, tipo => tipo.id)
  @JoinColumn({ name: 'tipo_id' })
  tipo: Tipo;
}
