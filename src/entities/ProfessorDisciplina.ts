import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import Disciplina from "./Disciplina";
import Professor from "./Professor";
import Prova from "./Prova";

@Entity('professor_disciplina')
export default class ProfessorDisciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Professor, professorId => professorId.id, { eager: true})
  @JoinColumn({ name: 'professor_id'})
  professorId: Professor

  @ManyToOne(() => Disciplina, disciplinaId => disciplinaId.id, { eager: true})
  @JoinColumn({ name: 'disciplina_id'})
  disciplinaId: Disciplina

  @OneToMany(() => Prova, prova => prova.professorDiciplinaId)
  prova: Prova
}
