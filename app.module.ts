import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { SearchpharmacyComponent } from './searchpharmacy/searchpharmacy.component';
import { PharmacyinfoComponent } from './pharmacyinfo/pharmacyinfo.component';
import { OrderinfoComponent } from './orderinfo/orderinfo.component';
import { PharmacyheaderComponent } from './pharmacyheader/pharmacyheader.component';
import { PharmacyleftmenuComponent } from './pharmacyleftmenu/pharmacyleftmenu.component';
import { CustomerrequestComponent } from './customerrequest/customerrequest.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent,
    SearchpharmacyComponent,
    PharmacyinfoComponent,
    OrderinfoComponent,
    PharmacyheaderComponent,
    PharmacyleftmenuComponent,
    CustomerrequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    OrderModule
  ],
  providers: [AuthService, AuthGuard, EventService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
