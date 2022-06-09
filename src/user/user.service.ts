import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

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

  create(createUserDto: CreateUserDto) {
    const user = new this.usersRepository(createUserDto);
    return user.save();
  }

  async update(id, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({ where: { id } });
    await user.update(updateUserDto);
  }

  async remove(id): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { id } });
    await user.destroy();
  }
}
