import { Component, VERSION } from "@angular/core";
import { AccordionModule } from "primeng/accordion"; //accordion and accordion tab
import { MenuItem } from "primeng/api"; //api

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Admin ";
}
