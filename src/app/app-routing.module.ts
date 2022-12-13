import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideojuegoComponent } from './add-videojuego/add-videojuego.component';
import { CreateChatComponent } from './create-chat/create-chat.component';
import { HomeNologComponent } from './home-nolog/home-nolog.component';
import { HomeYeslogComponent } from './home-yeslog/home-yeslog.component';
import { IntoChatComponent } from './into-chat/into-chat.component';
import { JoinChatComponent } from './join-chat/join-chat.component';
import { LoginComponent } from './login/login.component';
import { MychatsComponent } from './mychats/mychats.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

{
  path:'add-videogame',
  component:AddVideojuegoComponent
},
{
  path:'create-chat',
  component:CreateChatComponent
},
{
  path:'home-nolog',
  component:HomeNologComponent
},
{
  path:'home-yeslog',
  component:HomeYeslogComponent
},
{
  path:'into-chat',
  component:IntoChatComponent
},
{
  path:'join-chat',
  component:JoinChatComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'my-chats',
  component:MychatsComponent
},
{
  path:'profile',
  component:ProfileComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'',
  component:HomeNologComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
