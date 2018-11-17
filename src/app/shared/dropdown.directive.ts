import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
selector:"[appDropdown]"

})

export class DropdownDirective{
 @HostBinding('class.open')   IsOpen=false;

    @HostListener('click') toggleOpen(){
        this.IsOpen=!this.IsOpen;
    } 

    
}