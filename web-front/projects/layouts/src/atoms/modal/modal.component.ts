import { Component, OnInit, OnDestroy, ElementRef, ComponentFactoryResolver, Renderer2 } from '@angular/core';

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  show = false;

  private refRoot;

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit() {
    this.createInRoot()
  }

  open() {
    this.show = true;
  }

  close() {
    this.show = false;
  }

  createInRoot() {
    this.refRoot = document.body.appendChild(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.render.removeChild(document.body, this.refRoot);
  }

}
