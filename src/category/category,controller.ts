import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus, NotFoundException } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {
  }

  @Post()
  async create(@Res() res, @Body() createCategoryDto: CreateCategoryDto) {
    const newCategory = await this.categoryService.create(createCategoryDto);
    return res.status(HttpStatus.OK).json({
      message: "Category has been submitted successfully",
      category: newCategory
    });
  }

  @Post(":id/sub")
  async createSub(@Res() res, @Param("id") id, @Body() createCategoryDto: CreateCategoryDto) {
    const subCategory = await this.categoryService.createSub(id, createCategoryDto);
    return res.status(HttpStatus.OK).json({
      message: "SubCategory submitted",
      category: subCategory
    });
  }

  @Get()
  async findAll(@Res() res) {
    const categories = await this.categoryService.findAll();
    return res.status(HttpStatus.OK).json(categories);
  }

  @Get(":id")
  async findOne(@Res() res, @Param("id") id) {
    const category = await this.categoryService.findOne(id);
    if (!category) {
      throw new NotFoundException("Category does not exist!");
    }
    return res.status(HttpStatus.OK).json(category);
  }

  @Put(":id")
  async update(@Res() res,
               @Param("id") id,
               @Body() updateCategoryDto: UpdateCategoryDto) {
    const updateCategory = await this.categoryService.update(id, updateCategoryDto);
    if (!updateCategory) {
      throw new NotFoundException("Category does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Category has been submitted successfully",
      category: updateCategory
    });
  }

  @Delete(":id")
  async remove(@Res() res, @Param("id") id) {
    const removeCategory = await this.categoryService.remove(id);
    if (!removeCategory) {
      throw new NotFoundException("Category does not exist!");
    }
    return res.status(HttpStatus.OK).json({
      message: "Category has been deleted",
      category: removeCategory
    });
  }
}
