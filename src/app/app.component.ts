import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingIndicatorComponent } from './core/components/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, LoadingIndicatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
