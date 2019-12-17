import { Directive, Input, Output, EventEmitter, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngInit]'
})
export class ScrollToDirective implements OnInit {

  @Input() targetId: string = '';
  @Input() data: any[];
  private changes: MutationObserver;
  @Output('ngInit') initEvent: EventEmitter<any> = new EventEmitter();
  constructor(private elementRef: ElementRef) {
    const element = this.elementRef.nativeElement;

    this.changes = new MutationObserver((mutations: MutationRecord[]) => {
      mutations.forEach((mutation: MutationRecord, i) => {
        if (i == 100) {
          console.log('end element')
          if (this.targetId && parseInt(this.targetId) <= 100) {
            let el2 = window.document.getElementById(this.targetId);
            el2.scrollIntoView();
          }
        }
      });
    }
    );

    this.changes.observe(element, {
      attributes: true,
      childList: true,
      characterData: true
    });
  }


  ngOnInit() {
    console.log(this.targetId, 'target')
  }


}
