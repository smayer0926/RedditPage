import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { HotCollectionComponent } from './hot-collection/hot-collection.component';
import { RisingCollectionComponent } from './rising-collection/rising-collection.component';
import { ControversialCollectionComponent } from './controversial-collection/controversial-collection.component';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes: Routes = [
  {
    path: 'newCollection',
    component: NewCollectionComponent
  },
  {
    path: 'hotCollection',
    component: HotCollectionComponent
  },
  {
    path: 'risingCollection',
    component: RisingCollectionComponent
  },
  {
    path: 'controversialCollection',
    component: ControversialCollectionComponent
  },
  {
    path: 'newPost',
    component: NewPostComponent
  }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
