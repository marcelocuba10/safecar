import { SearchType, ApiService } from './../../services/api.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {

  private cars: any;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCars()
      .subscribe(data => {
        this.cars = data;
        console.log(this.cars);
      });
  }

}
