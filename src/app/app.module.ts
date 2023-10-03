import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ListsComponent } from './lists/lists.component';
import { AppRouterModule } from './router.module';

import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    AddComponent,
    EditComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRouterModule,
    RouterModule,
    AkitaNgDevtools.forRoot({
        maxAge: 25,
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
