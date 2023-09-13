import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PhotosService } from './services/photos.service';
import { CommonModule } from '@angular/common';
import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AppComponent {

  photos: string[] = [];

  cameraPreviewOptions: CameraPreviewOptions = {
    position: 'rear',
    height: 1920,
    width: 1080
  };

  constructor(private photosService: PhotosService) {
    this.photos = this.photosService.photos;
  }

  async takePhoto() {
    await this.photosService.addNewFoto();
  }


  takePhotoPreview() {
    CameraPreview.start({ parent: "cameraPreview" });
  }
}
