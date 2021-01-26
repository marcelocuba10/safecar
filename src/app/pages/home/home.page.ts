import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  arrayPosts:any; //Creamos la variable donde guardaremos los datos que nos retorna el servicio
  arrayCars:any;
  constructor(public apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getFrase().subscribe(data => (this.arrayPosts = data));
    console.log(this.arrayPosts);
    //this.getPosts();//Llamamos a la función getPost cuando la vista se cargue
  }

  // getPosts() { 
  //   this.apiService.getPosts()
  //   .then(data => {
  //     this.arrayPosts = data;
  //   });
  // }

  // getPosts(){
  //   this.apiService.getPosts()
  //   .subscribe(arrayPosts=>{
  //     console.log(arrayPosts);
  //   });
  // }

}
