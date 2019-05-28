import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    const postId = this.route.snapshot.params.id;

    this.postsService.getPost(postId)
      .subscribe((post: Post) => {
        this.post = post;
      });
  }

  removePost(id: number) {
    if (confirm('Czy na pewno chcesz usunąć post?')) {
      this.postsService.removePost(id)
        .subscribe(() => {
          this.router.navigate(['/posts']);
        });
    }

  }

}
