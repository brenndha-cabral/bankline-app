import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransitionNewComponent } from './components/transition-new/transition-new.component';
import { TransitionListComponent } from './components/transition-list/transition-list.component';

const routes: Routes = [
  { path: 'transition-new', component: TransitionNewComponent },
  { path: 'transitions', component: TransitionListComponent },
  { path: '', redirectTo: 'transitions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
