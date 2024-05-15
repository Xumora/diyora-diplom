import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { InstrumentComponent } from './instruments/instrument/instrument.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { VideosComponent } from './videos/videos.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'navigation',
  },
  {
    path: 'navigation',
    component: NavigationComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'instruments',
    component: InstrumentsComponent,
  },
  {
    path: 'instruments/:index',
    component: InstrumentComponent,
  },
  {
    path: 'first-chapter',
    component: FirstComponent,
  },
  {
    path: 'second-chapter',
    component: SecondComponent,
  },
  {
    path: 'third-chapter',
    component: ThirdComponent,
  },
];
