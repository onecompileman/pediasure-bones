import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'pb-instruct',
	templateUrl: './instruct.component.html',
	styleUrls: [ './instruct.component.scss' ]
})
export class InstructComponent implements OnInit {
	step = 1;

	constructor(private router: Router) {}

	ngOnInit() {
		this.step = 1;
	}

	next() {
		if (this.step === 2) {
			this.router.navigate([ '/game' ]);
		} else {
			this.step++;
		}
	}
}
