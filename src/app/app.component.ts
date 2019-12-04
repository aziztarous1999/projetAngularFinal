import { Component } from '@angular/core';
import { DataService } from './data.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniProject';
  connecte:boolean;
  role="";
  image="../assets/userimg/";
  nb:number;
  article:  any[];
  
  constructor(private data:DataService,db:AngularFireDatabase){
    db.list('/article').valueChanges().subscribe(article =>{
      this.article=article;
      })
  }
  ngOnInit() {
    this.nb=this.data.nbProduit; 
    this.connecte=this.data.connecte;
  }
  update(){

      this.nb=this.data.nbProduit;      

  }


}
