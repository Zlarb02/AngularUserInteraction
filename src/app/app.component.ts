import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { Kitten } from './Model/kitten.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserKittenComponent, ListKittenComponent, CreateKittenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NgUserInteraction';
  adoptedKittens: Kitten[] = [];

  onKittenAdopted(kitten: Kitten) {
    this.adoptedKittens.push(kitten);
  }
}
