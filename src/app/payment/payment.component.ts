import { NetserviceService } from './../netservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor(private net:NetserviceService, private router:Router, private route:ActivatedRoute ) { }
details:any;
ticket;
title="";
url="https://us-central1-bkyow-22da6.cloudfunctions.net/app/details";
  ngOnInit() {

   this.ticket=this.net.ticket;
   this.getData();
  }
back(){
 let path=this.net.path;
  let query={time:this.net.time};
  this.router.navigate([path],{queryParams:query});
}
getData(){
  this.net.getData(this.url).subscribe(resp=>{
    this.net.payment=resp;
    this.details=this.net.payment;
    this.title=this.details.title;
    console.log(this.details);
  })
}
}
