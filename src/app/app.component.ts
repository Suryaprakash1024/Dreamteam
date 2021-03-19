import { Component, VERSION } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { MatDialog } from "@angular/material";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private dialog: MatDialog, private store: AngularFirestore) {}
}
