import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { configureTestSuite } from 'ng-bullet';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            providers: [
                FormBuilder
            ]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have Angular Phone Directory header', () => {
        let el = fixture.debugElement.query(By.css('.div-header'));
        let spanEl = el.nativeElement;
        expect(spanEl.innerHTML).toContain('Angular Phone Directory');
    });
});