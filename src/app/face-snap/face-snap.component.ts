import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule, NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  textSnaps!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.textSnaps = "Oh Snaps !";
  }

  onClickSnap() {
    if (this.textSnaps === "UnSnaps !") {
      this.faceSnap.snaps--;
      this.textSnaps = "Oh Snaps !";
      this.userHasSnapped = false;
    } else {
      this.faceSnap.snaps++;
      this.textSnaps = "UnSnaps !";
      this.userHasSnapped = true;
    }
  }

}
