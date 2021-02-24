import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Maintenance } from 'src/app/models/maintenance';
import { ApiService } from 'src/app/services/api.service';
import { AppService } from 'src/app/services/app.service';
@Component({
  selector: 'app-detail-maintenance',
  templateUrl: './detail-maintenance.page.html',
  styleUrls: ['./detail-maintenance.page.scss'],
})
export class DetailMaintenancePage implements OnInit {

  private id: any;
  private maintenance = {} as Maintenance;
  private workshops: any;
  private dateFormat: string;

  constructor(
    private actRoute: ActivatedRoute,
    public apiService: ApiService,
    private navCtrl: NavController,
    private appService: AppService
  ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {

    if (this.id) {
      this.getMaintenanceById();
    }

    this.getWorkshops();

  }

  onChange($event) {
    this.dateFormat = this.appService.getDate($event);
  }

  public getMaintenanceById() {
    this.apiService.getMaintenanceById(this.id).
      subscribe(response => {
        this.maintenance = response;
      });
  }

  public getWorkshops() {
    this.apiService.getWorkshops().subscribe(response => {
      this.workshops = response;
    })
  }

  async savedata(data) {

    if (await this.appService.formValidation(data, "maintenance")) {
      await this.appService.presentLoading(1);
      this.maintenance.data = this.dateFormat;

      if (this.id) {
        try {
          await this.apiService.updateMaintenance(this.id, this.maintenance).subscribe(response => {
            this.appService.presentLoading(0);
            this.appService.presentToast("Manutenção atualizado com exito!")
            this.navCtrl.navigateRoot("/maintenances");
          })
        } catch (error) {
          this.appService.presentToast(error);
          this.appService.presentLoading(0);
          console.log(error);
        }
      } else {
        try {
          this.apiService.createMaintenance(data).subscribe((response) => {
            this.appService.presentLoading(0);
            this.appService.presentToast("Manutenção criado com exito!")
            this.navCtrl.navigateRoot("/maintenances");
          });
        } catch (error) {
          this.appService.presentToast(error);
          this.appService.presentLoading(0);
          console.log(error);
        }
      }
    }
  }

}
