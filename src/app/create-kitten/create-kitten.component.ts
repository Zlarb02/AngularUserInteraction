import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Kitten } from '../Model/kitten.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css'
})




export class CreateKittenComponent {

  @Output() kittenCreated = new EventEmitter<Kitten>();


  kittenForm: FormGroup;

  constructor(private fb: FormBuilder,) {
    this.kittenForm = this.fb.group({
      name: ['', Validators.required],
      race: ['', Validators.required],
      birthdate: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif|bmp|svg|tiff|tif|webp|heic|ico|tga|eps|pdf|psd|raw|cr2|nef|orf|dng|ai|indd)/)]]
    });
  }


  createKitten(kitten: Kitten) {
    if (this.kittenForm.valid) {
      const kitten: Kitten = this.kittenForm.value;
      console.log('Kitten created:', kitten);
      this.kittenCreated.emit(kitten);
      this.kittenForm.reset();
    }
  }
}
