import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PhotosService } from './services/photos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AppComponent {

  photos: string[] = [];

  constructor(private photosService: PhotosService) {
    this.photos = this.photosService.photos;
  }

  async takePhoto() {
    await this.photosService.addNewFoto();
  }
}
