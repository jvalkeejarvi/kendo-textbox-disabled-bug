import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public readonly formControl = new FormControl('test value');

  public constructor() {
    this.formControl.disable();
  }

  public toggle(): void {
    this.formControl.enabled
      ? this.formControl.disable()
      : this.formControl.enable()
    ;
  }
}
