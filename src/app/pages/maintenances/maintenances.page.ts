import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-maintenances',
  templateUrl: './maintenances.page.html',
  styleUrls: ['./maintenances.page.scss'],
})
export class MaintenancesPage implements OnInit {

  private maintenances: any;

  constructor(
    private apiservice: ApiService
  ) { }

  ngOnInit() {
    this.apiservice.getMaintenances().subscribe(response => {
      this.maintenances = response;
      console.log("response:", this.maintenances);
    });
  }

}
