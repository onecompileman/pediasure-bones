import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'pb-title',
	templateUrl: './title.component.html',
	styleUrls: [ './title.component.scss' ]
})
export class TitleComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	start() {
		this.router.navigate([ '/how-to-play' ]);
	}
}
