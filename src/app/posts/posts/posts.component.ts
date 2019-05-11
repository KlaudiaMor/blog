import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/post.service';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    public postService: PostsService
  ) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

}
