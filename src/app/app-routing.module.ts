import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExammenuComponent } from './exammenu/exammenu.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path: '', pathMatch: 'full', component: HomeComponent},
{path: 'exammenu', component: ExammenuComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
