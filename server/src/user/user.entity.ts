import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('my_user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: string
    
    @Column({ default: '' })
    name: string

    @Column({ default: '' })
    email: string

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}