import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AccordionModule } from "primeng/accordion"; //accordion and accordion tab
import { MenuItem } from "primeng/api"; //api -- ng

import { AppComponent } from "./app.component";
import { MatchComponent } from "./match/match.component";
import { TossComponent } from "./toss/toss.component";
import { AppRoutingModule } from "./app-routing-module";
import { HeaderComponent } from "./header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { DemoMaterialModule } from "./header/material-module";
import { MatNativeDateModule } from "@angular/material";
import { WalletComponent } from "./wallet/wallet.component";
import { StatsComponent } from "./stats/stats.component";
import { MenuItemContent } from "primeng/menu";
import { TableModule } from "primeng/table";
import { CalendarModule } from "primeng/calendar";
import { SliderModule } from "primeng/slider";
import { DialogModule } from "primeng/dialog";
import { MultiSelectModule } from "primeng/multiselect";
import { ContextMenuModule } from "primeng/contextmenu";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { InputTextModule } from "primeng/inputtext";
import { ProgressBarModule } from "primeng/progressbar";
///Firebase
import { environment } from "../environiments/environiment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AccordionModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    MatchComponent,
    TossComponent,
    HeaderComponent,
    WalletComponent,
    StatsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
