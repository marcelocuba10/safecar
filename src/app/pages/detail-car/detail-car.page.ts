import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
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
  private loading: any;
  public years = this.appService.getYears();
  public token: number;

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
      this.getCarById();
    }
  }

  getCarById() {
    this.apiService.getCarById(this.id).
      subscribe(response => {
        console.log("page", response);
        this.car = response;
      });
  }

  async savedata(data) {

    if (await this.formValidation()) {
      await this.presentLoading();

      if (this.id) {
        console.log(this.id);
        console.log(this.car);
        try {
          await this.apiService.updateCar(this.id, this.car).subscribe(response => {
            this.loading.dismiss();
            this.appService.presentToast("Veiculo processado com exito!")
            this.navCtrl.navigateRoot("/cars");
          })
        } catch (error) {
          this.appService.presentToast(error);
          this.loading.dismiss();
        }

      } else {
        try {
          console.log(data);
          this.apiService.createCar(data).subscribe((response) => {
            console.log('response:', response);
            this.navCtrl.navigateRoot("/cars");
          });

          this.loading.dismiss();
          this.appService.presentToast("Veiculo processado com exito!")
          this.navCtrl.navigateRoot("/cars");

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

  async formValidation() {

    if (!this.car.nome) {
      this.appService.presentAlert("Insira o nome do veiculo");
      return false;
    }
    if (!this.car.anho_fabricacao) {
      this.appService.presentAlert("Insira o anho de fabricacao");
      return false;
    }
    if (!this.car.modelo) {
      this.appService.presentAlert("Insira um modelo");
      return false;
    }
    if (!this.car.cambio) {
      this.appService.presentAlert("Insira o cambio");
      return false;
    }
    if (!this.car.km) {
      this.appService.presentAlert("Insira o quilometragem");
      return false;
    }
    if (!this.car.placa) {
      this.appService.presentAlert("Insira a placa");
      return false;
    }
    if (!this.car.cor) {
      this.appService.presentAlert("Insira o color");
      return false;
    }
    if (!this.car.carroceria) {
      this.appService.presentAlert("Insira a carroceria");
      return false;
    }
    if (!this.car.portas) {
      this.appService.presentAlert("Insira o nro das portas");
      return false;
    }
    if (!this.car.motorizacao) {
      this.appService.presentAlert("Insira a motorizacao");
      return false;
    }
    if (!this.car.combustivel) {
      this.appService.presentAlert("Insira o tipo de combustivel");
      return false;
    }
    if (!this.car.chassi) {
      this.appService.presentAlert("Insira o nro do chassi");
      return false;
    }
    return true;

  }

}
