import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import {PhotosComponent} from './photos/photos.component';
import {TodosComponent} from './todos/todos.component';
import {CommentsComponent} from './comments/comments.component';
import {InfoComponent} from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent // this specifies that the UsersComponent will be loaded first.
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'info/:id',
    component: InfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
