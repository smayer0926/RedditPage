import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { routing } from './app.routing';
import { HotCollectionComponent } from './hot-collection/hot-collection.component';
import { RisingCollectionComponent } from './rising-collection/rising-collection.component';
import { ControversialCollectionComponent } from './controversial-collection/controversial-collection.component';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCollectionComponent,
    HotCollectionComponent,
    RisingCollectionComponent,
    ControversialCollectionComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
