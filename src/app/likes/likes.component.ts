import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likes',
  imports: [],
  templateUrl: './likes.component.html',
  styleUrl: './likes.component.css'
})
export class LikesComponent {
  @Input() title: string = 'Ge en like!';
  @Output() liked = new EventEmitter<void>();

  likes = 0;

  handleLike() {
    this.likes++;
    this.liked.emit();
  }
}
