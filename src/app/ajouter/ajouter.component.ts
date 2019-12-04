import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  title="ajouter article";

  identifiant: string;
  libelle: string;
  photo: string;
  prix: number;
  marque:string;
  livraison : boolean=false;
  date:Date;
  articles=[];
  role:string="";
  idexist:boolean=false;
  art;

  ajoutermessage="";

  constructor(private data:DataService) { }

  ngOnInit() {
    this.articles=this.data.articles;
    this.role=this.data.role;
  }
  ajouter()
  {
    for(var i=0;i<this.articles.length;i++)
    {
      if(this.articles[i].identifiant== this.identifiant)
      {
        this.idexist=true;
      }
    }
    if(!this.idexist)
    {
       this.art={identifiant:this.identifiant,libelle:this.libelle,photo:this.photo,prix:this.prix,livraison:this.livraison,date:this.date,marque: this.marque,quantite:0};
      this.data.ajouterarticle(this.art);
      this.ajoutermessage="l'article a ete ajouter !";
      alert("l'article a ete ajouter !");
    }
  }

}
