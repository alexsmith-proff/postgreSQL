import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('my_user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: string
    
    @Column({ default: '' })
    name: string

    @Column({ default: '' })
    email: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}