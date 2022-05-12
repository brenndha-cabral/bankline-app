import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionNewComponent } from './components/transaction-new/transaction-new.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { ClientComponent } from './components/client/client.component';

const routes: Routes = [
  { path: 'transaction-new', component: TransactionNewComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'clients', component: ClientComponent },
  { path: '', redirectTo: 'transactions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
