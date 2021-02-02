import { Injectable } from '@angular/core';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private loading: any;
  private dateFormat: string;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(message: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Atenção',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  getYears() {
    const now = new Date().getUTCFullYear();
    return Array(now - (now - 20)).fill('').map((v, idx) => now - idx) as Array<number>;
  }

  getDate($event) {
    return this.dateFormat = moment($event.target.value).format('L');;
  }

  async formValidation(model) {
    console.log(model);

    if (!model.data) {
      this.presentAlert("Insira a data");
      return false;
    }
    if (!model.id_veiculo) {
      this.presentAlert("Selecione um veiculo");
      return false;
    }
    if (!model.nome) {
      this.presentAlert("Insira o nome");
      return false;
    }
    if (!model.custo) {
      this.presentAlert("Insira o custo");
      return false;
    }

    return true;

  }

  async presentLoading(status) {
    //status if present or dismiss

    if (status == 1) {
      this.loading = await this.loadingCtrl.create({ message: "Espere.." });
      return this.loading.present();
    } else {
      return this.loading.dismiss();
    }

  }

}
