import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { RechercheComponent } from './recherche/recherche.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DetailComponent } from './detail/detail.component';
import { PanierComponent } from './panier/panier.component';
import { ModifierComponent } from './modifier/modifier.component';
import { ErrorComponent } from './error/error.component';
import { EffacerComponent } from './effacer/effacer.component';


const routes: Routes = [
{path:"catalogue",component:CatalogueComponent},
{path:"ajouter",component:AjouterComponent},
{path:"modifier",component:ModifierComponent},
{path:"recherche",component:RechercheComponent},
{path:"authentification",component:AuthentificationComponent},
{path:"detail/:id",component:DetailComponent},
{path:"panier",component:PanierComponent},
{path:"effacer",component:EffacerComponent},
{path:'', redirectTo:'authentification', pathMatch:'full'},
{path:'**', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
