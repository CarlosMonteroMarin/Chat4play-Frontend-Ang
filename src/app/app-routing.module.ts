import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideojuegoComponent } from './add-videojuego/add-videojuego.component';
import { CreateChatComponent } from './create-chat/create-chat.component';
import { CrudAdminComponent } from './crud-admin/crud-admin.component';
import { EditChatComponent } from './edit-chat/edit-chat.component';
import { EditUsuariosComponent } from './edit-usuarios/edit-usuarios.component';
import { EditVideojuegoComponent } from './edit-videojuego/edit-videojuego.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeNologComponent } from './home-nolog/home-nolog.component';
import { HomeYeslogComponent } from './home-yeslog/home-yeslog.component';
import { IntoChatComponent } from './into-chat/into-chat.component';
import { JoinChatComponent } from './join-chat/join-chat.component';
import { LoginComponent } from './login/login.component';
import { MychatsComponent } from './mychats/mychats.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterUsuarioComponent } from './register-usuario/register-usuario.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

{
  path:'crud-admin',
  component:CrudAdminComponent, canActivate: [AuthGuard]
},
{
  path:'register-usuario',
  component:RegisterUsuarioComponent, canActivate: [AuthGuard]
},
{
  path:'edit-usuario/:id',
  component:EditUsuariosComponent, canActivate: [AuthGuard]
},
{
  path:'edit-videojuego/:id',
  component:EditVideojuegoComponent, canActivate: [AuthGuard]
},
{
  path:'add-videogame',
  component:AddVideojuegoComponent, canActivate: [AuthGuard]
},
{
  path:'edit-chat/:id',
  component:EditChatComponent, canActivate: [AuthGuard]
},
{
  path:'create-chat',
  component:CreateChatComponent, canActivate: [AuthGuard]
},
{
  path:'home-nolog',
  component:HomeNologComponent
},
{
  path:'home-yeslog',
  component:HomeYeslogComponent, canActivate: [AuthGuard]
},
{
  path:'into-chat/:id',
  component:IntoChatComponent, canActivate: [AuthGuard]
},
{
  path:'join-chat',
  component:JoinChatComponent, canActivate: [AuthGuard]
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'my-chats',
  component:MychatsComponent, canActivate: [AuthGuard]
},
{
  path:'profile',
  component:ProfileComponent, canActivate: [AuthGuard]
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
