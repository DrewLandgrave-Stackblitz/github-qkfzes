import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentWrapperLoaderService } from 'src/app/services/component-wrapper-loader/component-wrapper-loader.service';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'advtech-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  public element: CustomComponent;

  @ViewChild('insertionPoint', {read: ViewContainerRef, static: true })
  public insertionPoint: ViewContainerRef;

  ngOnInit() {
  }

  createElement(config) {
    this.element = document.createElement(config.tag);

    this.element.label = config.label;
    this.insertionPoint.element.nativeElement.append(this.element);

  }
}
