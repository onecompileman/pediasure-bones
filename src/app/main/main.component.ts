import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { mainRoutingAnimation } from './main-routing.animation';

@Component({
	selector: 'pb-main',
	templateUrl: './main.component.html',
	styleUrls: [ './main.component.scss' ],
	animations: [ mainRoutingAnimation ]
})
export class MainComponent implements OnInit {
	isPortrait: boolean;

	height: number;
	width: number;

	constructor() {}

	ngOnInit() {
		this.isPortrait = innerHeight > innerWidth;
		this.height = innerHeight;
		this.width = innerWidth;
	}

	@HostListener('window:resize', [ '$event' ])
	onResize() {
		this.isPortrait = innerHeight > innerWidth;
		this.height = innerHeight;
		this.width = innerWidth;
	}

	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}
}
