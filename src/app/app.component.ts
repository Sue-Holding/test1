import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';
import { LikesComponent } from "./likes/likes.component"

interface User {
  name: String
}

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [CommonModule, FormsModule, LikesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test1';
  name = 'sue';

  pcolor = "blue"

  changeColor() {
    this.pcolor = "vividpink"
  }

  users: User[] = [{name: "Sue"}]
}
