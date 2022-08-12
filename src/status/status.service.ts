import { Inject, Injectable } from '@nestjs/common';
import { dataSource } from 'src/dataSource';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './status.entity';

@Injectable()
export class StatusService {
  constructor(private statusRepository = dataSource.getRepository(Status)) {}

  async findAll(): Promise<Status[]> {
    return await this.statusRepository.find();
  }

  async findOne(id: number): Promise<Status> {
    return await this.statusRepository.findOne({ where: { id } });
  }

  async create(createStatusDto: CreateStatusDto) {
    const status = new Status();
    status.name = createStatusDto.name;
    return await this.statusRepository.save(status);
  }

  async update(id: number, updateStatusDto: UpdateStatusDto) {
    return await this.statusRepository
      .createQueryBuilder()
      .update(Status)
      .where({ id: id })
      .set({ name: updateStatusDto.name })
      .execute();
  }

  async remove(id: number): Promise<void> {
    await this.statusRepository.delete(id);
  }
}
