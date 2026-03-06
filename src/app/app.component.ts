import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SchemaSettings } from '@miguimono/json-schema/ng16';
import { DEFAULT_SCHEMA_DATA } from './data/default-schema-data';
import { buildInitialSettings } from './shared/playground-defaults';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  isBrowser: boolean;
  title = 'json-schema-ng16';

  defaultJsonObject = structuredClone(DEFAULT_SCHEMA_DATA);
  renderData: unknown = structuredClone(DEFAULT_SCHEMA_DATA);

  schemaTitle = 'JsonSchema-ng16';
  schemaLibraryVersion = '2.2.0';
  settingsFormModel: SchemaSettings = buildInitialSettings();

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  onSettingsChange(settings: SchemaSettings): void {
    this.settingsFormModel = settings;
  }

  onRenderDataChange(data: unknown): void {
    this.renderData = data;
  }
}
