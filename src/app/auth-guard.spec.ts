import { TestBed } from '@angular/core/testing'; // Imports the testing tool used to create a testing environment for Angular.

import { CanActivateFn } from '@angular/router'; // Imports the type used to represent an Angular route guard function.

import { authGuard } from './auth-guard'; // Imports the authGuard that needs to be tested.


// describe() groups together all the tests for the authGuard.
describe('authGuard', () => {

  // Creates a function that can execute the authGuard inside Angular's testing/injection environment.
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  // beforeEach() runs before every individual test.
  beforeEach(() => {

    // Creates a basic testing environment for the authGuard.
    TestBed.configureTestingModule({});

  });

  // Defines a test that checks whether the authGuard function exists.
  it('should be created', () => {

    // Checks that the executeGuard function exists.
    expect(executeGuard).toBeTruthy();

  });

});