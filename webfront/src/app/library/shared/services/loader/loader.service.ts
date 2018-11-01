import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  constructor() { }

  start() {
    document.getElementById('preloader').style.display = 'block';
  }

  stop() {
    document.getElementById('preloader').style.display = 'none';
  }
  imageLoaderStart() {
    document.getElementById('imageCropperPreloader').style.display = 'block';
  }

  imageLoaderStop() {
    document.getElementById('imageCropperPreloader').style.display = 'none';
  }
}
