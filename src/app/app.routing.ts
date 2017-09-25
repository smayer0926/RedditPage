import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { ControversialCollectionComponent } from './controversial-collection/controversial-collection.component';
import { NewPostComponent } from './new-post/new-post.component';
import {EditPostComponent} from './edit-post/edit-post.component';
const appRoutes: Routes = [
  {
    path: 'newCollection',
    component: NewCollectionComponent
  },

  {
    path: 'controversialCollection',
    component: ControversialCollectionComponent
  },
  {
    path: 'newPost',
    component: NewPostComponent
  },
  {
    path: 'editPost',
    component: EditPostComponent
  }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
