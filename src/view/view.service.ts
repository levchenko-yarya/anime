import { Inject, Injectable } from '@nestjs/common';
import { CreateViewDto } from './dto/create-view.dto';
import { UpdateViewDto } from './dto/update-view.dto';
import { View } from './entities/view.entity';

@Injectable()
export class ViewService {
  constructor(
    @Inject('VIEWS_REPOSITORY') private viewsRepository: typeof View,
  ) {}

  async findAll(): Promise<View[]> {
    return await this.viewsRepository.findAll();
  }

  async findOne(id): Promise<View> {
    return await this.viewsRepository.findOne({ where: { id } });
  }

  create(createViewDto: CreateViewDto) {
    const view = new this.viewsRepository(createViewDto);
    return view.save();
  }

  async update(id, updateViewDto: UpdateViewDto) {
    const view = await this.viewsRepository.findOne({ where: { id } });
    await view.update(updateViewDto);
  }

  async remove(id) {
    const view = await this.findOne(id);
    await view.destroy();
  }
}
