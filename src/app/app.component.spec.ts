import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, ContactComponent
      ],
      imports: [
        FormsModule
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('createContact should add contact to contacts', async(() => {
    const contact = {
      name: 'John Doe',
      email: 'john@craftacademy.se',
      company: 'Craft Academy',
      role: 'Tester',
      twitter: '@tester',
      location: 'Stockholm',
      notes: 'There are no notes on this guy'
    };

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.contact = contact;
    app.createNewContact();

    expect(app.contacts[app.contacts.length -1]).toEqual(contact);
  }));

});
