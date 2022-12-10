import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeNologComponent } from './home-nolog/home-nolog.component';
import { HomeYeslogComponent } from './home-yeslog/home-yeslog.component';
import { ProfileComponent } from './profile/profile.component';
import { MychatsComponent } from './mychats/mychats.component';
import { JoinChatComponent } from './join-chat/join-chat.component';
import { CreateChatComponent } from './create-chat/create-chat.component';
import { IntoChatComponent } from './into-chat/into-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeNologComponent,
    HomeYeslogComponent,
    ProfileComponent,
    MychatsComponent,
    JoinChatComponent,
    CreateChatComponent,
    IntoChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }