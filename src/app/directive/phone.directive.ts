import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { NgControl } from '@angular/forms';
@Directive({
    selector: '[canadaPhone]'
})

/**
 * This directive will mask the phone number in canadian phone number format.
 * It will ignore 1 if its first number.
 */
export class PhoneDirective {

    constructor(
        public ngControl: NgControl) {
    }

    /**
     * Input model change event to convert number into phone masking.
     * @param event 
     */
    @HostListener('ngModelChange', ['$event'])
    onModelChange(event: string): void {
        this.onInputChange(event, false);
    }

    /**
     * To remove numbers from input box.
     * @param event 
     */

    @HostListener('keydown.backspace', ['$event'])
    keydownBackspace(event: any): void {
        this.onInputChange(event.target.value, true);
    }

    
    /**
     * This will convert phone into canadian phone number format.
     * @param event string type. Number entered by user
     * @param backspace Boolean
     */
    onInputChange(event: string, backspace: boolean): void {
        let newVal = event.replace(/\D/g, '');
        if (newVal.charAt(0) === '1') {
            newVal = newVal.substring(1);
        }

        if (backspace && newVal.length <= 6) {
          newVal = newVal.substring(0, newVal.length - 1);
        }
        if (newVal.length === 0) {
          newVal = '';
        } else if (newVal.length <= 3) {
          newVal = newVal.replace(/^(\d{0,3})/, '($1)');
        } else if (newVal.length <= 6) {
          newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
        } else if (newVal.length <= 10) {
          newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
        } else {
          newVal = newVal.substring(0, 10);
          newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
        }
        this.ngControl.valueAccessor.writeValue(newVal);
    }
}
