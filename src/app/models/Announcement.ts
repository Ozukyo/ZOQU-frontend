import {Data} from '@angular/router';

export interface Announcement {
  id: number;
  publish_date: Data;
  title: string;
  // category_id: Category.ts;
  description: string;
  price: number;
  // details_id: Enum;
  views: number;
  is_active: boolean;
}
