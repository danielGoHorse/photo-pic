import { Directive, ElementRef, HostListener, Renderer } from "@angular/core";

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    //quando quero apontar um brightness personalizado direto no html
    // @Input() brightness = '70%';

    constructor(
        private el: ElementRef,
        private render: Renderer
    ) {}

    @HostListener('mouseover')
    darkenOn() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
        //quando quero apontar um brightness personalizado direto no html
        // this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);

    }
    @HostListener('mouseleave')
    darkenOff() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}