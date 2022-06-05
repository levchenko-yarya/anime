import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category } from "./category";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Injectable()
export class CategoryService {
  constructor(@InjectModel("Category") private categoryModel: Model<Category>) {
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = await new this.categoryModel(createCategoryDto);
    return category.save();
  }

  async createSub(id, createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = await this.categoryModel.findById(id);
    // category.subcategories.push(createCategoryDto);
    return category.save();
  }

  async findAll() {
    return await this.categoryModel
      .find()
      .exec();
  }

  async findOne(id) {
    return await this.categoryModel.findById(id).exec();
  }

  update(id, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, { new: true });
  }

  remove(id) {
    return this.categoryModel.findByIdAndRemove(id);
  }
}
