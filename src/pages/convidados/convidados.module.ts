import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConvidadosPage } from './convidados';

@NgModule({
  declarations: [
    ConvidadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ConvidadosPage),
  ],
})
export class ConvidadosPageModule {}
