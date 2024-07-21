import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatToolbar, MatIcon, MatIconButton, RouterLink, MatCard],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {}
