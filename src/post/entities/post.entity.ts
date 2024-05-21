import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column({ type: 'varchar', length: 255 })
  image: string;

  @Column('decimal')
  price: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
