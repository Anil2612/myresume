import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  diffInMonths = (date1: any, date2: any) => {
    return (date2.getDate() - date1.getDate()) / 30 +
      date2.getMonth() - date1.getMonth() +
      (12 * (date2.getFullYear() - date1.getFullYear()))
  }

  open(url: any) {
    window.open(url);
  }

}
