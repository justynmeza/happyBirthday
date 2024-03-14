import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-happy-birthday',
  standalone: true,
  imports: [],
  templateUrl: './happy-birthday.component.html',
  styleUrl: './happy-birthday.component.css'
})
export class HappyBirthdayComponent {

  private isLetterVisible:boolean = false;
  private isGiftVisible:boolean = false;

  constructor( private renderer: Renderer2, private el: ElementRef){}

  hideLetter(){
    const letter = this.el.nativeElement.querySelector(['#note'])
    if (letter) {
      this.renderer.setStyle(letter, 'height', this.isLetterVisible ? '0' : 'auto');
      this.renderer.setStyle(letter, 'visibility', this.isLetterVisible ? 'hidden' : 'visible');
    }

    const title = this.el.nativeElement.querySelector(['#title_note'])
    if (title) this.renderer.setStyle(title, 'visibility', this.isLetterVisible ? 'hidden' : 'visible');

    for (let index = 1; index <= 12; index++) {
      const note = this.el.nativeElement.querySelector([`#txt_note${index}`])
      if (note) this.renderer.setStyle(note, 'visibility', this.isLetterVisible ? 'hidden' : 'visible');
    }

    const btn = this.el.nativeElement.querySelector(['#btn_gift'])
    if (btn) this.renderer.setStyle(btn, 'visibility', this.isLetterVisible ? 'hidden' : 'visible');

    this.isLetterVisible = !this.isLetterVisible;
  }

  hideGift(){
    const gift = this.el.nativeElement.querySelector(['#container_gift'])
    if (gift) this.renderer.setStyle(gift, 'visibility', this.isGiftVisible ? 'hidden' : 'visible');

    this.isGiftVisible = !this.isGiftVisible;
  }
}
