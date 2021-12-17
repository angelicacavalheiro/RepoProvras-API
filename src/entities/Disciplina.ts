import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import ProfessorDisciplina from "./ProfessorDisciplina";

@Entity('disciplinas')
export default class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => ProfessorDisciplina, professorDisciplina => professorDisciplina.disciplinaId)
  professorDisciplina: ProfessorDisciplina
}