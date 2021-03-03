export interface IAnnouncementDataDto {
  announcement_id: number;
  publish_date: Date;
  title: string;
  category_id: number;
  description: string;
  price: number;
  details_id: number;
  views: number;
  is_active: boolean;
}
