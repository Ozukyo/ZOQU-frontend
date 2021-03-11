import {IRegisterUserDto} from './interfaces/IRegisterUserDto';


export class RegisterUserData {
  // id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;

  constructor(input: IRegisterUserDto) {
    // this.id = input.id;
    this.firstname = input.first_name;
    this.lastname = input.last_name;
    this.email = input.email;
    this.password = input.password;
  }
}
