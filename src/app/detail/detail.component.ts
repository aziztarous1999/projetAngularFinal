import { Component, OnInit } from '@angular/core';
import { ArticleClassService } from '../article-class.service';
import { DataService } from '../data.service';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
private article:ArticleClassService;
identifiant:string;
  ngOnInit() {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
    for(let i=0;i<this.data.articles.length;i++)
    {
      if(this.data.articles[i].identifiant == this.identifiant)
      {
        this.article=this.data.articles[i];
      }
    }
    
    }
    constructor(private data:DataService,private app:AppComponent,private activatedRoute:ActivatedRoute) { }

    livrer(a:boolean){
      if(a){
        return "oui";
      }else{
        return "non";
      }
    }

    ajoutqt()
    {
      
      for(let i=0;i<this.data.articles.length;i++)
      {
        if(this.data.articles[i].identifiant==this.article.identifiant)
        {
          this.data.articles[i].quantite++;
        }
      }
      this.data.addproduit();
      this.app.update();
    }
    releverqt(){
      if(this.article.quantite !=0)
      {
        this.article.quantite--;
        this.data.removeproduit();
        this.app.update();
      }else{
        this.article.commander=!this.article.commander;
      }
    }





    
}
