import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

@Injectable()
export class PostsService {
  readonly server: string = 'http://localhost:3000/posts';

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get<Post[]>(this.server);
  }


  createPost(post: Post) {
    return this.http.post(this.server, post);
  }

}
