import { Component } from '@angular/core';
import {IonCol, IonRow,IonCardContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [ IonCol, IonRow ,IonCardContent, IonButton, IonCardSubtitle, IonCardTitle, IonCard, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,],
})
export class Tab1Page {
  constructor() {}
}
