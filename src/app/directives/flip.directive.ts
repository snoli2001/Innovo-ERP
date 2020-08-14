import {
  AfterViewChecked,
  EventEmitter,
  Directive,
  DoCheck,
  ElementRef,
  HostListener,
  Inject,
  Output,
  Renderer2,
  NgZone, OnChanges, SimpleChanges, Input, HostBinding, ViewChild, OnInit, AfterViewInit
} from '@angular/core';
import {DOCUMENT, getLocaleDateFormat} from "@angular/common";
import {Observable} from "rxjs";


@Directive({
  selector: '[appFlip]'
})
export class FlipDirective{

  // private allElements;
  //
  // ngOnInit() {
  //   this.allElements = this.document.querySelectorAll('.appFlip');
  // }
  // ngAfterViewInit() {
  //
  // }


  // @HostBinding('attr.aria-expanded')
  // @Input() dataExpanded;

  @Output()
  public clickOutside = new EventEmitter();
  constructor(private renderer: Renderer2,
              public hostElement: ElementRef, @Inject(DOCUMENT) private document) {
    // this.renderer.addClass(this.hostElement.nativeElement, 'appFlip');
    // this.renderer.addClass(this.hostElement.nativeElement, 'collapsed');
  }

  // @HostListener('click', ['$event'])
  // onClick(event) {
  //   let myTag = this.hostElement.nativeElement;
  //
  //     if (!myTag.classList.contains('collapsed')) {
  //       this.renderer.removeClass(this.hostElement.nativeElement, 'open');
  //
  //     } else {
  //       this.renderer.addClass(this.hostElement.nativeElement, 'open');
  //     }
  //
  // }
  //
  //  ngAfterViewChecked() {
  //    console.log( this.hostElement.nativeElement.getAttribute('aria-expanded'));
  //    let myTag = this.hostElement.nativeElement;
  //    let expanded =  this.hostElement.nativeElement.getAttribute('aria-expanded')
  //      if (!myTag.classList.contains('collapsed') ) {
  //        this.renderer.removeClass(this.hostElement.nativeElement, 'open');
  //      }
  //    }


}
