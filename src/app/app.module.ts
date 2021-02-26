import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { MatchComponent } from "./match/match.component";
import { TossComponent } from "./toss/toss.component";
import { AppRoutingModule } from "./app-routing-module";
import { HeaderComponent } from "./header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { DemoMaterialModule } from "./header/material-module";
import { MatNativeDateModule } from "@angular/material";
import { WalletComponent } from './wallet/wallet.component';
import { StatsComponent } from './stats/stats.component';

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
    ReactiveFormsModule
  ],
  declarations: [AppComponent, MatchComponent, TossComponent, HeaderComponent, WalletComponent, StatsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
