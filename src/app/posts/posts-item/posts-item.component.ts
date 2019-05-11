import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.scss']
})
export class PostsItemComponent implements OnInit {
  @Input() post: Post;

    constructor() { }

  ngOnInit() {
  }

}
