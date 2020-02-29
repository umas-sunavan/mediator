import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainListComponent } from './main-browse/main-list/main-list.component';
import { NewsSectionListComponent } from './news-compare/news-section-list/news-section-list.component';
import { EditTagComponent } from './edit-tag/edit-tag.component';


const routes: Routes = [
  { path: '', component: MainListComponent },
  { path: 'news-list/:eventId', component: NewsSectionListComponent },
  { path: 'edit-tag', component: EditTagComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
