import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-alerts',
  templateUrl: './post-alerts.component.html',
  styleUrls: ['./post-alerts.component.scss']
})
export class PostAlertsComponent {
  @Input() successMessage: string;
  @Input() errorMessage: string;
  @Input() infoMessage: string;

  constructor() { }

}
