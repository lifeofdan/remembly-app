import { Component, signal } from '@angular/core';
import { MainNav } from '../components/manNav';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div>
      <div class="container mx-auto">
        <main-nav />
        <article class="prose lg:prose-xl mx-auto text-center mt-16">
          <div id="logo" class="flex gap-4 items-center justify-center">
            <img src="/icon-1024x1024.png" class="max-h-20" />
            <h1>Remebly</h1>
          </div>

          <p>A place to store things that you want to remember...later.</p>
        </article>
      </div>
    </div>
  `,
  styles: [
    `
      #logo h1 {
        margin-bottom: 0px;
      }

      @media (prefers-color-scheme: dark) {
        .read-the-docs > * {
          color: #213547;
        }
      }
    `,
  ],
  imports: [MainNav],
})
export default class HomeComponent {}
