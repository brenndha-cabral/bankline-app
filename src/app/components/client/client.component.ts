import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  cpf:any;
  name:any;
  clients:any;

  constructor(private clientService: ClientService) { }

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

  save(): void {
    const client = {
      cpf:this.cpf,
      name:this.name
    };
    console.log(client);
    this.clientService.create(client)
      .subscribe(
        response => {
          console.log(response);
          this.listClients();
        },
        error => {
          console.log(error);
        });
  }

}
