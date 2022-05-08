import { Component, OnInit } from '@angular/core';
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

  constructor(private transitionService: TransitionService) { }

  ngOnInit(): void {
    this.listTransitions();
  }

  listTransitions(): void {
    this.transitionService.list()
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
