import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Workshop } from 'src/app/models/workshop';
import { ApiService } from 'src/app/services/api.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-detail-workshop',
  templateUrl: './detail-workshop.page.html',
  styleUrls: ['./detail-workshop.page.scss'],
})
export class DetailWorkshopPage implements OnInit {

  private id: any;
  private workshop = {} as Workshop;
  private loading: any;

  constructor(
    private actRoute: ActivatedRoute,
    public apiService: ApiService,
    private navCtrl: NavController,
    private appService: AppService,
    private loadingCtrl: LoadingController,
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get("id");
    console.log(this.id);
  }

  ngOnInit() {
    if (this.id) {
      this.getWorkshopById();
    }
  }

  getWorkshopById() {
    this.apiService.getWorkshop(this.id).
      subscribe(response => {
        console.log("page", response);
        this.workshop = response;
      });
  }

}
