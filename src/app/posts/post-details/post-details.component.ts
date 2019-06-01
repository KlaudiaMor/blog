import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../shared/post.service';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    const postId = this.route.snapshot.params.id;
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });

    this.postsService.getPost(postId)
      .subscribe((post: Post) => {
        this.post = post;
      });
  }

}
