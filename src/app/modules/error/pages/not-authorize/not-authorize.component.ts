import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-authorize',
  imports: [RouterModule],
  templateUrl: './not-authorize.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './not-authorize.component.scss',
})
export class NotAuthorizeComponent {}
