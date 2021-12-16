import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import Disciplina from "./Disciplina";
import Professor from "./Professor";

@Entity('professor_disciplina')
export default class ProfessorDisciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Professor)
  @JoinColumn({ name: 'professor_id'})
  professorId: Professor

  @OneToOne(() => Disciplina, { eager: true})
  @JoinColumn({ name: 'disciplina_id'})
  disciplinaId: Disciplina

}
