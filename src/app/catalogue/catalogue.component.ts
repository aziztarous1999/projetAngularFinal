import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AppComponent } from '../app.component';
import { ArticleClassService } from '../article-class.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private data:DataService, private app:AppComponent) { }
nb:number;
articles=[];
  ngOnInit() {
    this.nb=this.data.nbProduit;
    this.articles=this.data.articles;
  }
  detail(a:ArticleClassService)
  {
    this.data.articleDetail=a;

  }


}
