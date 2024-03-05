import { Component } from '@angular/core';
import { ToggleView } from './shared/enums/toggle-view.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JMP';

  public toggleViewSelectedFromParent: ToggleView = ToggleView.GRID;

  public toggleView(view: ToggleView): void {
    this.toggleViewSelectedFromParent = view;
    console.log(view);
  }
}
