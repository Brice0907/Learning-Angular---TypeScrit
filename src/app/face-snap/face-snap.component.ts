import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule, NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  textSnaps!: string;
  userHasSnapped!: boolean;
  myLargeNumber: number = 4667916.76;
  myPercentage: number = 0.3367;
  myPrice: number = 336.75;

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
