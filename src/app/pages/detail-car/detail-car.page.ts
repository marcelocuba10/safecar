import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Cars } from 'src/app/models/cars';
import { AppService } from 'src/app/services/app.service';
import { ApiService } from './../../services/api.service';
@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.page.html',
  styleUrls: ['./detail-car.page.scss'],
})
export class DetailCarPage implements OnInit {

  private id: any;
  private car = {} as Cars;
  public years = this.appService.getYears();
  public token: number;

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
      this.getCarById();
    }
  }

  getCarById() {
    this.apiService.getCarById(this.id).subscribe(response => {
      this.car = response;
    });
  }

  async savedata(data) {

    if (await this.appService.formValidation(data, "car")) {
      await this.appService.presentLoading(1);

      if (this.id) {
        try {
          await this.apiService.updateCar(this.id, this.car).subscribe(response => {
            this.appService.presentLoading(0);
            this.appService.presentToast("Veiculo atualizado com exito!")
            this.navCtrl.navigateRoot("/cars");
          })
        } catch (error) {
          this.appService.presentToast(error);
          this.appService.presentLoading(0);
          console.log(error);
        }
      } else {
        try {
          this.apiService.createCar(data).subscribe((response) => {
            this.appService.presentLoading(0);
            this.appService.presentToast("Veiculo criado com exito!")
            this.navCtrl.navigateRoot("/cars");
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
