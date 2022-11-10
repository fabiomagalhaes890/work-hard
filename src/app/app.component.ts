import { Component } from '@angular/core';
import { EventTypes } from './models/event-types';
import { ToastService } from './services/toaster/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'work-hard';

  constructor() {}  
}
