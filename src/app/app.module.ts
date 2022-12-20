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
import { ElementsModule } from './elements/elements.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddVideojuegoComponent } from './add-videojuego/add-videojuego.component';
import { CrudAdminComponent } from './crud-admin/crud-admin.component';
import { EditChatComponent } from './edit-chat/edit-chat.component';
import { EditVideojuegoComponent } from './edit-videojuego/edit-videojuego.component';
import { EditUsuariosComponent } from './edit-usuarios/edit-usuarios.component';
import { RegisterUsuarioComponent } from './register-usuario/register-usuario.component';
import { authInterceptorProviders } from './interceptor/auth.interceptor';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JWT_OPTIONS } from '@auth0/angular-jwt';

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
    IntoChatComponent,
    AddVideojuegoComponent,
    CrudAdminComponent,
    EditChatComponent,
    EditVideojuegoComponent,
    EditUsuariosComponent,
    RegisterUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ElementsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
