import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../shared/post.model';
import { PostsService } from '../shared/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  post: Post;
  successMessage: string;
  infoMessage: string;

  constructor(
    private fb: FormBuilder,
    public postsService: PostsService
  ) { }

  ngOnInit() {
    this.createPostForm();
  }

  createPostForm() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required],
      imgUrl: ['']
    });
  }

  addPost() {
    if (this.postForm.valid) {
      this.postsService.createPost(this.postForm.value)
        .subscribe(() => {
          this.postForm.reset();
          this.successMessage = 'Post został dodany!';
        });
    } else {
      this.infoMessage = 'Uzupełnij wszystkie pola';
    }

  }

}
