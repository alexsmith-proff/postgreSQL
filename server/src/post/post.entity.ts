import { UserEntity } from './../user/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('posts')
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({ default: '' })
    name: string

    @Column({ default: '' })
    description: string

    @ManyToOne(() => UserEntity, user => user.posts)
    user: UserEntity

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}