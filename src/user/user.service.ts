import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./user";
import { RegisterDto } from "./register.dto";
import { Payload } from "../auth/payload";
import { LoginDto } from "../auth/login.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(@Inject("USER_REPOSITORY") private usersRepository: typeof User) {
  }

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

  async create(RegisterDTO: RegisterDto) {
    const { login } = RegisterDTO;
    const user = await this.usersRepository.findOne({ where: { login } });
    if (user) {
      throw new HttpException("user already exists", HttpStatus.BAD_REQUEST);
    }
    const createdUser = new this.usersRepository(RegisterDTO);
    await createdUser.save();
    return this.sanitizeUser(createdUser);
  }

  async findByPayload(payload: Payload) {
    const { login } = payload;
    return this.usersRepository.findOne({ where: { login } });
  }

  async findByLogin(UserDTO: LoginDto) {
    const { login, password } = UserDTO;
    const user = await this.usersRepository.findOne({ where: { login } });
    if (!user) {
      throw new HttpException("user does not exists", HttpStatus.BAD_REQUEST);
    }
    if (await bcrypt.compare(password, user.password)) {
      return this.sanitizeUser(user);
    } else {
      throw new HttpException("invalid credential", HttpStatus.BAD_REQUEST);
    }
  }

  sanitizeUser(user: User) {
    const sanitized = user.toObject();
    delete sanitized["password"];
    return sanitized;
  }
}
