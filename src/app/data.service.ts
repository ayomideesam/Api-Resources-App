import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  public getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }
  public getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  public getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
  public getPhotos() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos.0');
  }
  public getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  public getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
  public getComment(commentId) {
    return this.http.get('https://jsonplaceholder.typicode.com/comments/' + commentId);
  }
}
