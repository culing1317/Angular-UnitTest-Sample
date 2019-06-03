import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ContactComponent } from './contact.component';

import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { BrowserModule, By } from '@angular/platform-browser';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
describe('ContactComponent', () => {
  let comp: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ContactComponent);
      comp = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  it(`should have as text contact page'`,async(() => {
    expect(comp.text).toEqual('contact page');
  }));

  it('should set submitted to true', async(() => {
    comp.onSubmit();
    expect(comp.submitted).toBeTruthy;
  }));

  it('form call the onSubmit method', async(() => {
    fixture.detectChanges();
    spyOn(comp, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(comp.onSubmit).toHaveBeenCalledTimes(0);
  }));
  it('form should be invalid', async(() => {
    comp.contactForm.controls['email'].setValue('');
    comp.contactForm.controls['name'].setValue('');
    comp.contactForm.controls['text'].setValue('');
    expect(comp.contactForm.valid).toBeFalsy;
  }));
  it('form should be valid', async(() => {
    comp.contactForm.controls['email'].setValue('asd@asd.com');
    comp.contactForm.controls['name'].setValue('aada');
    comp.contactForm.controls['text'].setValue('text');
    expect(comp.contactForm.valid).toBeTruthy;
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});
