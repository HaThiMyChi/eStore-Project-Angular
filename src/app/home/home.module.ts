import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HomeComponent } from './home/home.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CategorynavigationComponent } from './components/categorynavigation/categorynavigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { CategoryService } from './services/category/category.service';
import { CategoriesStoreItem } from './services/category/categories.storeItem';
import { ProductsStoreItem } from './services/product/products.storeItem';
import { ProductsService } from './services/product/products.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CategorynavigationComponent,
    NotFoundComponent,
    SidenavigationComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    HttpClientModule
  ],
  // exports: [RouterModule]
  providers: [CategoryService, CategoriesStoreItem, ProductsStoreItem, ProductsService]
})
export class HomeModule { }
