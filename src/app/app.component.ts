import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project-Angular6';
  loadedFeature = "recipe";

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD-HLcMvrkAxPmjL1S2QN7tOnNlih_x2K8",
      authDomain: "angular6demonick.firebaseapp.com"})
  }

}
