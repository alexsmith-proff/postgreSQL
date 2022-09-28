import { PostEntity } from './../post/post.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('my_user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({ default: '' })
    name: string

    @Column({ default: '' })
    email: string

    @OneToMany(() => PostEntity, post => post.user)
    posts: PostEntity[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}