import { NetserviceService } from './netservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbdCarouselConfig } from './images/images.component';
import { NgImageSliderModule } from 'ng-image-slider';
import {HttpClientModule} from '@angular/common/http';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';

import { ShowpageComponent } from './showpage/showpage.component';
import { ShowSeatsComponent } from './show-seats/show-seats.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgbdCarouselConfig,
    LeftpanelComponent,
    ShowpageComponent,
    ShowSeatsComponent,
    HeaderComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgImageSliderModule,
    HttpClientModule,
   
  ],
  providers: [NetserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
