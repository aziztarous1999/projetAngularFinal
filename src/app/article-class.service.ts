import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleClassService {

  private _identifiant: string;
  private _libelle: string;
  private _photo: string;
  private _prix: number;
  private _marque:string;
  private _livraison : boolean;
  private _date:Date;
  private _quantite:number;
  private _commander: boolean;
  constructor(identifiant: string,libelle:string,photo:string,prix: number,livraison:boolean,date:Date,mq:string)
  {
  this._identifiant = identifiant;
  this._libelle=libelle;
  this._photo="assets/"+photo;
  this._prix = prix;
  this._livraison  = livraison;
  this._date=date;
  this._quantite=0;
  this._marque=mq;
  this._commander=false;
  }
          public get identifiant(): string {
          return this._identifiant;
          }
          public set identifiant(value: string) {
          this._identifiant = value;
          }
  
          public get marque(): string {
          return this._marque;
          }
          public set marque(value: string) {
          this._marque = value;
          }
  
  
            public get photo(): string {
            return this._photo;
            }
            public set photo(value: string) {
            this._photo = value;
            }
  
            public get prix(): number {
            return this._prix;
            }
            public set prix(value: number) {
            this._prix = value;
            }
  
            public get libelle(): string {
              return this._libelle;
              }
              public set libelle(value: string) {
              this._libelle = value;
              }


  
           public get livraison(): boolean {
            return this._livraison;
            }
            public set livraison(value: boolean) {
            this._livraison = value;
            }
            
  
  
            public get date(): Date {
            return this._date;
            }
            public set date(value: Date) {
            this._date = value;
            }

            public get quantite(): number {
            return this._quantite;
            }
            public set quantite(value: number) {
            this._quantite = value;
            }
        
            public get commander(): boolean {
              return this._commander;
              }
              public set commander(value: boolean) {
              this._commander = value;
              }
  
}
