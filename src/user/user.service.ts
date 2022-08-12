import { dataSource } from './../dataSource';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { RegisterDto } from './register.dto';
import { Payload } from '../auth/payload';
import { LoginDto } from '../auth/login.dto';

@Injectable()
export class UserService {
  constructor(private userRepository = dataSource.getRepository(User)) {}

  /*
   * Block comment CRUD User

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async update(id, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    await user.update(updateUserDto);
  }

  async remove(id): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } });
    await user.destroy();
  }
  */

  /*=============================================
  =            Authentication User              =
  =============================================*/
  async create(registerDTO: RegisterDto): Promise<User> {
    const { login } = registerDTO;
    const user = await this.userRepository.findOne({ where: { login } });
    if (user) {
      throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
    }
    return this.userRepository.create(registerDTO);
  }

  async findByPayload(payload: Payload) {
    const { login } = payload;
    return this.userRepository.findOne({ where: { login } });
  }

  async findByLogin(UserDTO: LoginDto) {
    const { login, password } = UserDTO;
    const user = await this.userRepository.findOne({ where: { login } });
    if (!user) {
      throw new HttpException('user does not exists', HttpStatus.BAD_REQUEST);
    }
    //if (await bcrypt.compare(password, user.password)) {
    if (password === user.password) {
      return user;
    } else {
      throw new HttpException('invalid credential', HttpStatus.BAD_REQUEST);
    }
  }
}
