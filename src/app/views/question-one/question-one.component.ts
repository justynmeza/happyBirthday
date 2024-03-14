import { Component, ViewChild } from '@angular/core';
import { PopUpWindowComponent } from '../../components/pop-up-window/pop-up-window.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-one',
  standalone: true,
  imports: [PopUpWindowComponent, FormsModule],
  templateUrl: './question-one.component.html',
  styleUrl: './question-one.component.css'
})
export class QuestionOneComponent {
  @ViewChild(PopUpWindowComponent) popupWindow!: PopUpWindowComponent;

  message:string = '';
  icon:boolean = false;
  colorDecoration: string = '';
  nextWindow: string = 'questions/two';

  inputName: string = '';
  inputSecondName: string = '';
  inputLastname: string = '';
  inputSecondLastName: string = '';

  openPopup(){
    let name = this.inputName;
    let secondName = this.inputSecondName;
    let lastname = this.inputLastname;
    let secondLastname = this.inputSecondLastName;
    let isIcon:boolean = false;

    function asignMessage(){
      if (name.toLowerCase() != 'andrea') return 'No creo que sepas de quien estoy hablando 🤔';
      if (secondName.toLowerCase() != 'carolina') return 'jajaja me suena que te estas equivocando en algo';
      if (lastname.toLowerCase() != 'hernandez') return 'Uy uy, me suena que no estas entendiendo 🤣';
      if (secondLastname.toLowerCase() != 'ricaurte') return 'casi casi, pero aun asi te equivocas jeje';
      isIcon = true;
      return 'Correcto!! parece que si eres tu! 😁';
    }


    if (this.popupWindow){
      this.message = asignMessage();
      this.icon = isIcon;
      this.colorDecoration = isIcon ? 'greenyellow' : 'red';
      this.popupWindow.openPopup();
    }
  }

  ExecuteAction(){
    this.openPopup();
  }

  
}
