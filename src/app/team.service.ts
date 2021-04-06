import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Match } from "../Models/match";
import { Match } from "./Models/match";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  private dbPath = "/match";

  customersRef: AngularFireList<Match> = null;

  constructor(private db: AngularFireDatabase) {
    this.customersRef = db.list(this.dbPath);
  }

  createCustomer(customer: Match): void {
    this.customersRef.push(customer);
  }

  // updateCustomer(key: string, value: any): Promise<void> {
  //   return this.customersRef.update(key, value);
  // }

  // deleteCustomer(key: string): Promise<void> {
  //   return this.customersRef.remove(key);
  // }

  getCustomersList(): AngularFireList<Match> {
    return this.customersRef;
  }

  // deleteAll(): Promise<void> {
  //   return this.customersRef.remove();
  // }
}
