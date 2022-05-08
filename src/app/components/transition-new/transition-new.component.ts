import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { TransitionService } from 'src/app/services/transition.service';

@Component({
  selector: 'app-transition-new',
  templateUrl: './transition-new.component.html',
  styleUrls: ['./transition-new.component.css']
})
export class TransitionNewComponent implements OnInit {
  clients:any;
  clientSelected:any;
  dateHour:any;
  description:any;
  value:any;
  type:any;

  constructor(
    private transitionService: TransitionService,
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
    const transition = {
      value:this.value,
      description:this.description,
      type:this.type,
      idAccount:this.clientSelected.id,
      dateHour:this.dateHour

    };
    console.log(transition);
    this.transitionService.create(transition)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}

