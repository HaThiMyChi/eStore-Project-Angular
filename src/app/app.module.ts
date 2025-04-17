import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './home/not-found/not-found.component';
import { PastordersComponent } from './home/components/pastorders/pastorders.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, PastordersComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
