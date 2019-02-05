import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ConvidadosProvider } from '../../providers/convidados/convidados';
import { ConvidadosEditPage } from '../convidados-edit/convidados-edit';

@IonicPage()
@Component({
  selector: 'page-convidados',
  templateUrl: 'convidados.html',
})
export class ConvidadosPage {

  convidados: any;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public convidadosProvider: ConvidadosProvider
    , private toast: ToastController) {
      this.getConvidados();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvidadosPage');
  }

  ionViewWillEnter() {
    this.getConvidados();
  }

  getConvidados() {
    this.convidadosProvider.findAll()
    .then(data => {
      this.convidados = data;
      console.log(this.convidados);
    });
  }
  removeConvidado(id: number) {
    this.convidadosProvider.deleteById(id)
      .then( () => {
        this.getConvidados();
        this.toast.create({ message: 'Convidado removido.', duration: 3000, position: 'botton' }).present();
      }
      )
  }
  editConvidado(id: number) {
    this.navCtrl.push(ConvidadosEditPage, {id: id});
  }

  addConvidado() {
    this.navCtrl.push(ConvidadosEditPage);
  }


}