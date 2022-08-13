import { Injectable } from '@nestjs/common';
import { dataSource } from 'src/dataSource';
import { CreateViewDto } from './dto/create-view.dto';
import { UpdateViewDto } from './dto/update-view.dto';
import { View } from './view.entity';

@Injectable()
export class ViewService {
  viewRepository = dataSource.getRepository(View);

  async findAll(): Promise<View[]> {
    return await this.viewRepository.find();
  }

  async findOne(id: number): Promise<View> {
    return await this.viewRepository.findOneBy({ id: id });
  }

  async create(createViewDto: CreateViewDto) {
    const view = new View();
    view.name = createViewDto.name;
    return await this.viewRepository.save(view);
  }

  //! check update
  async update(id: number, updateViewDto: UpdateViewDto) {
    return await this.viewRepository
      .createQueryBuilder()
      .update(View)
      .where({ id: id })
      .set({ name: updateViewDto.name })
      .execute();
  }

  //! check delete
  async remove(id: number) {
    await this.viewRepository.delete(id);
  }
}
