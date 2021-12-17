import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import ProfessorDisciplina from "./ProfessorDisciplina";

@Entity('professores')
export default class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => ProfessorDisciplina, professorDisciplina => professorDisciplina.professorId)
  professorDisciplina: ProfessorDisciplina
}