import { TestBed } from '@angular/core/testing'; // Imports the testing tool used to create a testing environment for Angular components.
import { App } from './app'; // Imports the App component that needs to be tested.


// describe() groups together all the tests for the App component.
describe('App', () => {

  // beforeEach() runs before every individual test.
  beforeEach(async () => {

    // Creates a testing version of the Angular application, marking the App component as available and compiles it + its template.
    await TestBed.configureTestingModule({ imports: [App], })
    .compileComponents();

  });

  // Defines a test that checks whether the App component can be created, checking whether that component exists.
  it('should create the app', () => {

    const fixture = TestBed.createComponent(App); // Creates an instance of the App component for testing.
    const app = fixture.componentInstance; // Gets the actual App component from the test fixture.

    expect(app).toBeTruthy(); // Checks that the App component exists.
  });


  // Defines a test that checks whether the correct title is displayed on the page.
  it('should render title', async () => {

    const fixture = TestBed.createComponent(App); // Creates an instance of the App component for testing.

    await fixture.whenStable(); // Waits until any pending work is finished.

    const compiled = fixture.nativeElement as HTMLElement; // Gets the HTML of the App component so it can be inspected.

    // Checks whether an <h1> element exists and contains the text "Hello, week4".
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, week4');
  });

});