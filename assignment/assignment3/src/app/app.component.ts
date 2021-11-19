import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment3';
  showSecret = false;
  log: Date[] = [];
  onToggle() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
}
