import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js';

@Component({
	selector: 'pb-game',
	templateUrl: './game.component.html',
	styleUrls: [ './game.component.scss' ]
})
export class GameComponent implements OnInit {
	startTimer: number = 3;
	startTimerInterval: any;

	gameTimer: number = 15;
	gameTimerInterval: any;
	time: string = '15';

	constructor() {}

	ngOnInit() {
		this.initGame();
	}

	initGame() {
		this.startTimer = 3;
		if (this.startTimerInterval) {
			clearInterval(this.startTimerInterval);
		}

		this.startTimerInterval = setInterval(() => {
			if (this.startTimer === -1) {
				setTimeout(() => this.startGame(), 500);
				clearInterval(this.startTimerInterval);
			}
			this.startTimer--;
		}, 1000);
	}

	private startGame() {
		this.gameTimer = 15;

		if (this.gameTimerInterval) {
			clearInterval(this.gameTimerInterval);
		}

		this.gameTimerInterval = setInterval(() => {
			if (this.gameTimer === 0) {
				clearInterval(this.gameTimerInterval);
			}
			this.gameTimer--;
			this.time = this.gameTimer.toString();
			this.time = this.time.length < 2 ? '0' + this.time : this.time;
		}, 1000);
	}
}
