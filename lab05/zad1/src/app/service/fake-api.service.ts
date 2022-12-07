import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post, PostCreateDTO } from '../model/post';
import { Observable} from 'rxjs'
import { Photo } from '../model/photo';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  private BASE_URL: string = 'https://jsonplaceholder.typicode.com/';
  private POSTS: string = 'posts';
  private PHOTOS: string = 'photos';

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.BASE_URL}${this.POSTS}`);
  }

  addPost(post: PostCreateDTO) {
    return this.httpClient.post(`${this.BASE_URL}${this.POSTS}`, post);
  }

  getPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`${this.BASE_URL}${this.PHOTOS}`);
  }

  getPhoto(id: number) {
    return this.httpClient.get<Photo>(`${this.BASE_URL}${this.PHOTOS}/${id}`);
  }
}
