import { NetserviceService } from './../netservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
movies:any=[];
city="";
url="https://us-central1-bkyow-22da6.cloudfunctions.net/app/movies";
  constructor(private net:NetserviceService, private router:Router, private route:ActivatedRoute ) { }
languageArray=["Hindi","English","Panjabi","Tamil"];
languageSelected="";
language="";
lang=null;
formatArray=["2D","3D","4Dx"];
formatSelected="";
format=null;
forma=null;
genreArray=["Action","Advanture","Biography","Comedy"];
genreSelected="";
genre="";
gen="";
search="";
languageStructure=null;
formatStructure=null;
genreStructure=null;
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.city = params.get("city");
     });
   this.route.queryParamMap.subscribe(param=>{
    console.log(this.router.url);
    this.lang = param.get("lang");
    this.forma = param.get("format");
    this.gen = param.get("genre");
    this.search = param.get("q");
    console.log(this.lang,this.forma,this.gen,this.search);
    this.getData();
   });
   this.makeStructure();
   this.getData();
  }
  makeStructure(){
   
    this.languageSelected = this.language ? this.language:"";
    this.languageStructure = this.languageArray.map(pl1=>({
      language:pl1,
      selected:false
    }));
    let temp1 = this.languageSelected.split(",");
    for(let i=0;i<temp1.length;i++){
      let item = this.languageStructure.find(p=>p.language===temp1[i]);
      if(item) item.selected=true;
    }

    this.formatSelected = this.format ? this.format:"";
    this.formatStructure = this.formatArray.map(pl1=>({
      format:pl1,
      selected:false
    }));
    let temp2 = this.formatSelected.split(",");
    for(let i=0;i<temp2.length;i++){
      let item = this.formatStructure.find(p=>p.format===temp1[i]);
      if(item) item.selected=true;
    }
     
    this.genreSelected = this.genre ? this.genre:"";
    this.genreStructure = this.genreArray.map(pl1=>({
      genre:pl1,
      selected:false
    }));
    let temp3 = this.genreSelected.split(",");
    for(let i=0;i<temp3.length;i++){
      let item = this.genreStructure.find(p=>p.genre===temp1[i]);
      if(item) item.selected=true;
    }
    
  }
getData(){
  console.log(this.router.url);
 var temp= this.url+this.router.url.substring(5,this.router.url.length);
 /*if(this.city&&!this.lang&&!this.forma&&!this.gen){
  temp= this.url+this.city;
 }

 if(this.city&&this.search&&this.lang&&this.forma&&this.gen||this.search){
  temp= this.url+this.city+"?q="+this.search;
 }
 if(this.city&&!this.search&&!this.lang&&this.forma&&!this.gen){
  temp= this.url+this.city+"?format="+this.forma;
 }
 if(this.city&&!this.search&&!this.lang&&!this.forma&&this.gen){
  temp= this.url+this.city+"?genre="+this.gen;
 }
 if(this.city&&this.search&&this.lang&&this.forma&&this.gen){
  temp= this.url+this.city+"?lang="+this.lang+"&genre="+this.gen+"&format="+this.forma+"&q="+this.search;
 }
if(this.lang&&this.city&&!this.forma&&!this.gen&&!this.search){
  temp= this.url+this.city+"?lang="+this.lang;
}
if(this.lang&&this.city&&this.forma&&this.gen&&!this.search){
  temp= this.url+this.city+"?lang="+this.lang+"&format="+this.forma+"&genre="+this.gen;
}
 if(this.lang&&this.city&&this.forma&&!this.gen&&!this.search){
  temp= this.url+this.city+"?lang="+this.lang+"&format="+this.forma;
}
if(this.lang&&this.city&&this.forma&&!this.gen&&!this.search){
  temp= this.url+this.city+"?lang="+this.lang+"&genre="+this.gen;
}
if(this.lang&&this.city&&this.forma&&!this.gen&&!this.search){
  temp= this.url+this.city+"?format="+this.forma+"&genre="+this.gen;
}*/
  this.net.getData(temp).subscribe(resp=>{
    this.net.details=resp; 
    this.movies=this.net.details;
     console.log(resp);
  });
  console.log(temp);
}
optChange(){
  let path="/home/"+this.city;
    let arr=[];
    let queryParams={};
  let temp1 =this.languageStructure.filter(p=>p.selected);
    let temp2 = temp1.map(p1=>p1.language);
    this.languageSelected=temp2.join(",");
   if(this.languageSelected){
     arr.push({lang:this.languageSelected});
    }
  else
    arr.push({lang:null});
  
    let temp3 =this.formatStructure.filter(p=>p.selected);
    let temp4 = temp3.map(p1=>p1.format);
    this.formatSelected=temp4.join(",");
   if(this.formatSelected){
     arr.push({format:this.formatSelected});
    }
  else
    arr.push({format:null});
let temp5 =this.genreStructure.filter(p=>p.selected);
    let temp6 = temp5.map(p1=>p1.genre);
    this.genreSelected=temp6.join(",");
   if(this.genreSelected){
     arr.push({genre:this.genreSelected});
    }
  else
    arr.push({genre:null});
      queryParams = arr.reduce((arr, item) => Object.assign(arr, item, {}));
      this.router.navigate([path],{queryParams:queryParams,queryParamsHandling:"merge"});
    
    console.log(queryParams);
    console.log(this.languageSelected,this.languageStructure);
}
showDetails(i){
  this.net.moviecity=this.city;
  this.router.navigate(['/home/'+this.city+'/'+i]);
}
}
