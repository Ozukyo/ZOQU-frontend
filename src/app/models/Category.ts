import {Subcategory} from './Subcategory';

export interface Category {
  id: number;
  name: string;
  subcategory_id: number;
  subcategories: Subcategory[];
}
