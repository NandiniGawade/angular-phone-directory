import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'ng-bullet';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';


describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent],
            providers: [
                FormBuilder
            ]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have © Phone Directory footer', () => {
        const el = fixture.debugElement.query(By.css('.div-footer'));
        const spanEl = el.nativeElement;
        expect(spanEl.innerHTML).toContain('© Phone Directory');
    });
});
