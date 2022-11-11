import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";
import {Landing} from "../models/landing.model";

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private http: HttpClient) { }

  getLanding(){
    return this.http.get('http://localhost:1337/api/landing-page').pipe(map((res: any)=>{
      let landing = new Landing();
      console.log(res);
      landing.mission = res["data"]["attributes"]["Mission"];
      landing.vision = res["data"]["attributes"]["Vision"];
      landing.believe = res["data"]["attributes"]["Beilive"];
      console.log(landing);
      return landing;
    }))
  }
}
