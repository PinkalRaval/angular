import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment1';
  userName = '';
  userLength = this.userName.length < 6;

  reset() {
    this.userName = '';
  }
}
