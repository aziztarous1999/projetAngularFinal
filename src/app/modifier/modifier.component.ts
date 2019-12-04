import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ArticleClassService } from '../article-class.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  title="Modifier Article";
  choix:ArticleClassService ;
  choixID:number;

  identifiant: string ;
  libelle: string;
  photo: string;
  prix: number;
  marque:string;
  livraison : boolean;
  date:Date;
  articles=[];
  role:string="";

  art:ArticleClassService;

  modifiermessage="";

  constructor(private data:DataService) { }

  ngOnInit() {
    this.articles=this.data.articles;
    this.role=this.data.role;
  }


modifier(){
  this.data.upd(this.articles[this.choixID].identifiant,
    {
      identifiant:this.identifiant,
      libelle:this.libelle,
      photo:this.photo,
      prix:this.prix,
      marque:this.marque,
      livraison:this.livraison,
      date:this.date
    }
    );
  this.modifiermessage="l'article a été modifier !"
  alert("l'article a été modifier !");
}

update()
{

  this.choix= this.articles[this.choixID];
  this.identifiant=this.choix.identifiant;
  this.libelle=this.choix.libelle;
  this.photo=this.choix.photo;
  this.prix=this.choix.prix;
  this.marque=this.choix.marque;
  this.livraison=this.choix.livraison;
  this.date=this.choix.date;

}



}
