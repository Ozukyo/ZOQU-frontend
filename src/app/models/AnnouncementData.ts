import {IAnnouncementDataDto} from './interfaces/IAnnouncementDataDto';

export class AnnouncementData {
  public announcementId: number;
  public publishDate: Date;
  public title: string;
  public categoryId: number;
  public description: string;
  public price: number;
  public detailsId: number;
  public views: number;
  public isActive: boolean;
  public userId: number;

  constructor(input: IAnnouncementDataDto) {
    this.announcementId = input.id;
    this.publishDate = input.publish_date;
    this.title = input.title;
    this.categoryId = input.category_id;
    this.description = input.description;
    this.price = input.price;
    this.detailsId = input.details_id;
    this.views = input.views;
    this.isActive = input.is_active;
    this.userId = input.user_id;
  }
}
