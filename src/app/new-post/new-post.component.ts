import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  @Output() newPostSender = new EventEmitter;

  submitForm(title:string, author:string, details: string, image: string){
    var newPostToAdd: Post = new Post(title, author, details, image);
    this.newPostSender.emit(newPostToAdd);
  }



}
