import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'about',
    template: `
        <h1>
            <img src="img/angular.svg"/>
            <h1>{{ title }}</h1>
        </h1>
    `
})
export class AboutComponent {
    title: string = 'About Angular 2';
}