


import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { GeneralService } from '../../../core/service/data/general.service';
@Injectable({
providedIn: 'root'
})
export class ErrorHandlerService {

constructor(private injector: Injector) { }

handleError(error: Error | HttpErrorResponse) {
const router = this.injector.get(Router);
const dataService = this.injector.get(GeneralService);
// console.error('It happens: ', error);

if (error instanceof HttpErrorResponse) {
// Server or connection error happened
if (!navigator.onLine) {
// Handle offline error
try {
throw new Error('Server not available');
}
catch (e) {
dataService.errorChangeMessage(e)
}
} else {
// Handle Http Error (error.status === 403, 404...)
try {
throw (error.status + ' ' + error.statusText);
}
catch (e) {
dataService.errorChangeMessage(e)
}
}
} else {

console.log(error);
// router.navigate(['/error'], { queryParams: {error: error} }); 
}
}
}