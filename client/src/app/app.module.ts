import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MessageBarComponent } from './message-bar/message-bar.component';
import { UserComponent } from './user/user.component';
import { MessageContainerComponent } from './message-container/message-container.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './state/app.state';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    UserComponent,
    MessageContainerComponent,
    UserContainerComponent,
    MessageBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([AppState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
