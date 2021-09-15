import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable, CreateDateColumn, UpdateDateColumn, OneToMany, PrimaryColumn, ManyToOne, JoinColumn
} from 'typeorm';

@Entity('persons')
export class Persons extends BaseEntity {
  @PrimaryColumn()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'name', type: 'varchar', nullable: false })
  name: string;

  @Column({ name: 'age', type: 'smallint', nullable: false})
  age: number;

  @Column({ name: 'happy', type: 'boolean', nullable: true, default: true })
  happy: boolean;

  @Column({ name: 'healthy', type: 'boolean', nullable: true, default: true })
  healthy: boolean;

  @Column({ name: 'busy', type: 'boolean', nullable: true, default: true })
  busy: boolean;

  @Column({ name: 'status', type: 'boolean', nullable: true, default: true })
  status_active: number;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' , nullable: true})
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'update_at' , nullable: true})
  updated_at: Date;

  // Relations
}
