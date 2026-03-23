import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropDown]',
    standalone: false
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toogleOpen() {
        this.isOpen = !this.isOpen;
    }
}