import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.css']
})
export class NewCollectionComponent {
    // constructor(private router: Router) { }
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

}
