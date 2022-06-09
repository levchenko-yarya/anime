import { Inject, Injectable } from "@nestjs/common";
import { CreateStatusDto } from "./dto/create-status.dto";
import { UpdateStatusDto } from "./dto/update-status.dto";
import { Status } from "./entities/status.entity";

@Injectable()
export class StatusService {
  constructor(@Inject("STATUSES_REPOSITORY") private statusesRepository: typeof Status) {
  }

  async findAll(): Promise<Status[]> {
    return await this.statusesRepository.findAll();
  }

  async findOne(id): Promise<Status> {
    return await this.statusesRepository.findOne({ where: { id } });
  }

  create(createStatusDto: CreateStatusDto) {
    const status = new this.statusesRepository(createStatusDto);
    return status.save();
  }

  async update(id, updateStatusDto: UpdateStatusDto) {
    const status = await this.statusesRepository.findOne({ where: { id } });
    await status.update(updateStatusDto);
  }

  async remove(id): Promise<void> {
    const status = await this.findOne(id);
    await status.destroy();
  }
}
