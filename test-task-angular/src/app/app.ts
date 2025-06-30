import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  template: `<button (click)="openNewTab()">ChangeTab</button>`,
  styleUrl: './app.css'
})
export class App {
  protected title = 'test-task-angular';

  openNewTab() {
    window.open('http://localhost:4200/dashboard', '_blank');
  }
}