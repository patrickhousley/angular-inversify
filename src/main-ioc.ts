import 'reflect-metadata';
import { Container } from 'inversify';

const container = new Container();

container
  .bind<string>('EXAMPLE_VERSION')
  .toConstantValue('1.0.0');
container
  .bind<string>('CONTAINER_LEVEL')
  .toConstantValue('ROOT');

window.exampleApp = {
  container
};
