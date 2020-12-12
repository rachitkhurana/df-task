import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  // TODO: RECTIFY THE URL
  _URL = 'http://5.181.217.46/DesignFacility/useGETMethodForTheResponse/Rachit';
  // _URL = './assets/response.json';
  options = {}


  examData = new Observable((observer) => {
    this.http.get(this._URL,this.options).subscribe(response => {
      console.log('Response Recieved');
      console.log(response);
      if (response && Object.keys(response).includes('exam')) {
        observer.next(response);
      } else {
        observer.error('ERROR | response | '+response.toString());
      }
    });

    return {
      unsubscribe() {
        console.log('examData is Unsubscribed!');
      }
    }
  });

  constructor(private http: HttpClient) {
  }

}
