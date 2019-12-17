import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'img[src]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[src]': 'checkPath(src)',
    '(error)': 'onError()'
  }
})
export class PalceholderImageDirective {

  @Input() src: string;
  public defaultImg = 'https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg';
  public onError() {
    this.src = this.defaultImg;
  }
  public checkPath(src) {
    return src ? src : this.defaultImg;
  }
}
