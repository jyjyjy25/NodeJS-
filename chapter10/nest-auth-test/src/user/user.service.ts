import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // 리포지토리 주입 데코레이터
import { User } from './user.entity';
import { Repository } from 'typeorm'; // 리포지토리 임포트

@Injectable()
export class UserService {
  constructor(
    // 리포지토리 주입
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  createUser(user): Promise<User> {
    return this.userRepository.save(user);
  }

  async getUser(email: string) {
    const result = await this.userRepository.findOne({
      where: { email },
    });
    return result;
  }

  async updateUser(email, _user) {
    const user: User = await this.getUser(email);
    console.log(_user);
    user.username = _user.username;
    user.password = _user.password;
    console.log(user);
    this.userRepository.save(user);
  }

  deleteUser(email: any) {
    return this.userRepository.delete({ email });
  }
}
