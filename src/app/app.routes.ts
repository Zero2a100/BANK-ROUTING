import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {path: '',
    component: HomeComponent},
    {path: 'customers',
    component: CustomerComponent},
    {path: 'products', 
    component: ProductsComponent}
];
