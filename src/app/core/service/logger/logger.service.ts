import {Injectable} from '@angular/core';


@Injectable({

providedIn: 'root'

})

export class LoggerService {

static log(msg: any): void {

console.log(msg);

}


static error(msg: string, obj = {}): void {

console.error(msg, obj);

}

}