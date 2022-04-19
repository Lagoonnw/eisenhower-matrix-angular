import { Directive, Input, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import {
  AnimationPlayer,
  AnimationBuilder, AnimationFactory, AnimationMetadata
} from '@angular/animations';

@Directive({
  selector: '[appGradientAnimation]'
})
export class GradientAnimationDirective {
  private player: AnimationPlayer | undefined;
  @Input() appGradientAnimation: AnimationMetadata[] = [];

  @HostListener('mouseenter', ['$event'])
  onMouseEnter() {
    console.log('here', this.el);
    // sanitize just in case
    if (this.player) {
      this.player.destroy();
    }

    const factory = this.builder.build(this.appGradientAnimation);
    const player = factory.create(this.el.nativeElement);

    // ensure back-to-original
    player.onDone(() => { player.reset(); });
    player.play();
  }

  constructor(private builder: AnimationBuilder, private el: ElementRef) { }

}
