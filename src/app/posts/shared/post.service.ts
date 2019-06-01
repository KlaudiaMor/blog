import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

@Injectable()
export class PostsService {
  readonly server: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    const url = `${this.server}/posts`;
    return this.http.get<Post[]>(url);
  }

  getPost(id: number) {
    const url = `${this.server}/posts/${id}`;
    return this.http.get<Post>(url);
  }

  createPost(post: Post) {
    const url = `${this.server}/posts`;
    return this.http.post(url, post);
  }

  updatePost(id: number, post: Post) {
    const url = `${this.server}/posts/${id}`;
    return this.http.put(url, post);
  }

  removePost(id: number) {
    const url = `${this.server}/posts/${id}`;

    return this.http.delete(url);
  }

}
