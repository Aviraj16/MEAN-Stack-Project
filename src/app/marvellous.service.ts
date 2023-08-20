import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  constructor(private Http : HttpClient) {  }

  getBatches()
  {
    return this.Http.get("http://localhost:5100")
  }
}

