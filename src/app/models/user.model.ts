import {Course} from "./course.model";

export class User {
  id : number;
  username : String;
  email : String;
  password : String;
  role : Array<String>
  courses: Array<Course>
}
