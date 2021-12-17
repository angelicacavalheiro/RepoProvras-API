import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import Semestre from "./Semestre";
import ProfessorDisciplina from "./ProfessorDisciplina";
import Tipo from "./Tipo";

@Entity('provas')
export default class Prova {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  link: string;

  @ManyToOne(() => Semestre, NomeId => NomeId.id, { eager: true})
  @JoinColumn({ name: 'nome_id'})
  NomeId: Semestre

  @ManyToOne(() => Tipo, tipoId => tipoId.id, { eager: true})
  @JoinColumn({ name: 'tipo_id'})
  tipoId: Tipo

  @ManyToOne(() => ProfessorDisciplina, professorDiciplinaId => professorDiciplinaId.id, { eager: true})
  @JoinColumn({ name: 'professor_disciplina_id'})
  professorDiciplinaId: ProfessorDisciplina
}
