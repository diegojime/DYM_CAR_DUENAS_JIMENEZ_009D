import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  

  constructor(private Http: HttpClient) {}


    getTopHeadLines(){
      return this.Http.get('https://jsonplaceholder.typicode.com/comments');
  }
}
