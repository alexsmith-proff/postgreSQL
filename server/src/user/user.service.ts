import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(UserEntity)
      private readonly userRepository: Repository<UserEntity>
      ) {}

  createUser(user: UserDto) {
    return this.userRepository.save(user)
  }  
  getAllUsers() {
    return this.userRepository.find({
      relations: {        
        posts: true
      }
    })
  }

  getUserByID(id: number) {
    return this.userRepository.findOne({
      where: {
        id
      },
      relations: {
        posts: true
      }
    })
  }

  updateUser(id: string, user: UserDto) {
    return this.userRepository.update(id, user)
  }

  deleteUser(id: string) {
    return this.userRepository.delete(id)
  }

}
