import { Component, ViewChild } from '@angular/core';
import { PopUpWindowComponent } from '../../components/pop-up-window/pop-up-window.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-four',
  standalone: true,
  imports: [PopUpWindowComponent, FormsModule],
  templateUrl: './question-four.component.html',
  styleUrl: './question-four.component.css'
})
export class QuestionFourComponent {
  @ViewChild(PopUpWindowComponent) popupWindow!: PopUpWindowComponent;

  message:string = '';
  icon:boolean = false;
  colorDecoration: string = '';
  nextWindow: string = 'happyBirthday';

  inputKey: string = '';
  isTryPutKey: boolean = false;

  openPopup(){

    let errorMessage:string = 'Como piensas seguir si digitar la clave? 🤔';
    let correctMessage:string = 'QUE MONDA AMOR! NUNCA LE PASES LA CLAVE A NADIE!!! 😐😐 Ya se que eres tu jeje 🥰🥰';


    if (this.popupWindow){
      this.message = this.isTryPutKey ? correctMessage : errorMessage;
      this.icon = this.isTryPutKey ? true : false;
      this.colorDecoration = this.isTryPutKey ? 'greenyellow' : 'red';
      this.popupWindow.openPopup();
    }
  }

  ExecuteAction(){
    this.openPopup();
  }

  tryPutPass(){
    this.isTryPutKey = true
    this.openPopup();
  }
}
