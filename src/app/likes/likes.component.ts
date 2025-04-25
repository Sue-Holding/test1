import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LikesService } from './likes.service';

@Component({
  selector: 'app-likes',
  imports: [],
  templateUrl: './likes.component.html',
  styleUrl: './likes.component.css'
})
export class LikesComponent implements OnInit, OnDestroy {
  
  @Input() title: string = 'Ge en like!';
  @Output() liked = new EventEmitter<void>();

  likes = 0;

  private resetSubscription!: Subscription;

  constructor(private likesService: LikesService) {}

  ngOnInit(): void {
    this.resetSubscription = this.likesService.reset$.subscribe(() => {
      this.likes = 0; 
     })
  }
  ngOnDestroy(): void {
    this.resetSubscription.unsubscribe();
  }

  handleLike() {
    this.likes++;
    this.likesService.addLike();
    this.liked.emit();
  }
}
