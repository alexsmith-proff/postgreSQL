import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(UserEntity)
      private readonly userRepository: Repository<UserEntity>
      ) {}

  createUser(user: IUser) {
    return from(this.userRepository.save(user))
  }  

  getUserByID(id: string) {
    return this.userRepository.findOneBy({
      id: id
    })
  }

  updateUser(id: string, user: IUser) {
    return this.userRepository.update(id, user)
  }

  deleteUser(id: string) {
    return this.userRepository.delete(id)
  }

}
