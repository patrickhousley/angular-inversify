import { Container } from 'inversify';

export interface ExampleApp {
  container: Container;
}

declare global {
  interface Window {
    exampleApp: ExampleApp;
  }
}
