import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../post.model';


@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.css']
})
export class NewCollectionComponent {
  @Input() childSelectedPost: Post[];
  @Output() clickSender = new EventEmitter();

    posts: Post[] = [
      new Post('Mount St. Helens peaking above beautiful wildflowers and thick fog', 'mystery', 'Check out this image of Mount St. Helens', '../../../../resources/images/mt.jpg'),
      new Post('If it fits, I sits', 'Lion', 'Lion in a wheelbarrow', '../../../../resources/images/lion.jpg' )
    ]
    showMe(postNew: Post){
      postNew.show = !postNew.show;
    }
    submitForm(newPostFromChild: Post){
      this.posts.push(newPostFromChild);
    }
    editButtonHasBeenClicked(postToEdit: Post){
      this.clickSender.emit(postToEdit)
    }
}
