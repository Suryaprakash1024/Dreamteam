import { Component, OnInit } from "@angular/core";

import { TableModule } from "primeng/table";
import { Match } from "../Models/match";
import { CustomerService } from "../team.service";

@Component({
  selector: "app-match",
  templateUrl: "./match.component.html",
  styleUrls: ["./match.component.css"]
})
export class MatchComponent implements OnInit {
  customer: Match = new Match();
  submitted = false;

  constructor(private customerService: CustomerService) {}
  match: Match[];

  ngOnInit() {
    this.customer = new Match();
    this.customer = {
      name: "Apple",
      amount: 51,
      team: "40%",
      paymentmethod: "$54,406.00",
      ratio: 2.2,
      number: 6542465,
      winningAmount: 2000,
      paid: true,
      isDeleted: false
    };
  }
  newCustomer(): void {
    this.submitted = false;
    // this.customer = new Match();
    this.onSubmit();
  }

  save() {
    this.customerService.createCustomer(this.customer);
    this.customer = new Match();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
