import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../shared/post.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  postForm: FormGroup;
  post: Post;
  successMessage: string;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const postId = this.route.snapshot.params.id;

    this.postsService.getPost(postId)
      .subscribe((post: Post) => {
        this.post = post;

        this.postForm = this.fb.group({
          'id': [this.post.id, Validators.required],
          'title': [this.post.title, Validators.required],
          'description': [this.post.description, Validators.required],
          'content': [this.post.content, Validators.required],
          'imgUrl': [this.post.imgUrl]
        });
      });
  }


  updatePost() {
    if (this.postForm.valid) {
      this.postsService.updatePost(this.post.id, this.postForm.value)
        .subscribe(() => {
          this.successMessage = 'Post został zaktualizowany!';
        });
    } else {
      this.errorMessage = 'Nie udało się zaktualizować posta ;(';
    }


  }

}
