
import { NetserviceService } from './../netservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-show-seats',
  templateUrl: './show-seats.component.html',
  styleUrls: ['./show-seats.component.css']
})
export class ShowSeatsComponent implements OnInit {
place;
path="";
city;
id;
paymentDetails={};
arrTicket=[];
total=0;
moviename="";
ticket=0;
daydate;
selecttime;
details=[];
hide0="s";
index=0;
stime="";
today=new Date();
tomorrow =  new Date(this.today);
tom=this.tomorrow.setDate(this.tomorrow.getDate()+1);
yes1=new Date(this.tom);
yes = this.yes1.setDate(this.yes1.getDate()+1);
constructor(private net:NetserviceService, private router:Router, private route:ActivatedRoute ) { }
url="https://us-central1-bkyow-22da6.cloudfunctions.net/app/seats";
urlpost="https://us-central1-bkyow-22da6.cloudfunctions.net/app/seat";
  ngOnInit() {
    this.route.queryParamMap.subscribe(param=>{
     this.daydate=param.get("time");
    });
    this.selecttime=this.net.selecttime;
    this.place=this.net.placedetail;
    this.place.timings.map(n=>n.color=false);
    this.id=this.net.movieid;
     this.moviename=this.net.details.title;
    this.city=this.net.moviecity;
    console.log( this.selecttime, this.place,this.id, this.daydate, this.moviename, this.city)
    this.path="/home/"+this.city+'/'+this.id;
    this.getData();
   
  }
  
getData(){
  this.net.getData(this.url).subscribe(resp=>{
    console.log(resp);
    this.net.seatdetails=resp;
     this.details=this.net.seatdetails[0].seats;
      console.log(this.details);
      this.showDetails(this.selecttime,this.index);
  });
}
showDetails(t,i){
  this.ticket=0;
  this.total=0;
  this.arrTicket=[];
   this.place.timings.map(n=>{
      this.selecttime=t;
      if(n.name==t)
         n.color=true;
      else n.color=false;
    });
  if(i==0||i==3||i==6||i==9){
    this.index=0;
  this.details=this.net.seatdetails[this.index].seats;
    this.details[0].seatList.map(n=>n.booked=false);
  }
  if(i==1||i==4||i==7||i==10){
    this.index=1;
    this.details=this.net.seatdetails[this.index].seats;
   
  } 
  if(i==2||i==5||i==8||i==11){
    this.index=2;
    this.details=this.net.seatdetails[this.index].seats;
  
  } 
 for(var j=0;j<this.details.length;j++){
  this.details[j].seatList.map(n=> n.booked=false );
 }
 console.log(this.details,this.net.seatdetails[this.index].seats);
}
addPrice(i,seatNo){
  this.details[i].seatList.map(n=>{
    if(n.seatNo==seatNo){
      n.booked=!n.booked;
      if( n.booked==true){
        this.total =this.total+this.details[i].price;
        this.ticket=this.ticket+1;
        this.arrTicket.push(this.details[i].rowName+seatNo);
      }
      else{
        this.arrTicket.splice(this.arrTicket.indexOf(this.details[i].rowName+seatNo),1);
        this.total =this.total-this.details[i].price;
        this.ticket=this.ticket-1;
      }
    }
    });
 
}
payment(){
 this.net.time=this.daydate;
 var obj={title: this.moviename,movieHall: this.place.name,tickets:this.arrTicket ,amount: this.total,time: this.selecttime,date:this.daydate};
 this.net.postData(this.urlpost,obj).subscribe(resp=>{
  console.log(resp);
},error=>{
  console.log(error);
})
setTimeout(()=>{
  this.net.ticket=this.ticket;
  this.router.navigate(['/payment']);
},3000);
 
}
}
