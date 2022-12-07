import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post, PostCreateDTO } from 'src/app/model/post';
import { FakeApiService } from 'src/app/service/fake-api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Post[] = [];
  form: FormGroup;

  constructor(private fakeApiService: FakeApiService) {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      userId: new FormControl(0, Validators.required)
    })
    fakeApiService.getPosts().subscribe({
      next: (data) => this.posts = data,
      error: (err) => console.error(err)
    })
  }
  submit() {
    let post: PostCreateDTO = new PostCreateDTO();
    post.body = this.form.get('content')?.value;
    post.title = this.form.get('title')?.value;
    post.userId = this.form.get('userId')?.value;
  
    this.fakeApiService.addPost(post).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.error(err)
    }) 
  }
}
