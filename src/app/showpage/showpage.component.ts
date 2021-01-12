import { NetserviceService } from './../netservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-showpage',
  templateUrl: './showpage.component.html',
  styleUrls: ['./showpage.component.css']
})
export class ShowpageComponent implements OnInit {
price=['0-100', '101-200', '201-300','More than 300'];
showtime=["Morning","Afternoon","Evening","Night"];
priceStructure=null;
priceSelected="";
timeStructure=null;
pr="";
hide1="s";
hide2="h";
hide3="h";
genre1:any="";
genre2:any="";
timeSelected="";
time="";
rating="";title="";votes="";language="";format="";
today=new Date();
url="https://us-central1-bkyow-22da6.cloudfunctions.net/app/movies";
tomorrow =  new Date(this.today);
tom=this.tomorrow.setDate(this.tomorrow.getDate()+1);
yes1=new Date(this.tom);
yes = this.yes1.setDate(this.yes1.getDate()+1);
constructor(private net:NetserviceService, private router:Router, private route:ActivatedRoute ) { }
id="";
x:any="";
city="";
nextDay=0;
details=[];
  ngOnInit() {
    this.x = this.today. getDate()+" TODAY";
    this.city=this.net.moviecity;
    this.route.paramMap.subscribe(params=>{
      this.id = params.get("id");
    this.net.movieid=this.id;
     });
 
   this.makeStructure();
   this.getData();
  }
  makeStructure(){
   
    this.priceSelected = this.pr ? this.pr:"";
    this.priceStructure = this.price.map(pl1=>({
      price:pl1,
      selected:false
    }));
    let temp1 = this.priceSelected.split(",");
    for(let i=0;i<temp1.length;i++){
      let item = this.priceStructure.find(p=>p.price===temp1[i]);
      if(item) item.selected=true;
    }

    this.timeSelected = this.time ? this.time:"";
    this.timeStructure = this.showtime.map(pl1=>({
      time:pl1,
      selected:false
    }));
    let temp2 = this.timeSelected.split(",");
    for(let i=0;i<temp2.length;i++){
      let item = this.timeStructure.find(p=>p.time===temp1[i]);
      if(item) item.selected=true;
    }
     
  }
  heart(i){
  this.details[i].like=!this.details[i].like;
  }
  getData(){
    var temp= this.url+this.router.url.substring(5,this.router.url.length);
      this.net.getData(temp).subscribe(resp=>{
       this.net.details=resp; 
       this.rating=this.net.details.rating;
       this.title=this.net.details.title;
       this.votes=this.net.details.votes;
       var x=this.net.details.genre.split(",");
       this.genre1=x[0];
       this.genre2=x[1];
      console.log(x,this.genre1,this.genre2);

       this.details=this.net.details.showTiming[this.nextDay];
       this.details.map(n => (n.like=false));
        console.log(this.details,this.net.details);
     });
     console.log(temp);
   }
  optChange(){
    let temp1 =this.priceStructure.filter(p=>p.selected);
    let temp2 = temp1.map(p1=>p1.price);
    this.priceSelected=temp2.join(",");
    this.getData();
    var data=this.details;
    setTimeout(()=>{
      if(this.priceSelected){
        console.log(this.details,this.net.details.showTiming[this.nextDay]);
        console.log(this.priceSelected);
         let price=this.priceSelected.split(",");
         this.details=data.filter(obj=>price.find(result=> {
           console.log(result);
          if(result=="0-100"){
            var x= obj.timings.filter(obj1=>obj1.price<=100);
             obj.timings=x
            
             } 
             if(result==="101-200"){
              var x=  obj.timings.filter(obj1=> obj1.price>=101&&obj1.price<=200);
               obj.timings=x;
              return obj;
               } 
             if(result==="201-300"){
                var x=  obj.timings.filter(obj1=>obj1.price>=201&&obj1.price<=300);
                 obj.timings=x;
                  return obj;
                 }  
          if(result==="More than 300"){
            var x=  obj.timings.filter(obj1=> obj1.price>300);
             obj.timings=x;
              return obj;
             } 
             }));
      
       } 

    },3000)
   
    
   /* else
    this.details=this.net.details.showTiming[this.nextDay];
    
      let temp3 =this.timeStructure.filter(p=>p.selected);
      let temp4 = temp3.map(p1=>p1.time);
      this.timeSelected=temp4.join(",");
     if(this.timeSelected){
    this.time=this.timeSelected;
      }
    else
    this.details=this.net.details.showTiming[this.nextDay];*/
   }
   showColor(i){

     if(i===1){
      this.x =document.getElementById("value1").innerText;
       this.nextDay=0;
      this.hide1="s";
      this.hide2="h";
      this.hide3="h";
      this.details=this.net.details.showTiming[0];
     }
     if(i===2){
      this.x =document.getElementById("value2").innerText;
      this.nextDay=1;
      this.hide1="h";
      this.hide2="s";
      this.hide3="h";
      this.details=this.net.details.showTiming[1];
     }
     if(i===3){
      this.x =document.getElementById("value3").innerText;
      this.nextDay=2;
      this.hide1="h";
      this.hide2="h";
      this.hide3="s";
      this.details=this.net.details.showTiming[2];
     }
   
   }
   showSteats(i,t,j){
     this.net.placedetail=this.details[i];
     this.net.selecttime=t;
     let path="/home/"+this.city+"/"+this.id+"/byTicket/"+i+"/"+j+"/"+0;
     this.net.path=path;
     let query={time:this.x}
  
      this.router.navigate([path],{queryParams:query});
   
console.log(path,query);
   }
}
