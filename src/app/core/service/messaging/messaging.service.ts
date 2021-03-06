
import { Injectable }   from '@angular/core';

import * as firebase from 'firebase';


import { BehaviorSubject } from 'rxjs'

@Injectable()
export class MessagingService {

  messaging ;
  constructor() { 
    firebase.initializeApp({
      'messagingSenderId': '263147610417'
    });
    
     this.messaging = firebase.messaging();
  }


 
  getPermission() {
      this.messaging.requestPermission()
      .then(() => {
        return this.messaging.getToken()
      })
      .then(token => {
        localStorage.setItem('pushToken',token);
      })
      .catch((err) => { 
      });
    }

    receiveMessage() {
       this.messaging.onMessage((payload) => {
      });

    }
}