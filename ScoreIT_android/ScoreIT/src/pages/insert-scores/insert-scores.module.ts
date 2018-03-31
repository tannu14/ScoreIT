import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsertScoresPage } from './insert-scores';

@NgModule({
  declarations: [
    InsertScoresPage,
  ],
  imports: [
    IonicPageModule.forChild(InsertScoresPage),
  ],
})
export class InsertScoresPageModule {}
