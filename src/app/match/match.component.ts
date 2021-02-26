import { Component, OnInit } from '@angular/core';

import {TableModule} from 'primeng/table';
import { Match } from '../Models/match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  match: Match[];
  constructor() { }

  ngOnInit() {
    this.match = [
            { name: 'Apple', amount: 51, team: '40%', paymentmethod: '$54,406.00', ratio: 2.2, number:6542465,winningAmount:2000, paid:true}
        ];
  }

}