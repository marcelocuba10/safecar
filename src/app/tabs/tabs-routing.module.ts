import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'product',
        loadChildren: () => import('../pages/product/product.module').then(m => m.ProductPageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('../pages/orders/orders.module').then(m => m.OrdersPageModule)
      },
      {
        path: 'sales',
        loadChildren: () => import('../pages/sales/sales.module').then(m => m.SalesPageModule)
      },
      {
        path: 'detail-product/:id',
        loadChildren: () => import('../pages/detail-product/detail-product.module').then(m => m.DetailProductPageModule)
      },
      {
        path: 'detail-product',
        loadChildren: () => import('../pages/detail-product/detail-product.module').then(m => m.DetailProductPageModule)
      },
      {
        path: 'detail-sale/:id',
        loadChildren: () => import('../pages/detail-sale/detail-sale.module').then(m => m.DetailSalePageModule)
      },
      {
        path: 'detail-sale',
        loadChildren: () => import('../pages/detail-sale/detail-sale.module').then(m => m.DetailSalePageModule)
      },
      {
        path: 'modal-detail/:id',
        loadChildren: () => import('../pages/modal-detail/modal-detail.module').then(m => m.ModalDetailPageModule)
      },
      {
        path: 'detail-order/:id',
        loadChildren: () => import('../pages/detail-order/detail-order.module').then(m => m.DetailOrderPageModule)
      },
      {
        path: 'detail-order',
        loadChildren: () => import('../pages/detail-order/detail-order.module').then(m => m.DetailOrderPageModule)
      },
      {
        path: 'cars',
        loadChildren: () => import('../pages/cars/cars.module').then(m => m.CarsPageModule)
      },
      {
        path: 'detail-car',
        loadChildren: () => import('../pages/detail-car/detail-car.module').then(m => m.DetailCarPageModule)
      },
      {
        path: 'detail-car/:id',
        loadChildren: () => import('../pages/detail-car/detail-car.module').then(m => m.DetailCarPageModule)
      },
      {
        path: 'maintenances',
        loadChildren: () => import('../pages/maintenances/maintenances.module').then(m => m.MaintenancesPageModule)
      },
      {
        path: 'detail-maintenance',
        loadChildren: () => import('../pages/detail-maintenance/detail-maintenance.module').then(m => m.DetailMaintenancePageModule)
      },
      {
        path: 'detail-maintenance/:id',
        loadChildren: () => import('../pages/detail-maintenance/detail-maintenance.module').then(m => m.DetailMaintenancePageModule)
      },
      {
        path: 'workshops',
        loadChildren: () => import('../pages/workshops/workshops.module').then(m => m.WorkshopsPageModule)
      },
      {
        path: 'detail-workshop',
        loadChildren: () => import('../pages/detail-workshop/detail-workshop.module').then(m => m.DetailWorkshopPageModule)
      },
      {
        path: 'detail-workshop/:id',
        loadChildren: () => import('../pages/detail-workshop/detail-workshop.module').then(m => m.DetailWorkshopPageModule)
      },
      {
        path: 'expenses',
        loadChildren: () => import('../pages/expenses/expenses.module').then(m => m.ExpensesPageModule)
      },
      {
        path: 'detail-expense',
        loadChildren: () => import('../pages/detail-expense/detail-expense.module').then(m => m.DetailExpensePageModule)
      },
      {
        path: 'detail-expense/:id',
        loadChildren: () => import('../pages/detail-expense/detail-expense.module').then(m => m.DetailExpensePageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../pages/user/user.module').then(m => m.UserPageModule)
      },
      {
        path: 'detail-user',
        loadChildren: () => import('../pages/detail-user/detail-user.module').then(m => m.DetailUserPageModule)
      },
      {
        path: 'detail-user/:id',
        loadChildren: () => import('../pages/detail-user/detail-user.module').then(m => m.DetailUserPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/cars',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/cars',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'product',
    redirectTo: '/tabs/product',
    pathMatch: 'full'
  },
  {
    path: 'orders',
    redirectTo: '/tabs/orders',
    pathMatch: 'full'
  },
  {
    path: 'sales',
    redirectTo: '/tabs/sales',
    pathMatch: 'full'
  },
  {
    path: 'detail-product/:id',
    redirectTo: '/tabs/detail-product/:id',
    pathMatch: 'full'
  },
  {
    path: 'detail-product',
    redirectTo: '/tabs/detail-product',
    pathMatch: 'full'
  },
  {
    path: 'detail-sale/:id',
    redirectTo: '/tabs/detail-sale/:id',
    pathMatch: 'full'
  },
  {
    path: 'detail-sale',
    redirectTo: '/tabs/detail-sale',
    pathMatch: 'full'
  },
  {
    path: 'modal-detail/:id',
    redirectTo: '/tabs/modal-detail/:id',
    pathMatch: 'full'
  },
  {
    path: 'detail-order/:id',
    redirectTo: '/tabs/detail-order/:id',
    pathMatch: 'full'
  },
  {
    path: 'detail-order',
    redirectTo: '/tabs/detail-order',
    pathMatch: 'full'
  },
  {
    path: 'cars',
    redirectTo: '/tabs/cars',
    pathMatch: 'full'
  },
  {
    path: 'detail-car',
    redirectTo: '/tabs/detail-car',
    pathMatch: 'full'
  },
  {
    path: 'detail-car/:id',
    redirectTo: '/tabs/detail-car/:id',
    pathMatch: 'full'
  },
  {
    path: 'workshops',
    redirectTo: '/tabs/workshops',
    pathMatch: 'full'
  },
  {
    path: 'detail-workshop',
    redirectTo: '/tabs/detail-workshop',
    pathMatch: 'full'
  },
  {
    path: 'detail-workshop/:id',
    redirectTo: '/tabs/detail-workshop/:id',
    pathMatch: 'full'
  },
  {
    path: 'maintenances',
    redirectTo: '/tabs/maintenances',
    pathMatch: 'full'
  },
  {
    path: 'detail-maintenance',
    redirectTo: '/tabs/detail-maintenance',
    pathMatch: 'full'
  },
  {
    path: 'detail-maintenance/:id',
    redirectTo: '/tabs/detail-maintenance/:id',
    pathMatch: 'full'
  },
  {
    path: 'expenses',
    redirectTo: '/tabs/expenses',
    pathMatch: 'full'
  },
  {
    path: 'detail-expense',
    redirectTo: '/tabs/detail-expense',
    pathMatch: 'full'
  },
  {
    path: 'detail-expense/:id',
    redirectTo: '/tabs/detail-expense/:id',
    pathMatch: 'full'
  },
  {
    path: 'user',
    redirectTo: '/tabs/user',
    pathMatch: 'full'
  },
  {
    path: 'detail-user',
    redirectTo: '/tabs/detail-user',
    pathMatch: 'full'
  },
  {
    path: 'detail-user/:id',
    redirectTo: '/tabs/detail-user/:id',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }