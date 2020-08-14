import {
  AfterContentChecked,
  AfterViewChecked, AfterViewInit,
  Directive,
  DoCheck,
  ElementRef, HostBinding,
  HostListener,
  Inject, OnDestroy, OnInit,
  Renderer2
} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import validate = WebAssembly.validate;
import {rejects} from "assert";

@Directive({
  selector: '[appFlip2]'
})

export class Flip2Directive implements DoCheck{
  //
  @HostBinding('class') state= 'closed';

  constructor(private renderer: Renderer2,
              public hostElement: ElementRef,
              @Inject(DOCUMENT) private document) {
  }
  ngDoCheck() {
    // console.log(this.state)
  // console.log(this.state);
  // if(this.state == 'open' && this.hostElement.nativeElement.classList.contains('collapsed')){
  //   console.log(true);
  // }
  // console.log(this.aria);
  }
  //
  //
  @HostListener('click', ['$event']) onClick($event){
    var myTag =this.hostElement.nativeElement;
    // if(myTag.classList.contains('collapsed')){
    //
    //  this.getOpen().then( state => console.log(this.hostElement));
    // }
    // else {
    //   this.state='closed';
    // }
  }
  // @HostListener('document:click', ['$event']) onClickDocument($event) {
  // console.log('hello');
  // }
  getOpen(){
    return new Promise((resolve,reject)=>{
      resolve(this.state= 'open');
    })
  }


}

