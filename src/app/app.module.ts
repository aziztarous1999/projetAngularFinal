import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { RechercheComponent } from './recherche/recherche.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { TitrePipe } from './titre.pipe';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { DetailComponent } from './detail/detail.component';
import { PanierComponent } from './panier/panier.component';

import{ AngularFireModule} from 'angularfire2';
import { environment } from 'src/environments/environment';
import{ AngularFireDatabaseModule} from 'angularfire2/database';

//animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModifierComponent } from './modifier/modifier.component';
import { ErrorComponent } from './error/error.component';
import { EffacerComponent } from './effacer/effacer.component';
@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    AjouterComponent,
    RechercheComponent,
    AuthentificationComponent,
    TitrePipe,
    DetailComponent,
    PanierComponent,
    ModifierComponent,
    ErrorComponent,
    EffacerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    //animation
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
