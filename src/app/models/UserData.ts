import {IUserDataDto} from './interfaces/IUserDataDto';

export class UserData {
  // id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;

  constructor(input: IUserDataDto) {
    // this.id = input.id;
    this.firstname = input.first_name;
    this.lastname = input.last_name;
    this.email = input.email;
    this.password = input.password;
  }

}

