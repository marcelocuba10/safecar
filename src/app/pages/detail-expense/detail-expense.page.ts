import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Cars } from 'src/app/models/cars';
import { ApiService } from 'src/app/services/api.service';
import { AppService } from 'src/app/services/app.service';
import { Expenses } from '../../models/expenses';

@Component({
  selector: 'app-detail-expense',
  templateUrl: './detail-expense.page.html',
  styleUrls: ['./detail-expense.page.scss'],
})
export class DetailExpensePage implements OnInit {

  private id: any;
  private expense = {} as Expenses;
  private loading: any;
  public car_name: string;
  private cars: any;
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
      this.getExpenseById();
    }

    this.getCars();

  }

  onChange($event) {
    this.dateFormat = this.appService.getDate($event);
    console.log(this.dateFormat);
  }

  public getExpenseById() {
    this.apiService.getExpenseById(this.id).
      subscribe(response => {
        this.expense = response;
        console.log("response", this.expense);
        this.getCarById();
      });

  }

  public getCars() {
    this.apiService.getCars().subscribe(response => {
      this.cars = response;
      console.log("response:", this.cars);
    })
  }

  public getCarById() {
    this.apiService.getCarById(this.expense.id_veiculo).
      subscribe(response => {
        this.car_name = response.nome;
        console.log("response", this.car_name);
      });
  }

  async savedata(data) {

    if (await this.appService.formValidation(this.expense)) {
      await this.appService.presentLoading(1);
      this.expense.data = this.dateFormat;

      if (this.id) {
        try {
          await this.apiService.updateExpense(this.id, this.expense).subscribe(response => {
            console.log('response:', response);
            this.appService.presentLoading(0);
            this.appService.presentToast("Despesa atualizada com exito!")
            this.navCtrl.navigateRoot("/expenses");
          })
        } catch (error) {
          this.appService.presentToast(error);
          this.appService.presentLoading(0);
        }

      } else {
        try {
          console.log(data);
          this.apiService.createExpense(data).subscribe((response) => {
            console.log('response:', response);
            this.navCtrl.navigateRoot("/expenses");
          });

          this.appService.presentLoading(0);
          this.appService.presentToast("Despesa criada com exito!")
          this.navCtrl.navigateRoot("/expenses");

        } catch (error) {
          this.appService.presentToast(error);
          this.appService.presentLoading(0);
          console.log(error);
        }
      }
    }
  }

}
