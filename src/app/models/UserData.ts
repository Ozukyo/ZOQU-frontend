import {IUserDataDto} from './interfaces/IUserDataDto';

export class UserDataModel {
  public userId: number;
  public userEmail: string;
  public userPassword: string;
  public emailAlias: string;
  public emailDomain: string;

  constructor(input: IUserDataDto) {
    this.userId = input.user_id;
    this.userEmail = input.user_email;
    this.userPassword = input.user_password;
    this.parseEmailAddress(input.user_email);
  }

  private parseEmailAddress(emailAddress: string = ''): void {
    [this.emailAlias, this.emailDomain] = emailAddress.split('@');
  }
}
