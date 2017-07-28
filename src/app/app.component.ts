import { Component, Inject, Optional } from '@angular/core';
import { Container } from 'inversify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(@Inject('EXAMPLE_VERSION') version: string) {
    console.log(version);
  }
}
