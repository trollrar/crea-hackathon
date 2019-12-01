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
import {CompressorStatesComponent} from "./monitoring/compressor-states/compressor-states.component";
import {DigitalStatesComponent} from "./monitoring/digital-states/digital-states.component";
import {EnviromentalComponent} from "./monitoring/enviromental-footprint/enviromental.component";
import {ScoreIndicatorComponent} from "./monitoring/score-indicator/score-indicator.component";
import {SpecificPowerGraphComponent} from "./monitoring/specific-power-graph/specific-power-graph.component";
import {TrendGraphComponent} from "./monitoring/trend-graph/trend-graph.component";
import {TrendComponent} from "./monitoring/trend-summary/trend.component";
import {XYGraphComponent} from "./monitoring/x-y-graph/x-y-graph.component";


@NgModule({
  imports: [
    BrowserModule,
      ChartsModule,
    ReactiveFormsModule,
      HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'device', component: ProductListComponent},
      { path: 'demo', component: DemoComponent },
      { path: 'monitoring', component: MonitoringComponent },
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
      ChartDashboardComponent,
      CompressorStatesComponent,
      DigitalStatesComponent,
      EnviromentalComponent,
      ScoreIndicatorComponent,
      SpecificPowerGraphComponent,
      TrendGraphComponent,
      TrendComponent,
      XYGraphComponent

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
