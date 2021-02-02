import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage implements OnInit {

  private expenses: any;

  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getExpenses().subscribe(response => {
      this.expenses = response;
      console.log(this.expenses);
    });
  }

}
