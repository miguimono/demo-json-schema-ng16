import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-module',
  templateUrl: './title-module.component.html',
  styleUrls: ['./title-module.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleModuleComponent {
  @Input() title = 'JsonSchema-ng16';
  @Input() subtitle = '';
}
