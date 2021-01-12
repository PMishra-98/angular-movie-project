import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetserviceService {
moviecity="";
placedetail={};
movieid;
time;
ticket;
path="";
selecttime;
payment;
seatdetails:any=[];
details:any=[];
  constructor(private http:HttpClient) { }
  getData(url){
    return this.http.get(url);
  }
  postData(url,obj){
    return this.http.post(url,obj);
  }
}
