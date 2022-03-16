import { Component } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-po';
  counter: number = 0;
 
  sub!: Subscription;

  start() {
    this.sub = interval(1000).subscribe(_ => this.counter++);
  }

  stop() {
    this.sub.unsubscribe();

  }
}
