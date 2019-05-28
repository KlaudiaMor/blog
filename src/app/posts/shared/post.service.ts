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

  getPost(id: number) {
    const url = `${this.server}/${id}`;
    return this.http.get<Post>(url);
  }

  createPost(post: Post) {
    return this.http.post(this.server, post);
  }

  updatePost(id: number, post: Post) {
    const url = `${this.server}/${id}`;
    return this.http.put(url, post);
  }

  removePost(id: number) {
    const url = `${this.server}/${id}`;

    return this.http.delete(url);
  }

}
