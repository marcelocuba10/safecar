import { AppService } from './../../services/app.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {

  private cars: any;

  constructor(
    public apiService: ApiService,
    private firestore: AngularFirestore,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.apiService.getCars().subscribe(response => {
        this.cars = response;
        console.log(this.cars);
      });
  }

}
