import { ComponentFixture, TestBed } from '@angular/core/testing'; // Imports tools from Angular that are used for testing components.
import { Home } from './home'; // Imports the Home component that needs to be tested.


// describe() groups together all the tests for the Home component.
describe('Home', () => {

  // Holds the actual Home component instance that will be tested as well as the testing environment.
  let component: Home;
  let fixture: ComponentFixture<Home>;

  // beforeEach() runs before every individual test.
  beforeEach(async () => {

    // Creates a testing version of the Angular application, marking the Home component as avaliable and compiles it + its template.
    await TestBed.configureTestingModule({ imports: [Home], })
    .compileComponents();

    fixture = TestBed.createComponent(Home); // Creates an instance of the Home component for testing.
    component = fixture.componentInstance; // Gets the actual Home component from the test fixture.
    
    await fixture.whenStable(); // Waits until any pending work is finished.
  });

  // Defines a test that checks whether the Home component can be created, checking whether that component exists.
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});