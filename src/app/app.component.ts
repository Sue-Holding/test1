import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';
import { LikesComponent } from "./likes/likes.component"
import { LikesService } from './likes/likes.service';

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
export class AppComponent implements OnInit{
  // title = 'test1';
  name = 'sue';
  pcolor = "blue"

  changeColor() {
    this.pcolor = "vividpink"
  }

  users: User[] = [{name: "Sue"}]

  title = 'Likes app';
  totalLikes = 0;

  constructor(private likesService: LikesService){}

  ngOnInit(): void {
    this.likesService.totalLikes$.subscribe((count) => {
      this.totalLikes = count;
    })
  }

  reset() {
    this.likesService.resetLikes();
  }
}
