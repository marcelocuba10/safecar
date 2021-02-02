import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
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
  private loading: any;
  private workshops: any;
  private dateFormat: string;

  constructor(
    private actRoute: ActivatedRoute,
    public apiService: ApiService,
    private navCtrl: NavController,
    private appService: AppService,
    private loadingCtrl: LoadingController,
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
    console.log(this.dateFormat);
  }

  public getMaintenanceById() {
    this.apiService.getMaintenanceById(this.id).
      subscribe(response => {
        this.maintenance = response;
        console.log("response", this.maintenance);
      });
  }

  public getWorkshops() {
    this.apiService.getWorkshops().subscribe(response => {
      this.workshops = response;
      console.log("response:", this.workshops);
    })
  }

  async savedata(data) {

    if (await this.appService.formValidation(data)) {
      await this.presentLoading();
      this.maintenance.data = this.dateFormat;

      if (this.id) {
        console.log(this.id);
        console.log(this.maintenance);
        try {
          await this.apiService.updateMaintenance(this.id, this.maintenance).subscribe(response => {
            this.loading.dismiss();
            this.appService.presentToast("Manutenção atualizado com exito!")
            this.navCtrl.navigateRoot("/maintenances");
          })
        } catch (error) {
          this.appService.presentToast(error);
          this.loading.dismiss();
        }

      } else {
        try {
          console.log(data);
          this.apiService.createMaintenance(data).subscribe((response) => {
            console.log('response:', response);
            this.navCtrl.navigateRoot("/maintenances");
          });

          this.loading.dismiss();
          this.appService.presentToast("Manutenção criado com exito!")
          this.navCtrl.navigateRoot("/maintenances");

        } catch (error) {
          this.appService.presentToast(error);
          this.loading.dismiss();
          console.log(error);
        }
      }
    }
  }

  async presentLoading() {

    this.loading = await this.loadingCtrl.create({ message: "Espere.." });
    return this.loading.present();

  }

}
