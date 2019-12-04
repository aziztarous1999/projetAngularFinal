import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
title="authentification";

username:string="";
password:string="";
account=[];
connecte:boolean;
messageError:string="";
  constructor(private data:DataService,private app:AppComponent) {
   
   }

  ngOnInit() {
    this.account=this.data.account;
    this.connecte=this.data.connecte;
  }

  connecter(){
    for(var i=0;i<this.account.length;i++){
      if(this.username == this.account[i].name && this.password == this.account[i].password){
        this.data.username=this.username;
        this.connecte=true;
        this.app.connecte=true;
        this.app.image+=this.account[i].img;
        this.data.connecte=this.connecte;
        this.data.role=this.account[i].role;
        this.app.role=this.account[i].role;
      }
    }
    if(!this.connecte){
      this.messageError="L'identifiant ou le mot de passe est incorrect !";
    }
  }
  onSubmit()
  {
this.connecter();
  }
  

}
