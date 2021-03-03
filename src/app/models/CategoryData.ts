import {ICategoryDataDto} from './interfaces/ICategoryDataDto';

export class CategoryData {
  public id: number;
  public name: string;
  public parentId: number;
  public categoryLevel: number;
  public subcategories: CategoryData[];

  constructor(input: ICategoryDataDto) {
    this.id = input.id;
    this.name = input.category_name;
    this.parentId = input.parent_id;
    this.subcategories = [];
  }
}
