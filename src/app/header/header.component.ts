import { Component, ViewChild, ElementRef } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  @ViewChild("drawer") drawer: any;
  public selectedItem: string = "";
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {}

  closeSideNav() {
    if (this.drawer._mode == "over") {
      this.drawer.close();
    }
  }
}
