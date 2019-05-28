import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  declarations: [
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  providers: [],
})
export class MainPageModule { }
