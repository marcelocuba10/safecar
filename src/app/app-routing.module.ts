import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'detail-product/:id',
    loadChildren: () => import('./pages/detail-product/detail-product.module').then( m => m.DetailProductPageModule)
  },
  {
    path: 'detail-product',
    loadChildren: () => import('./pages/detail-product/detail-product.module').then( m => m.DetailProductPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('./pages/sales/sales.module').then( m => m.SalesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detail-sale',
    loadChildren: () => import('./pages/detail-sale/detail-sale.module').then( m => m.DetailSalePageModule)
  },
  {
    path: 'modal-product',
    loadChildren: () => import('./pages/modal-product/modal-product.module').then( m => m.ModalProductPageModule)
  },
  {
    path: 'modal-detail',
    loadChildren: () => import('./pages/modal-detail/modal-detail.module').then( m => m.ModalDetailPageModule)
  },
  {
    path: 'modal-detail/:id',
    loadChildren: () => import('./pages/modal-detail/modal-detail.module').then( m => m.ModalDetailPageModule)
  },
  {
    path: 'detail-order',
    loadChildren: () => import('./pages/detail-order/detail-order.module').then( m => m.DetailOrderPageModule)
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
    path: 'detail-workshop',
    loadChildren: () => import('./pages/detail-workshop/detail-workshop.module').then( m => m.DetailWorkshopPageModule)
  },
  {
    path: 'detail-workshop/:id',
    loadChildren: () => import('./pages/detail-workshop/detail-workshop.module').then( m => m.DetailWorkshopPageModule)
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
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
