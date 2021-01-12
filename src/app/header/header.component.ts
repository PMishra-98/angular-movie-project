import { NetserviceService } from '../netservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  ngOnInit() {
  }
 show:boolean=true;
  search="";
  cityname="NCR";
  city=["NCR","Ahmedabad","Banglore","Chenni","Mumbai","Hyderabad"];
  constructor(private net:NetserviceService, private router:Router, private route:ActivatedRoute ) { }
hideIcon(){
  this.show=false;
}

  showCity(s){
   this.cityname=s;

 }
  searchMovie(s){
 this.search=s;
 
    let path="/home/"+this.cityname;
  if(s){
    console.log(this.cityname);
  
   var query={q:s};
   this.router.navigate([path],{queryParams:query,queryParamsHandling:"merge"});
  }
  else
  this.router.navigate([path]);
 }
 showIcon(s){
  
  if(s.length==0)
  this.show=true;
  else false;
  }
}
