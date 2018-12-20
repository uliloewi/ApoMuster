import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { ChangeCustomerNumberComponent } from './change-customer-number/change-customer-number.component';
import { SearchpharmacyComponent } from './searchpharmacy/searchpharmacy.component';
import { PharmacyinfoComponent } from './pharmacyinfo/pharmacyinfo.component';
import { OrderinfoComponent } from './orderinfo/orderinfo.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'changecustomernumber',
    component: ChangeCustomerNumberComponent
  },
  {
    path: 'searchpharmacy',
    component: SearchpharmacyComponent
  },
  {
    path: 'pharmacyinfo/:number',
    component: PharmacyinfoComponent
  },
  {
    path: 'orderinfo/:id',
    component: OrderinfoComponent
  },
  {
    path: 'special',
    canActivate: [AuthGuard],
    component: SpecialEventsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
