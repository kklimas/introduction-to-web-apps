import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/model/photo';
import { FakeApiService } from 'src/app/service/fake-api.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent {
  photo: Photo;
  constructor(private fakeApiService: FakeApiService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      let id = params['id'];
      fakeApiService.getPhoto(id).subscribe({
        next: (data) => this.photo = data,
        error: (err) => console.log(err)
      })
    }) 
  }
}
