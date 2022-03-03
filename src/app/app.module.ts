import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CbPipe } from './cb.pipe';
import { FileterPipe } from './fileter.pipe';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, CbPipe, FileterPipe, UserListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
