import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SchemaSettings } from '@miguimono/json-schema/ng16';
import { buildInitialSettings } from '../shared/playground-defaults';
import { getSchemaSettingTooltip } from '../shared/schema-settings-docs';

@Component({
  selector: 'app-config-banner',
  templateUrl: './config-banner.component.html',
  styleUrls: ['./config-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigBannerComponent implements OnInit, OnChanges {
  @Input({ required: true }) defaultJsonObject!: unknown;

  @Output() renderDataChange = new EventEmitter<unknown>();
  @Output() schemaSettingsChange = new EventEmitter<SchemaSettings>();

  jsonMode: 'custom' | 'default' = 'custom';
  jsonError: string | null = null;
  isSidebarOpenMobile = false;

  defaultJsonText = '[]';
  editorJsonText = '[]';

  settingsFormModel: SchemaSettings = buildInitialSettings();
  settingsErrors: Record<string, string> = {};

  titleKeyPriorityText = '';
  hiddenKeysGlobalText = '';
  noWrapKeysText = '';
  labelDataText = '';

  ngOnInit(): void {
    this.initializeState();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['defaultJsonObject'] &&
      !changes['defaultJsonObject'].firstChange
    ) {
      this.initializeState();
    }
  }

  help(key: string): string {
    return getSchemaSettingTooltip(key);
  }

  setJsonMode(mode: 'custom' | 'default'): void {
    this.jsonMode = mode;
    this.jsonError = null;
    if (mode === 'default') {
      this.editorJsonText = this.defaultJsonText;
      this.renderDataChange.emit(this.cloneDefaultData());
    }
  }

  onJsonTextInput(event: Event): void {
    if (this.jsonMode === 'default') return;
    this.editorJsonText = this.getValue(event);
  }

  applyJsonFromEditor(): void {
    if (this.jsonMode === 'default') {
      this.jsonError = null;
      this.renderDataChange.emit(this.cloneDefaultData());
      return;
    }

    try {
      const parsed = JSON.parse(this.editorJsonText);
      this.jsonError = null;
      this.renderDataChange.emit(parsed);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Error desconocido';
      this.jsonError = `JSON inválido: ${message}`;
    }
  }

  toggleMobileSidebar(): void {
    this.isSidebarOpenMobile = !this.isSidebarOpenMobile;
  }

  closeMobileSidebar(): void {
    this.isSidebarOpenMobile = false;
  }

  resetAllChanges(): void {
    this.initializeState();
  }

  onTextField(
    path: string,
    event: Event,
    options: { nullable?: boolean } = {},
  ): void {
    const raw = this.getValue(event).trim();
    const value = options.nullable && raw === '' ? null : raw;
    this.clearFieldError(path);
    this.patchSettings(path, value);
  }

  onBooleanField(path: string, event: Event): void {
    this.clearFieldError(path);
    this.patchSettings(path, this.getChecked(event));
  }

  onNumberField(
    path: string,
    event: Event,
    config: { min: number; max: number; nullable?: boolean; integer?: boolean },
  ): void {
    const raw = this.getValue(event).trim();
    if (config.nullable && raw === '') {
      this.clearFieldError(path);
      this.patchSettings(path, null);
      return;
    }

    const parsed = Number(raw);
    if (Number.isNaN(parsed)) {
      this.setFieldError(path, 'Debe ser un valor numérico válido.');
      return;
    }

    let value = Math.min(config.max, Math.max(config.min, parsed));
    if (config.integer) {
      value = Math.round(value);
    }

    if (value !== parsed) {
      this.setFieldError(
        path,
        `El valor fue ajustado al rango permitido (${config.min}-${config.max}).`,
      );
    } else {
      this.clearFieldError(path);
    }

    this.patchSettings(path, value);
  }

  onJsonFieldInput(
    path: string,
    editorKey:
      | 'titleKeyPriorityText'
      | 'hiddenKeysGlobalText'
      | 'noWrapKeysText'
      | 'labelDataText',
    kind: 'stringArray' | 'recordString',
    event: Event,
  ): void {
    const text = this.getValue(event);
    this[editorKey] = text;

    try {
      const parsed = JSON.parse(text);

      if (kind === 'stringArray') {
        if (
          !Array.isArray(parsed) ||
          parsed.some((item) => typeof item !== 'string')
        ) {
          this.setFieldError(path, 'Debe ser un arreglo JSON de strings.');
          return;
        }
      }

      if (kind === 'recordString') {
        if (
          typeof parsed !== 'object' ||
          parsed === null ||
          Array.isArray(parsed) ||
          Object.values(parsed).some((value) => typeof value !== 'string')
        ) {
          this.setFieldError(
            path,
            'Debe ser un objeto JSON con valores string.',
          );
          return;
        }
      }

      this.clearFieldError(path);
      this.patchSettings(path, parsed);
    } catch {
      this.setFieldError(path, 'JSON inválido en este campo.');
    }
  }

  getError(path: string): string | null {
    return this.settingsErrors[path] ?? null;
  }

  private initializeState(): void {
    const defaultClone = this.cloneDefaultData();
    this.defaultJsonText = JSON.stringify(defaultClone, null, 2);
    this.editorJsonText = this.defaultJsonText;
    this.jsonMode = 'custom';
    this.jsonError = null;

    this.settingsFormModel = buildInitialSettings();
    this.settingsErrors = {};
    this.syncComplexEditors();

    this.renderDataChange.emit(defaultClone);
    this.schemaSettingsChange.emit(this.settingsFormModel);
  }

  private syncComplexEditors(): void {
    this.titleKeyPriorityText = JSON.stringify(
      this.settingsFormModel.dataView?.titleKeyPriority ?? [],
      null,
      2,
    );
    this.hiddenKeysGlobalText = JSON.stringify(
      this.settingsFormModel.dataView?.hiddenKeysGlobal ?? [],
      null,
      2,
    );
    this.noWrapKeysText = JSON.stringify(
      this.settingsFormModel.dataView?.noWrapKeys ?? [],
      null,
      2,
    );
    this.labelDataText = JSON.stringify(
      this.settingsFormModel.dataView?.labelData ?? {},
      null,
      2,
    );
  }

  private setFieldError(path: string, message: string): void {
    this.settingsErrors = { ...this.settingsErrors, [path]: message };
  }

  private clearFieldError(path: string): void {
    if (!(path in this.settingsErrors)) return;
    const next = { ...this.settingsErrors };
    delete next[path];
    this.settingsErrors = next;
  }

  private patchSettings(path: string, value: unknown): void {
    const keys = path.split('.');
    this.settingsFormModel = this.setByPathImmutable(
      this.settingsFormModel as Record<string, unknown>,
      keys,
      value,
    ) as SchemaSettings;
    this.schemaSettingsChange.emit(this.settingsFormModel);
  }

  private setByPathImmutable(
    source: Record<string, unknown>,
    keys: string[],
    value: unknown,
  ): Record<string, unknown> {
    const key = keys[0]!;
    if (keys.length === 1) {
      return { ...source, [key]: value };
    }

    const current = source[key];
    const nestedSource =
      typeof current === 'object' && current !== null && !Array.isArray(current)
        ? (current as Record<string, unknown>)
        : {};

    return {
      ...source,
      [key]: this.setByPathImmutable(nestedSource, keys.slice(1), value),
    };
  }

  private getValue(event: Event): string {
    const target = event.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | null;
    return target?.value ?? '';
  }

  private getChecked(event: Event): boolean {
    const target = event.target as HTMLInputElement | null;
    return target?.checked ?? false;
  }

  private cloneDefaultData(): unknown {
    return structuredClone(this.defaultJsonObject);
  }
}
