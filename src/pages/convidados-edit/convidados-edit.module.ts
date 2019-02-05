import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConvidadosEditPage } from './convidados-edit';

@NgModule({
  declarations: [
    ConvidadosEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ConvidadosEditPage),
  ],
})
export class ConvidadosEditPageModule {}
