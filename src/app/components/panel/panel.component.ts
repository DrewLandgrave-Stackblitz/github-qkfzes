import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'advtech-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  private internalPanelTitle: string;
  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  set label(title: string) {
    this.internalPanelTitle = title;
  }

  get label(): string {
    return this.internalPanelTitle;
  }

  @Input()
  doFoo() {
    console.log('we did it');
  }
}
