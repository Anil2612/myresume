import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './components/title/title.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
