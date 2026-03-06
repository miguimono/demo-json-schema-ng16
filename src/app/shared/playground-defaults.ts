import {
  ImageFit,
  ImageShape,
  LayoutAlign,
  SchemaSettings,
} from '@miguimono/json-schema/ng16';
import {
  getFullSchemaDefaults,
  toSchemaSettings,
} from './schema-settings-defaults';

export const JSON_TITLE_KEYS = ['title'];

export const LABEL_DATA: Record<string, string> = {
  title: 'TITULO',
  subtitle: 'SUBTITULO',
};

export function buildInitialSettings(): SchemaSettings {
  const base = getFullSchemaDefaults();
  const settings = toSchemaSettings(base);

  return {
    messages: settings.messages,
    colors: {
      ...settings.colors,
      accentByKey: 'isTrue',
      accentFill: true,
      showColorTrue: true,
      showColorFalse: true,
      showColorNull: true,
    },
    layout: {
      ...settings.layout,
      layoutAlign: 'center' as LayoutAlign,
    },
    viewport: {
      ...settings.viewport,
    },
    dataView: {
      ...settings.dataView,
      titleKeyPriority: JSON_TITLE_KEYS,
      labelData: LABEL_DATA,
      hiddenKeysGlobal: [],
      noWrapKeys: [],
      showImage: 'img',
      imageSizePx: 32,
      imageShape: 'square' as ImageShape,
      imageFit: 'contain' as ImageFit,
      valueShowTooltip: true,
      valueMaxChars: 50,
      allowCardTextSelection: false,
      showCopyAllButton: false,
    },
  };
}
