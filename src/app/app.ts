import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CatalogComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'joes-robot-shop';
}
