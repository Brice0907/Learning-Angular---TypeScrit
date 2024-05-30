import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.model';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  mySnap!: FaceSnap;
  myMotherSnap!: FaceSnap;

  ngOnInit(): void {
    this.faceSnaps = [
      this.mySnap = {
        title: "Archibard",
        description: "Mon meilleur ami depuis tout petit !",
        imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        createdDate: new Date(),
        snaps: 200,
        location: 'Paris'
      },

      this.myMotherSnap = {
        title: "Three Rock Mountain",
        description: "Un endroit magnifique pour les randonnées",
        imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        createdDate: new Date(),
        snaps: 0,
      }
    ]
  }

}
