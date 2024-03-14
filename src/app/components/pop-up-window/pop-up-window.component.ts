import { Component, Input, Renderer2, ElementRef} from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up-window',
  standalone: true,
  imports: [NgIf],
  templateUrl: './pop-up-window.component.html',
  styleUrl: './pop-up-window.component.css'
})
export class PopUpWindowComponent{
  @Input() iconCorrect:boolean = false;
  @Input() texto:string = '';
  @Input() colorDecoration = '';
  @Input() nextWindow = '';
  showPopup: boolean = false;
  bgColorBtn:string = 'transparent';

  constructor(private renderer:Renderer2, private el:ElementRef, private router: Router){}

  openPopup(){
    this.showPopup = true;
  }

  closePopup(){
    this.changeBGColorBtnWithOutHover();
    this.showPopup = false;
  }

  changeBGColorBtnWithHover(){
    this.bgColorBtn = this.iconCorrect ? 'greenyellow' : 'red';
    this.colorDecoration = 'black';
  }
  changeBGColorBtnWithOutHover(){
    this.bgColorBtn = 'transparent';
    this.colorDecoration = this.iconCorrect ? 'greenyellow' : 'red';
  }

  navegateToAnotherWindow(){
    this.router.navigate([this.nextWindow]);
  }

  actionClick(){
    this.closePopup();
    if(this.iconCorrect) this.navegateToAnotherWindow();
  }
}
