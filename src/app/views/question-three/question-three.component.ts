import { Component, ViewChild } from '@angular/core';
import { PopUpWindowComponent } from '../../components/pop-up-window/pop-up-window.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-question-three',
  standalone: true,
  imports: [PopUpWindowComponent, FormsModule],
  templateUrl: './question-three.component.html',
  styleUrl: './question-three.component.css'
})
export class QuestionThreeComponent {
  @ViewChild(PopUpWindowComponent) popupWindow!: PopUpWindowComponent;

  message:string = '';
  icon:boolean = false;
  colorDecoration: string = '';
  nextWindow: string = 'questions/four';

  inputName: string = '';

  openPopup(){
    let name:string = this.inputName;
    let isIcon: boolean = false;

    name = name.trim();

    function asignMessage(){
      if (name.toLowerCase() == 'andrea' || name.toLowerCase() == 'yo') return 'obvio tu no cuentas bobis... 😤';
      if (name.toLowerCase() == 'Lisbeth' || name.toLowerCase() == 'mama' || name.toLowerCase() == 'mi mama') return 'TU MAMA NO CUENTA! 😑';
      if (name.toLowerCase() == 'rosa' || name.toLowerCase() == 'hermana' || name.toLowerCase() == 'alberto' || name.toLowerCase() == 'hermano' || name.toLowerCase() == 'beto') return 'Eche! tus hermanos no cuentan 😒';
      if (name.toLowerCase() == 'camilo' || name.toLowerCase() == 'leal') return 'Esa perra no cuenta 🙃';
      if (name.toLowerCase() == 'camila' || name.toLowerCase() == 'daile' || name.toLowerCase() == 'sofia' || name.toLowerCase() == 'mato' || name.toLowerCase() == 'amigos') return 'No creo que sepas de quien estoy hablando 🤔';
      if (name.toLowerCase() != 'justyn') return 'Se nota que no eres tu...';
      isIcon = true;
      return 'Sabia que seria yo! JAJAJA 💕🤣';
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
