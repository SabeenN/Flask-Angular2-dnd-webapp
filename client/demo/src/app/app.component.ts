import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-app',
  template: `
  <nav>
    <a routerLink="/home" routerLinkActive="active"></a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'] ,
  encapsulation: ViewEncapsulation.None
})
export class DemoComponent {
}
