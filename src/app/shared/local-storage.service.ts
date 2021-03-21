import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  getKeyName(index: number) {
    return localStorage.key(index);
  }

  storageLength() {
    return localStorage.length;
  }

  deleteItem(key: string) {
    return localStorage.removeItem(key);
  }
}
