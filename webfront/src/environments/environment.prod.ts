// export const Environment = {
//   production: true
// };

import { InjectionToken, Injector, enableProdMode } from '@angular/core';
export class Environment {
  production = true;
  baseUrl = 'http://localhost:3000/';
  cloudinaryBaseUrl = 'https://res.cloudinary.com/dffx3eqxk/image/upload/';
}

const injector = Injector.create([
  { provide: Environment, useClass: Environment, deps: [] }
]);

export const environment: Environment = injector.get(Environment);

// Remove all console messages
console.log = function() {};
