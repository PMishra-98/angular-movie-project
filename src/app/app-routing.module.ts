import { PaymentComponent } from './payment/payment.component';
import { ShowpageComponent } from './showpage/showpage.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowSeatsComponent } from './show-seats/show-seats.component';

const routes: Routes = [
  { path:"home/NCR/:id",
      component:ShowpageComponent
    },
    { path:"home/Ahmedabad/:id",
    component:ShowpageComponent
  },
  { path:"home/Banglore/:id",
  component:ShowpageComponent
},
{ path:"home/Chennai/:id",
component:ShowpageComponent
},
  {
    path:"home/:city",
    component:HomeComponent
  },
  {
    path:"home/:city/:id/:by/:id1/:id2/:id3",
    component:ShowSeatsComponent
  },
  {
    path:"payment",
    component:PaymentComponent
  },
  {
    path:"",
     redirectTo:"/home/NCR",pathMatch:'full'
},
{
  path:'**',//when not any path find 
  redirectTo:'/home/NCR',pathMatch:"full"
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
