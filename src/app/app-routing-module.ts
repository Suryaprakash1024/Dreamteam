import { MatchComponent } from "./match/match.component";
import { TossComponent } from "./toss/toss.component";
import { StatsComponent } from "./stats/stats.component";
import { WalletComponent } from "./wallet/wallet.component";

//import { CustomersListComponent } from './customers/customers-list/customers-list.component';

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "match",
    pathMatch: "full"
  },
  {
    path: "home",
    component: MatchComponent,
    pathMatch: "full"
  },
  {
    path: "match",
    component: MatchComponent,
    pathMatch: "full"
  },
  {
    path: "toss",
    component: TossComponent,
    pathMatch: "full"
  },
  {
    path: "stats",
    component: StatsComponent,
    pathMatch: "full"
  },
  {
    path: "wallet",
    component: WalletComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
