import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { UserComponent } from './user/user.component';
import { MessageContainerComponent } from './message-container/message-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    UserComponent,
    MessageContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
