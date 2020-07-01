import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExammenuComponent } from './exammenu/exammenu.component';
import { HomeComponent } from './home/home.component';
import { ExampageComponent } from './exampage/exampage.component';
import { ExamcompleteComponent } from './examcomplete/examcomplete.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ExammenuComponent,
    HomeComponent,
    ExampageComponent,
    ExamcompleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    { path: 'app', component: AppComponent },
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'exampage', component: ExampageComponent },
    { path: 'examcomplete', component: ExamcompleteComponent },
    { path: 'exammenu', component: ExammenuComponent }

      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
