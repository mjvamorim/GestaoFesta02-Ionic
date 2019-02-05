import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FestasProvider {

  apiUrl = 'http://localhost:8080/api/festas/';
  festas: any;

  constructor(public http: HttpClient) {
    console.log('Hello FestaProvider Provider');
  }
  findAll() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl)
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

  save(festa) {
    let data = JSON.stringify(festa);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, data)
      .subscribe(res => {
        resolve(res);
        console.log('The result is:'+res);
        console.log(festa);
      }, (err) => {
        reject(err);
        console.log(err);
      });
    });
  }

}

export class Festa {
  id: number;
  nome: string;
}
