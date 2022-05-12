import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: any;
  clients:any;
  clientSelected:any;

  constructor(
    private transactionService: TransactionService,
    private clientService: ClientService

    ) { }

  ngOnInit(): void {
    this.listClients();
  }

  listClients(): void {
    this.clientService.list()
      .subscribe(
        data => {
          this.clients = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  listTransactions(): void {
    this.transactionService.findByIdAccount(this.clientSelected.id)
      .subscribe(
        data => {
          this.transactions = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
