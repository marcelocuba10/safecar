import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('./pages/cars/cars.module').then( m => m.CarsPageModule)
  },
  {
    path: 'detail-car',
    loadChildren: () => import('./pages/detail-car/detail-car.module').then( m => m.DetailCarPageModule)
  },
  {
    path: 'detail-car/:id',
    loadChildren: () => import('./pages/detail-car/detail-car.module').then( m => m.DetailCarPageModule)
  },
  {
    path: 'maintenances',
    loadChildren: () => import('./pages/maintenances/maintenances.module').then( m => m.MaintenancesPageModule)
  },
  {
    path: 'detail-maintenance',
    loadChildren: () => import('./pages/detail-maintenance/detail-maintenance.module').then( m => m.DetailMaintenancePageModule)
  },
  {
    path: 'detail-maintenance/:id',
    loadChildren: () => import('./pages/detail-maintenance/detail-maintenance.module').then( m => m.DetailMaintenancePageModule)
  },
  {
    path: 'workshops',
    loadChildren: () => import('./pages/workshops/workshops.module').then( m => m.WorkshopsPageModule)
  },
  {
    path: 'expenses',
    loadChildren: () => import('./pages/expenses/expenses.module').then( m => m.ExpensesPageModule)
  },
  {
    path: 'detail-expense',
    loadChildren: () => import('./pages/detail-expense/detail-expense.module').then( m => m.DetailExpensePageModule)
  },
  {
    path: 'detail-expense/:id',
    loadChildren: () => import('./pages/detail-expense/detail-expense.module').then( m => m.DetailExpensePageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'detail-user',
    loadChildren: () => import('./pages/detail-user/detail-user.module').then( m => m.DetailUserPageModule)
  },
  {
    path: 'detail-user/:id',
    loadChildren: () => import('./pages/detail-user/detail-user.module').then( m => m.DetailUserPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
