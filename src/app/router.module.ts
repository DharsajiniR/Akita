import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// components

import { ListsComponent } from './lists/lists.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lists' },
  { path: 'lists', component: ListsComponent },
  { path: 'lists/new', component: AddComponent },
  { path: 'lists/edit', component: EditComponent }
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })]
})
export class AppRouterModule {
}