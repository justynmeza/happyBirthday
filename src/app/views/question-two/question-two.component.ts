import { Component, ViewChild } from '@angular/core';
import { PopUpWindowComponent } from '../../components/pop-up-window/pop-up-window.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-two',
  standalone: true,
  imports: [PopUpWindowComponent, FormsModule],
  templateUrl: './question-two.component.html',
  styleUrl: './question-two.component.css'
})
export class QuestionTwoComponent {

  @ViewChild(PopUpWindowComponent) popupWindow!: PopUpWindowComponent;

  message:string = '';
  icon:boolean = false;
  colorDecoration: string = '';
  nextWindow: string = 'questions/three';

  inputNickName: string = '';

  openPopup(){
    let nickname:string = this.inputNickName;
    let isIcon:boolean = false;

    nickname = nickname.trim();

    function asignMessage(){
      if (nickname.toLowerCase() != 'pewkenyeyu' && nickname.toLowerCase() != 'careverguita') return 'Si no sabes esto es porque no eres tu!! 😒';
      isIcon = true;
      if (nickname.toLowerCase() == 'careverguita') return 'jajajajaja definitivamente pareces ser tu 🤣';
      return 'Excelente! vas por buen camino parece si eres la correcta ❤️';
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
