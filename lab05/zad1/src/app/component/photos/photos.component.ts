import { Component } from '@angular/core';
import { Photo } from 'src/app/model/photo';
import { FakeApiService } from 'src/app/service/fake-api.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  photos: Photo[] = [];
  constructor(private fakeApiService: FakeApiService) {
    fakeApiService.getPhotos().subscribe({
      next: (data) => this.photos = data.filter((a, i) => i < 20),
      error: (err) => console.error(err)
    })
  }
}
