import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Convidado, ConvidadosProvider } from '../../providers/convidados/convidados';


@IonicPage()
@Component({
  selector: 'page-convidados-edit',
  templateUrl: 'convidados-edit.html',
})
export class ConvidadosEditPage {
  convidado: Convidado;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController, 
     private convidadosProvider: ConvidadosProvider) {
      this.convidado = new Convidado();

      if (this.navParams.data.id) {
        this.convidadosProvider.findById(this.navParams.data.id)
          .then((result: any) => {
            this.convidado = result;
          })
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvidadosEditPage');
  }

  save() {
    this.convidadosProvider.save(this.convidado)
      .then(() => {
        this.toast.create({ message: 'Convidado salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar a convidado.', duration: 3000, position: 'botton' }).present();
      });
  }


}
