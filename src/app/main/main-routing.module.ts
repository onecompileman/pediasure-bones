import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { TitleComponent } from './title/title.component';
import { InstructComponent } from './instruct/instruct.component';
import { GameComponent } from './game/game.component';
import { CongratsComponent } from './congrats/congrats.component';
import { GameOverComponent } from './game-over/game-over.component';

const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: '',
				component: TitleComponent,
				data: {
					animation: 'Title Page'
				}
			},
			{
				path: 'how-to-play',
				component: InstructComponent,
				data: {
					animation: 'Instruct Page'
				}
			},
			{
				path: 'game',
				component: GameComponent,
				data: {
					animation: 'Game Page'
				}
			},
			{
				path: 'congrats',
				component: CongratsComponent,
				data: {
					animation: 'Congrats Page'
				}
			},
			{
				path: 'game-over',
				component: GameOverComponent,
				data: {
					animation: 'Game Over Page'
				}
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class MainRoutingModule {}
