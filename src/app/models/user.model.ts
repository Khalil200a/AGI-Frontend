import {Role} from "./role.model";

export class User {
  id : number;
  username : String;
  email : String;
  password : String;
  role : Array<String>
}
