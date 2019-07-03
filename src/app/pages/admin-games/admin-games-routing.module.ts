import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminGamesComponent } from '../admin-games/admin-games.component';

import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: AdminGamesComponent,
   
}];

  @NgModule({
    //imports: [RouterModule.forChild(routes)],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AdminGamesRoutingModule {
  }