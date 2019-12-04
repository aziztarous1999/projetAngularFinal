import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ArticleClassService } from '../article-class.service';
import { AppComponent } from '../app.component';
import { trigger, state, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  animations:[
    trigger('fade',[
      state('void',style({opacity:0,transform: "translateX(45px)"})),
      transition(':leave',[
        animate(1000)
      ])

    ])
  ]
})
export class PanierComponent implements OnInit {
somme:number=0;
  constructor(private data:DataService,private app:AppComponent) { }
 panier=[];
  articles=[];
  ngOnInit() {
    this.articles=this.data.articles;
    for(var i=0;i<this.articles.length;i++){
      if(this.articles[i].quantite != 0)
      {
        this.panier.push(this.articles[i]);
        this.somme+=(this.articles[i].quantite *this.articles[i].prix);
      }
    }

  }
  detail(a:ArticleClassService)
  {
    this.data.articleDetail=a;

  }


  ajoutqt(a)
  {
    a.quantite++;
    this.data.addproduit();
    this.app.update();
    this.somme+=a.prix;
  }
  releverqt(a){
    if(a.quantite !=0)
    {
      a.quantite--;
      this.somme-=a.prix;
      this.data.removeproduit();
      this.app.update();
    }else{
      a.commander=!a.commander;
    }
  }
removeProd(a,i:number)
{
  this.somme-=(a.prix*a.quantite);
  while(a.quantite >0)
{
  a.quantite--;
  this.data.removeproduit();
  
}
this.app.update();
a.commander=!a.commander;
this.panier.splice(i,1);
}


}
