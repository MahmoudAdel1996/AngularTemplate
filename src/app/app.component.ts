import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingIndicatorComponent } from './core/components/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, LoadingIndicatorComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
