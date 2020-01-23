import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentWrapperLoaderService } from 'src/app/services/component-wrapper-loader/component-wrapper-loader.service';

@Component({
  selector: 'advtech-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  @ViewChild(HTMLElement, { static: true })
  public element: HTMLElement;

  @ViewChild('insertionPoint', {read: ViewContainerRef, static: true })
  public insertionPoint: ViewContainerRef;

  constructor(private componentWrapperLoaderService: ComponentWrapperLoaderService) { }

  ngOnInit() {
  }

  loadChildren(config: any, viewContainerRef: ViewContainerRef) {
    this.componentWrapperLoaderService.loadComponent(viewContainerRef);

  }

  createElement(config) {
    const element = document.createElement(config.tag);

    element.label = config.label;
    this.insertionPoint.element.nativeElement.append(element);

  }
}
