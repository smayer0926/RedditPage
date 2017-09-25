import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  constructor(private router: Router) { }

  posts: Post[] = [
    new Post('Mount St. Helens peaking above beautiful wildflowers and thick fog', 'mystery', 'Check out this image of Mount St. Helens', '../resources/iamges/mt.jpg')
  ]

}
