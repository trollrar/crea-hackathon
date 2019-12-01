import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { DemoComponent } from './demo/demo.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProductListComponent} from "./product-list/product-list.component";
import { ChartsModule } from 'ng2-charts';
import { ChartDashboardComponent } from './dashboard/chart-dashboard/chart-dashboard.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
      ChartsModule,
    ReactiveFormsModule,
      HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'device', component: ProductListComponent},
      { path: 'demo', component: DemoComponent },
    ]),
      FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SidebarComponent,
    MonitoringComponent,
    DemoComponent,
    DashboardComponent,
      ProductListComponent,
      ChartDashboardComponent

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
