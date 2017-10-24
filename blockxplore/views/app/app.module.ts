import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutes } from './app.route';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ChartsModule } from 'ng2-charts';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { Chart3Component } from './chart3/chart3.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    TransactionComponent,
    Chart1Component,
    Chart2Component,
    Chart3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
