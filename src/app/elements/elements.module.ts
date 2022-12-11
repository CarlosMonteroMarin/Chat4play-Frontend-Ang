import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavSupLatComponent } from './nav-sup-lat/nav-sup-lat.component';
import { NavSupNologeadoComponent } from './nav-sup-nologeado/nav-sup-nologeado.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavSupLatComponent,
    NavSupNologeadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    NavSupLatComponent,
    NavSupNologeadoComponent
  ]
})
export class ElementsModule { }
