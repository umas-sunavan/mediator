import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainListComponent } from './main-browse/main-list/main-list.component';
import { NewsSectionListComponent } from './news-compare/news-section-list/news-section-list.component';


const routes: Routes = [
  { path: '', component: MainListComponent },
  { path: 'news-list/:eventId', component: NewsSectionListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
