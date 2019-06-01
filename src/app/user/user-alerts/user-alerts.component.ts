import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-alerts',
  templateUrl: './user-alerts.component.html',
  styleUrls: ['./user-alerts.component.scss']
})
export class UserAlertsComponent implements OnInit {
  @Input() successMessage: string;
  @Input() errorMessage: string;
  @Input() infoMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
