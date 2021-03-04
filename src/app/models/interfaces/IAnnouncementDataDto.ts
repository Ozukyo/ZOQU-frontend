export interface IAnnouncementDataDto {
  id: number;
  publish_date: Date;
  title: string;
  category_id: number;
  description: string;
  price: number;
  details_id: number;
  views: number;
  is_active: boolean;
}
