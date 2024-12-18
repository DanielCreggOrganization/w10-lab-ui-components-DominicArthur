import { Component } from '@angular/core';
import {IonThumbnail,IonAvatar,IonIcon,IonItemOptions,IonItemOption,IonItemSliding,IonBadge,IonLabel,IonItem,IonList,IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonThumbnail,IonAvatar,IonIcon,IonItemOptions,IonItemOption,IonItemSliding,IonBadge,IonLabel,IonItem,IonList,IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

  constructor() {}

}
