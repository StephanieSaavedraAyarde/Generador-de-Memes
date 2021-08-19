import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry } from 'rxjs/operators';
import { Meme } from './meme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Generador-de-memes';
  public memes: Meme[] = [];


  constructor(private http: HttpClient){}

  load(): void{
    /*Proceso Asincrono, suscribe: Una vez que tengas la data lo vamos a procesar*/
    console.log("Me estas presionando");

    this.http.get<any>("https://api.imgflip.com/get_memes").subscribe(response => {
      this.memes = response.data.memes;
      console.log("Llegada de datos");
    });
  }
}
