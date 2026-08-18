import { ComponentFixture, TestBed } from '@angular/core/testing'; // Imports tools from Angular that are used for testing components.
import { Login } from './login'; // Imports the Login component that needs to be tested.


// describe() groups together all the tests for the Login component.
describe('Login', () => {

  // Holds the actual Login component instance that will be tested as well as the testing environment.
  let component: Login;
  let fixture: ComponentFixture<Login>;

  // beforeEach() runs before every individual test.
  beforeEach(async () => {

    // Creates a testing version of the Angular application, marking the Login component as available and compiles it + its template.
    await TestBed.configureTestingModule({ imports: [Login], })
    .compileComponents();

    fixture = TestBed.createComponent(Login); // Creates an instance of the Login component for testing.
    component = fixture.componentInstance; // Gets the actual Login component from the test fixture.

    await fixture.whenStable(); // Waits until any pending work is finished.
  });

  // Defines a test that checks whether the Login component can be created, checking whether that component exists.
  it('should create', () => {
    expect(component).toBeTruthy(); // Checks that the Login component exists.
  });

});