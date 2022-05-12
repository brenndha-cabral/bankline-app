import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-new',
  templateUrl: './transaction-new.component.html',
  styleUrls: ['./transaction-new.component.css']
})
export class TransactionNewComponent implements OnInit {
  clients:any;
  clientSelected:any;
  dateHour:any;
  description:any;
  value:any;
  type:any;

  constructor(
    private transactionService: TransactionService,
    private clientService: ClientService,
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
  // criando o método para ser chamado na tela e assim incluir a movimentação

  save(): void {
    console.log(this.clientSelected)
    const transaction = {
      value:this.value,
      description:this.description,
      type:this.type,
      idAccount:this.clientSelected.id,
      dateHour:this.dateHour

    };
    console.log(transaction);
    this.transactionService.create(transaction)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}

