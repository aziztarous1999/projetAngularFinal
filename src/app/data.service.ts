import { Injectable } from '@angular/core';
import { ArticleClassService } from './article-class.service';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  connecte:boolean=false;
  nbProduit=0;
username="";
role="";
account=[
  {name:"Aziz1",password:"tarous1",role:"admin",img:"user1.jpg"},
  {name:"Aziz2",password:"tarous2",role:"user",img:"user2.jpg"},
  {name:"Aziz3",password:"tarous3",role:"user",img:"user3.jpg"},
  {name:"Aziz4",password:"tarous4",role:"user",img:"user4.jpg"}
];


  addproduit(){
    this.nbProduit=this.nbProduit+1;
  }

  removeproduit(){
    this.nbProduit=this.nbProduit-1;
  }
  
  ajouterarticle;
  upd;
  del;
  constructor(db:AngularFireDatabase){
    db.list('/article').valueChanges().subscribe(article =>{
      this.articles=article;
      });
  
      this.ajouterarticle=function (a)
      {
        var key= db.list('/article').push(a).key;
        db.list('/article').update(key,{id:key});
      }
      this.upd=function(x:string,a)
      {    
        var key='';
              for(var i=0;i<this.articles.length;i++){
              
               if(this.articles[i].identifiant == x)
                {
                  
                  key=this.articles[i].id;
                 
                }
              }
              
              if(key != '')
              { 
                db.list('/article').update(key,a);
              }
      }



      this.del=function(x:string)
      {    
        var key='';
              for(var i=0;i<this.articles.length;i++){
              
               if(this.articles[i].identifiant == x)
                {
                  
                  key=this.articles[i].id;
                  
                }
              }
              
              if(key != '')
              { 
                db.list('/article').remove(key);
                console.log("deleted");
              }
      }

    }
    
  quantite:number=0;
  ngOnInit() {
  }
  public articles=[];
  articleDetail:ArticleClassService;

nbadd:number=0;


}
