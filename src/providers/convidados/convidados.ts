import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Festa } from '../festas/festas';

@Injectable()
export class ConvidadosProvider {

  apiUrl = 'http://localhost:8080/api/convidados/';
  convidados: any;

  constructor(public http: HttpClient) {
    console.log('Hello ConvidadosProvider Provider');
  }
  
  findAll() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"")
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  findById(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+id)
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deleteById(id) {
    return new Promise(resolve => {
      this.http.delete(this.apiUrl+id)
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });

  }

  save(convidado) {
    let data = JSON.stringify(convidado);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, data, { headers: { 'Content-Type': 'application/json' }})
      .subscribe(res => {
        resolve(res);
        console.log('The result is:'+res);
        console.log(convidado);
      }, (err) => {
        reject(err);
        console.log(err);
      });
    });
  }

}

export class Convidado {
  id: number;
  nome: string;
  qtde: number;
  festa: Festa;
}
