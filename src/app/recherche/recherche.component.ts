import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ArticleClassService } from '../article-class.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {






  title="rechercher un article :";
  articles=[];
  resultat=[];
  
  libel="";
  prix:number=0;
  
   look:boolean=false;
    constructor(private data:DataService) { }
  
    ngOnInit() {
      this.articles=this.data.articles;
    }
    i:number;
  rechercher(){
    this.look=true;
    this.resultat=[];
  for( this.i=0;this.i<this.articles.length;this.i++)
  {
  if((this.articles[this.i].libelle.toLowerCase()).includes(this.libel.toLowerCase())  && this.articles[this.i].prix <= this.prix){
    this.resultat.push(this.articles[this.i]);
  }
  }
  
  }
  
  Vide(){
    return this.resultat.length > 0;
  }
  

  detail(a:ArticleClassService)
  {
    this.data.articleDetail=a;

  }








}
