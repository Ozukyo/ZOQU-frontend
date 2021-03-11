import {IUserDataDto} from './interfaces/IUserDataDto';

export class UserData {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  phonenumber: string;
  description: string;
  webpage: string;
  password: string;

  constructor(input: IUserDataDto) {
    this.id = input.id;
    this.firstname = input.first_name;
    this.lastname = input.last_name;
    this.email = input.email;
    this.phonenumber = input.phone_number;
    this.webpage = input.web_page;
    this.description = input.description;
    this.password = input.password;
  }
}

