import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { CreateKittenComponent } from '../create-kitten/create-kitten.component';
import { Kitten } from '../Model/kitten.model';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [CommonModule, CreateKittenComponent],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css'
})
export class ListKittenComponent {

  @Output() kittenAdopted = new EventEmitter<Kitten>();
  selectedKitten: Kitten | undefined;
  modalVisible: boolean | undefined;

  constructor(private elementRef: ElementRef) { }

  kittens = [
    {
      name: 'Coco',
      race: 'Siamois',
      birthdate: '2022-01-01',
      image: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
    },
    {
      name: 'Mimi',
      race: 'Siamois',
      birthdate: '2023-01-01',
      image: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg'
    },
    {
      name: 'Luna',
      race: 'european-shorthair',
      birthdate: '2024-01-01',
      image: 'https://cdn.pixabay.com/photo/2023/07/05/04/45/european-shorthair-8107433_1280.jpg'
    }
  ]
  onKittenCreated(newKitten: Kitten) {
    this.kittens.push(newKitten); // Ajoute le nouveau kitten à la liste
  }

  adoptKitten(kitten: Kitten) {
    this.kittens = this.kittens.filter((k) => k !== kitten);
    this.kittenAdopted.emit(kitten);
  }

  hoveredKitten: Kitten | null = null;

  onMouseEnter(kitten: Kitten): void {
    this.hoveredKitten = kitten;
  }

  onMouseLeave() {
    this.hoveredKitten = null;
  }
}