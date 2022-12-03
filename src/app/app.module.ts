import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyActivityComponent } from './my-activity/my-activity.component';
import { HistoryComponent } from './history/history.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { OptionsComponent } from './options/options.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgDialogAnimationService } from 'ng-dialog-animation';

@NgModule({
  declarations: [
    AppComponent,
    MyActivityComponent,
    HistoryComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NzProgressModule,
    NgApexchartsModule,
    NgChartsModule,
    MatDialogModule,
    NoopAnimationsModule
  ],
  providers: [
    NgDialogAnimationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
