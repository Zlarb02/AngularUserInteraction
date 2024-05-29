import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { Kitten } from '../Model/kitten.model';

@Component({
  selector: 'app-user-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.css'
})
export class UserKittenComponent {

  @Input()
  adoptedKittens: Kitten[] = [];

  constructor(private elementRef: ElementRef) { }

  hoveredKitten: Kitten | null = null;

  onMouseEnter(kitten: Kitten): void {
    this.hoveredKitten = kitten;
  }

  onMouseLeave() {
    this.hoveredKitten = null;
  }
}

