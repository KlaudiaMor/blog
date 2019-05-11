import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder,
    public postService: PostsService
  ) { }

  ngOnInit() {
    this.createPostForm();
  }

  createPostForm() {
    this.postForm = this.fb.group({
      id: [''],
      title: [''],
      description: [''],
      content: ['']
    });
  }

  addPost() {
    console.warn(this.postForm.value);
    this.postService.createPost(this.postForm.value)
      .subscribe((data) => {
        console.warn(data);
      });

  }

}
