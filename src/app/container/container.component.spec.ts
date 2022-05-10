import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, NgControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { PhoneDirective } from '../directive/phone.directive';

import { ContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ ContainerComponent,PhoneDirective ],
      providers: [
          FormBuilder,
          NgControl
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Phone masking', () => {

    it('init data', () => {
      component.ngOnInit();
      expect(component.phoneForm.value.phone).toEqual('');
    });

    it('after masking ngmodel value should not change',  fakeAsync(() => {
        const hostElement: HTMLElement = fixture.nativeElement;
        const nameInput: HTMLInputElement = hostElement.querySelector('input')!;
        fixture.detectChanges();

        nameInput.value = '2345678898';
        nameInput.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        tick();
        fixture.whenStable().then(() => {
          expect(fixture.componentInstance.phoneForm.value.phone).toEqual('2345678898');
        });       
    }));

    it('If phone number is less than 10 digit it should show error message',  fakeAsync(() => {
      const hostElement: HTMLElement = fixture.nativeElement;
      const nameInput: HTMLInputElement = hostElement.querySelector('input')!;
      fixture.detectChanges();

      nameInput.value = '234567889';
      nameInput.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      const blurEvent = new InputEvent('blur');
      nameInput.dispatchEvent(blurEvent);
      fixture.detectChanges();

      tick();
      fixture.whenStable().then(() => {
        expect(fixture.componentInstance.isValid).toBeFalsy();
      });       
  }));
  
  });
});
