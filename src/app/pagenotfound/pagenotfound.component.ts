import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="text-center">
      <h1 class="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p class="mb-4 text-lg text-gray-600">
        Oops! Looks like you're lost.
        <a routerLink="/home" class="text-blue-500 cursor-pointer">Home</a>
      </p>
    </div>
  `,
  styleUrl: './pagenotfound.component.css',
})
export class PagenotfoundComponent {}
