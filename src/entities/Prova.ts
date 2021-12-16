import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from "typeorm";
import Semestre from "./Semestre";
import ProfessorDisciplina from "./ProfessorDisciplina";
import Tipo from "./Tipo";

@Entity('provas')
export default class Prova {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  link: string;

  @OneToOne(() => Semestre, { eager: true })
  @JoinColumn({ name: 'nome_id'})
  semestreId: Semestre

  @OneToOne(() => Tipo, { eager: true })
  @JoinColumn({ name: 'tipo_id'})
  tipoId: Tipo

  @OneToOne(() => ProfessorDisciplina, { eager: true })
  @JoinColumn({ name: 'professor_disciplina_id'})
  professorDiciplina: ProfessorDisciplina
}
