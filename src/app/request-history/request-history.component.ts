import { Component, OnInit } from '@angular/core';
import { RequestHistory } from './models/request-history.model';
import { RequestHistoryService } from './services/request-history.service';

@Component({
  selector: 'app-request-history',
  templateUrl: './request-history.component.html'
})
export class RequestHistoryComponent implements OnInit {
  requestHistory: RequestHistory[]=[];

  constructor(private requestHistoryService: RequestHistoryService) { }

  ngOnInit(): void {
    this.getRequestHistory();
  }

  getRequestHistory(): void {
    this.requestHistoryService.getRequestHistory()
      .subscribe(response => {
        this.requestHistory = response;
      });
  }
}