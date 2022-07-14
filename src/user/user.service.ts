import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { RegisterDto } from './register.dto';
import { Payload } from '../auth/payload';
import { LoginDto } from '../auth/login.dto';
import * as bcrypt from 'bcrypt';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll();
  }

  async findOne(id): Promise<User> {
    return await this.usersRepository.findOne({ where: { id } });
  }

  async update(id, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({ where: { id } });
    await user.update(updateUserDto);
  }

  async remove(id): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { id } });
    await user.destroy();
  }

  async create(registerDTO: RegisterDto): Promise<User> {
    const { login } = registerDTO;
    const user = await this.usersRepository.findOne({ where: { login } });
    if (user) {
      throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
    }
    // @ts-ignore
    return await this.usersRepository.create(registerDTO);
  }

  async findByPayload(payload: Payload) {
    const { login } = payload;
    return this.usersRepository.findOne({ where: { login } });
  }

  async findByLogin(UserDTO: LoginDto) {
    const { login, password } = UserDTO;
    const user = await this.usersRepository.findOne({ where: { login } });
    if (!user) {
      throw new HttpException('user does not exists', HttpStatus.BAD_REQUEST);
    }
    if (await bcrypt.compare(password, user.password)) {
      return user;
    } else {
      throw new HttpException('invalid credential', HttpStatus.BAD_REQUEST);
    }
  }
}
