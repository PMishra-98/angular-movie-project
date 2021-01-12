import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})
export class LeftpanelComponent implements OnInit {
  @Input() languageCB;
  @Input() genreCB;
  @Input() formatCB;
  @Output() optSel=new EventEmitter();
  constructor() { }
  hide1="h";
  hide2="h";
  hide3="h";
  isExpanded1:boolean;
  isExpanded2:boolean;
  isExpanded3:boolean;
  toggle1(){
  this.isExpanded1=!this.isExpanded1;
  if(this.isExpanded1) this.hide1="s";
  else this.hide1="h";
  }
  toggle2(){
    this.isExpanded2=!this.isExpanded2;
    if(this.isExpanded2) this.hide2="s";
    else this.hide2="h";
  }
  toggle3(){
    this.isExpanded3=!this.isExpanded3;
    if(this.isExpanded3) this.hide3="s";
    else this.hide3="h";
  }
  ngOnInit() {
  }

 eventChange(){
   console.log(this.languageCB);
  this.optSel.emit();
 }
 
}
