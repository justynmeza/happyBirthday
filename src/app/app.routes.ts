import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { QuestionOneComponent } from './views/question-one/question-one.component';
import { QuestionTwoComponent } from './views/question-two/question-two.component';
import { QuestionThreeComponent } from './views/question-three/question-three.component';
import { QuestionFourComponent } from './views/question-four/question-four.component';
import { CongratulationComponent } from './views/congratulation/congratulation.component';
import { HappyBirthdayComponent } from './views/happy-birthday/happy-birthday.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'questions/one', component: QuestionOneComponent},
    {path: 'questions/two', component: QuestionTwoComponent},
    {path: 'questions/three', component: QuestionThreeComponent},
    {path: 'questions/four', component: QuestionFourComponent},
    {path: 'congratulation', component: CongratulationComponent},
    {path: 'happyBirthday', component: HappyBirthdayComponent}
];
