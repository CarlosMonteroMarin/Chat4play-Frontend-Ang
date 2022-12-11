import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavSupLatComponent } from './nav-sup-lat/nav-sup-lat.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavSupLatComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    NavSupLatComponent
  ]
})
export class ElementsModule { }
