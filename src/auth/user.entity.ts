import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 255 })
    name: string;
  
    @Column({ type: 'varchar', length: 255,unique: true, nullable: false })
    email: string;
  
    @Column({ type: 'varchar', length: 128, nullable: false, select: false })
    password: string;
    
    @Column({ type: 'bool', default: true })
    status: boolean;
  
    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;
}