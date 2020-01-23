import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomComponent } from 'src/app/interfaces/custom-component.interface';

@Component({
  selector: 'advtech-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, CustomComponent {
  
  @ViewChild('insertionPoint', { read: ViewContainerRef, static: true })
  @Input() public insertionPoint: ViewContainerRef;

  @Input() label = '';

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  createChild(config) {
    const element = document.createElement(config.tag);

    element.label = config.label;
    this.insertionPoint.element.nativeElement.append(element);
  }
}
