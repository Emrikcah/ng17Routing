import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  template: `
    <header class="text-gray-400 bg-gray-900 body-font">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <a routerLink="/home"
          class="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full "
            viewBox="0 0 24 24"
            
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <span class="ml-3 text-xl" >Tailblocks</span>
        </a>
        <nav
          class="md:ml-auto flex flex-wrap items-center text-base justify-center"
        >
          <a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
          ariaCurrentWhenActive="page" class="mr-5 hover:text-white">Home</a>
          <a routerLink="/about" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
          ariaCurrentWhenActive="page" class="mr-5 hover:text-white">About</a>
          
          <a routerLink="/contact" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
          ariaCurrentWhenActive="page" class="mr-5 hover:text-white">Contact</a>
        </nav>
        
      </div>
    </header>
  `,
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
