import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { TransitionService } from '../../services/transition.service';

@Component({
  selector: 'app-transition-list',
  templateUrl: './transition-list.component.html',
  styleUrls: ['./transition-list.component.css']
})
export class TransitionListComponent implements OnInit {
  transitions: any;
  clients:any;
  clientSelected:any;

  constructor(
    private transitionService: TransitionService,
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
  listTransitions(): void {
    this.transitionService.findByIdAccount(this.clientSelected.id)
      .subscribe(
        data => {
          this.transitions = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
