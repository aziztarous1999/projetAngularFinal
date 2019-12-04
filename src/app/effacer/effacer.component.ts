import { Component, OnInit } from '@angular/core';
import { ArticleClassService } from '../article-class.service';
import { DataService } from '../data.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-effacer',
  templateUrl: './effacer.component.html',
  styleUrls: ['./effacer.component.css']
})
export class EffacerComponent implements OnInit {


  title="Effacer Article";
  choix:ArticleClassService ;
  choixID:number;
  identifiant: string ;
  articles=[];
  role:string="";
  effacermessage="";

  constructor(private data:DataService,private appc:AppComponent) { }

  ngOnInit() {
    this.articles=this.data.articles;
    this.role=this.data.role;
  }


effacer(){
  this.appc.nb-=this.data.articles[this.choixID].quantite;
  this.data.nbProduit-=this.data.articles[this.choixID].quantite;
  this.data.del(this.identifiant);
  this.articles.splice(this.choixID,1);
  this.effacermessage="l'article a ete effacer !";
}


update()
{
  this.choix= this.articles[this.choixID];
  this.identifiant=this.choix.identifiant;
}



}
