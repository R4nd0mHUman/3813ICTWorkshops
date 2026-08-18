import { ComponentFixture, TestBed } from '@angular/core/testing'; // Imports tools from Angular that are used for testing components.
import { Profile } from './profile'; // Imports the Profile component that needs to be tested.


// describe() groups together all the tests for the Profile component.
describe('Profile', () => {

  // Holds the actual Profile component instance that will be tested as well as the testing environment.
  let component: Profile;
  let fixture: ComponentFixture<Profile>;

  // beforeEach() runs before every individual test.
  beforeEach(async () => {

    // Creates a testing version of the Angular application, marking the Profile component as available and compiles it + its template.
    await TestBed.configureTestingModule({ imports: [Profile], })
    .compileComponents();

    fixture = TestBed.createComponent(Profile); // Creates an instance of the Profile component for testing.
    component = fixture.componentInstance; // Gets the actual Profile component from the test fixture.

    await fixture.whenStable(); // Waits until any pending work is finished.
  });

  // Defines a test that checks whether the Profile component can be created, checking whether that component exists.
  it('should create', () => {
    expect(component).toBeTruthy(); // Checks that the Profile component exists.
  });

});