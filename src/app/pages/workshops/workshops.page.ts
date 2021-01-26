import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.page.html',
  styleUrls: ['./workshops.page.scss'],
})
export class WorkshopsPage implements OnInit {

  private workshops: any;

  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getWorkshops()
      .subscribe(data => {
        this.workshops = data;
        console.log(this.workshops);
      });
  }

}
