import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { 
    setInterval(function(){
      let glitch= document.getElementsByClassName('box');
      for(let i=0;i<glitch.length;i++)
      {
      let myStyles= 'bottom:'+ Math.floor(Math.random()*30)+ 'vw'+
        ';left:'+ (Math.floor(Math.random()*150)+5)+'vh'+
        ';width:'+ Math.floor(Math.random()*400)+'px'+
        ';height:'+ Math.floor(Math.random()*100)+'px'+
        ';background-position:'+Math.floor(Math.random()*50)+'px';
    glitch[i].setAttribute("style",myStyles);
  }
    },160);


  }



  ngOnInit() {
}
}