import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TitleComponent } from './title/title.component';
import { InstructComponent } from './instruct/instruct.component';
import { GameComponent } from './game/game.component';
import { CongratsComponent } from './congrats/congrats.component';
import { GameOverComponent } from './game-over/game-over.component';

@NgModule({
  declarations: [MainComponent, TitleComponent, InstructComponent, GameComponent, CongratsComponent, GameOverComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
