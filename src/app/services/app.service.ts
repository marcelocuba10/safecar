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

  async presentLoading(status) {
    //status if present 1 or dismiss 0

    if (status == 1) {
      this.loading = await this.loadingCtrl.create({ message: "Espere.." });
      return this.loading.present();
    } else if (status == 0) {
      return this.loading.dismiss();
    }
  }

  async formValidation(model, page) {

    if (page == "maintenance") {
      if (!model.km) {
        this.presentAlert("Insira o quilometragem atual");
        return false;
      }
      if (!model.km_prox) {
        this.presentAlert("Insira o próximo quilometragem para manutenção");
        return false;
      }
      if (!model.manutencao) {
        this.presentAlert("Selecione o tipo de manutenção realizada");
        return false;
      }
      if (!model.mecanica) {
        this.presentAlert("Selecione a mecanica responsavel pela manutenção realizada");
        return false;
      }
    }

    if (page == "expense") {
      if (!model.nome) {
        this.presentAlert("Insira o nome");
        return false;
      }
      if (!model.id_veiculo) {
        this.presentAlert("Selecione um veiculo");
        return false;
      }
    }

    if (page == "car") {
      if (!model.nome) {
        this.presentAlert("Ingrese o nome");
        this.loading.dismiss();
        return false;
      }
      if (!model.modelo) {
        this.presentAlert("Ingrese o modelo");
        this.loading.dismiss();
        return false;
      }
      if (!model.km) {
        this.presentAlert("Ingrese o quilometragem atual");
        this.loading.dismiss();
        return false;
      }
      if (!model.cambio) {
        this.presentAlert("Ingrese o cambio");
        this.loading.dismiss();
        return false;
      }
      if (!model.marca) {
        this.presentAlert("Ingrese a marca");
        this.loading.dismiss();
        return false;
      }
      if (!model.cor) {
        this.presentAlert("Ingrese o cor");
        this.loading.dismiss();
        return false;
      }
      if (!model.carroceria) {
        this.presentAlert("Ingrese a carroceria");
        this.loading.dismiss();
        return false;
      }
      if (!model.portas) {
        this.presentAlert("Ingrese a quantidade de portas");
        this.loading.dismiss();
        return false;
      }
      if (!model.motorizacao) {
        this.presentAlert("Ingrese motorizacao");
        this.loading.dismiss();
        return false;
      }
      if (!model.combustivel) {
        this.presentAlert("Ingrese o tipo de combustivel");
        this.loading.dismiss();
        return false;
      }
      if (!model.chassi) {
        this.presentAlert("Ingrese o nro do chassi");
        this.loading.dismiss();
        return false;
      }
    }

    if (page != "car") {
      if (!model.custo) {
        this.presentAlert("Insira o custo");
        return false;
      }
      if (!model.data) {
        this.presentAlert("Insira a data");
        return false;
      }
    }

    return true;

  }

}
