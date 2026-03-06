import {
  DEFAULT_SETTINGS,
  ImageFit,
  ImageShape,
  SchemaSettings,
} from '@miguimono/json-schema/ng16';

export interface FullSchemaDefaults {
  messages: {
    isLoading: boolean;
    isError: boolean;
    emptyMessage: string;
    loadingMessage: string;
    errorMessage: string;
  };
  colors: {
    linkStroke: string;
    linkStrokeWidth: number;
    accentByKey: string | null;
    accentInverse: boolean;
    accentFill: boolean;
    showColorTrue: boolean;
    showColorFalse: boolean;
    showColorNull: boolean;
    colorTrue: string;
    colorFalse: string;
    colorNull: string;
  };
  layout: {
    layoutDirection: 'RIGHT' | 'DOWN';
    layoutAlign: 'firstChild' | 'center';
    linkStyle: 'curve' | 'orthogonal' | 'line';
    curveTension: number;
    straightThresholdDx: number;
    columnGapPx: number;
    rowGapPx: number;
  };
  viewport: {
    height: number;
    minHeight: number;
    showToolbar: boolean;
    toolbarControls: {
      showLinkStyle: boolean;
      showLayoutAlign: boolean;
      showLayoutDirection: boolean;
    };
  };
  dataView: {
    titleKeyPriority: string[];
    hiddenKeysGlobal: string[];
    treatScalarArraysAsAttribute: boolean;
    maxDepth: number | null;
    labelData: Record<string, string>;
    previewMaxKeys: number;
    valueMaxChars: number | null;
    valueShowTooltip: boolean;
    noWrapKeys: string[];
    maxCardWidth: number | null;
    maxCardHeight: number | null;
    defaultNodeSize: {
      width: number;
      height: number;
    };
    showImage: string | null;
    imageSizePx: number;
    imageShape: ImageShape;
    imageBorder: boolean;
    imageBg: string | null;
    imageFit: ImageFit;
    imageFallback: string | null;
    enableCollapse: boolean;
    allowCardTextSelection: boolean;
    showCopyAllButton: boolean;
    autoResizeCards: boolean;
    paddingWidthPx: number;
    paddingHeightPx: number;
  };
}

export function getFullSchemaDefaults(): FullSchemaDefaults {
  return {
    messages: {
      isLoading: DEFAULT_SETTINGS.messages?.isLoading ?? false,
      isError: DEFAULT_SETTINGS.messages?.isError ?? false,
      emptyMessage:
        DEFAULT_SETTINGS.messages?.emptyMessage ?? 'No hay datos para mostrar',
      loadingMessage: DEFAULT_SETTINGS.messages?.loadingMessage ?? 'Cargando…',
      errorMessage:
        DEFAULT_SETTINGS.messages?.errorMessage ?? 'Error al cargar el esquema',
    },
    colors: {
      linkStroke: DEFAULT_SETTINGS.colors?.linkStroke ?? '#019df4',
      linkStrokeWidth: DEFAULT_SETTINGS.colors?.linkStrokeWidth ?? 2,
      accentByKey: DEFAULT_SETTINGS.colors?.accentByKey ?? null,
      accentInverse: DEFAULT_SETTINGS.colors?.accentInverse ?? false,
      accentFill: DEFAULT_SETTINGS.colors?.accentFill ?? false,
      showColorTrue: DEFAULT_SETTINGS.colors?.showColorTrue ?? false,
      showColorFalse: DEFAULT_SETTINGS.colors?.showColorFalse ?? false,
      showColorNull: DEFAULT_SETTINGS.colors?.showColorNull ?? false,
      colorTrue: DEFAULT_SETTINGS.colors?.colorTrue ?? '#16a34a',
      colorFalse: DEFAULT_SETTINGS.colors?.colorFalse ?? '#dc2626',
      colorNull: DEFAULT_SETTINGS.colors?.colorNull ?? '#6b7280',
    },
    layout: {
      layoutDirection: DEFAULT_SETTINGS.layout?.layoutDirection ?? 'RIGHT',
      layoutAlign: DEFAULT_SETTINGS.layout?.layoutAlign ?? 'firstChild',
      linkStyle: DEFAULT_SETTINGS.layout?.linkStyle ?? 'curve',
      curveTension: DEFAULT_SETTINGS.layout?.curveTension ?? 30,
      straightThresholdDx: DEFAULT_SETTINGS.layout?.straightThresholdDx ?? 60,
      columnGapPx: DEFAULT_SETTINGS.layout?.columnGapPx ?? 64,
      rowGapPx: DEFAULT_SETTINGS.layout?.rowGapPx ?? 32,
    },
    viewport: {
      height: DEFAULT_SETTINGS.viewport?.height ?? 800,
      minHeight: DEFAULT_SETTINGS.viewport?.minHeight ?? 480,
      showToolbar: DEFAULT_SETTINGS.viewport?.showToolbar ?? true,
      toolbarControls: {
        showLinkStyle:
          DEFAULT_SETTINGS.viewport?.toolbarControls?.showLinkStyle ?? true,
        showLayoutAlign:
          DEFAULT_SETTINGS.viewport?.toolbarControls?.showLayoutAlign ?? true,
        showLayoutDirection:
          DEFAULT_SETTINGS.viewport?.toolbarControls?.showLayoutDirection ??
          true,
      },
    },
    dataView: {
      titleKeyPriority: DEFAULT_SETTINGS.dataView?.titleKeyPriority ?? [],
      hiddenKeysGlobal: DEFAULT_SETTINGS.dataView?.hiddenKeysGlobal ?? [],
      treatScalarArraysAsAttribute:
        DEFAULT_SETTINGS.dataView?.treatScalarArraysAsAttribute ?? true,
      maxDepth: DEFAULT_SETTINGS.dataView?.maxDepth ?? null,
      labelData: DEFAULT_SETTINGS.dataView?.labelData ?? {},
      previewMaxKeys: DEFAULT_SETTINGS.dataView?.previewMaxKeys ?? 999,
      valueMaxChars: DEFAULT_SETTINGS.dataView?.valueMaxChars ?? null,
      valueShowTooltip: DEFAULT_SETTINGS.dataView?.valueShowTooltip ?? false,
      noWrapKeys: DEFAULT_SETTINGS.dataView?.noWrapKeys ?? [],
      maxCardWidth: DEFAULT_SETTINGS.dataView?.maxCardWidth ?? null,
      maxCardHeight: DEFAULT_SETTINGS.dataView?.maxCardHeight ?? null,
      defaultNodeSize: {
        width: DEFAULT_SETTINGS.dataView?.defaultNodeSize?.width ?? 256,
        height: DEFAULT_SETTINGS.dataView?.defaultNodeSize?.height ?? 64,
      },
      showImage: DEFAULT_SETTINGS.dataView?.showImage ?? null,
      imageSizePx: DEFAULT_SETTINGS.dataView?.imageSizePx ?? 32,
      imageShape:
        DEFAULT_SETTINGS.dataView?.imageShape ?? ('rounded' as ImageShape),
      imageBorder: DEFAULT_SETTINGS.dataView?.imageBorder ?? false,
      imageBg: DEFAULT_SETTINGS.dataView?.imageBg ?? 'transparent',
      imageFit: DEFAULT_SETTINGS.dataView?.imageFit ?? ('contain' as ImageFit),
      imageFallback: DEFAULT_SETTINGS.dataView?.imageFallback ?? null,
      enableCollapse: DEFAULT_SETTINGS.dataView?.enableCollapse ?? true,
      allowCardTextSelection:
        DEFAULT_SETTINGS.dataView?.allowCardTextSelection ?? true,
      showCopyAllButton: DEFAULT_SETTINGS.dataView?.showCopyAllButton ?? false,
      autoResizeCards: DEFAULT_SETTINGS.dataView?.autoResizeCards ?? true,
      paddingWidthPx: DEFAULT_SETTINGS.dataView?.paddingWidthPx ?? 16,
      paddingHeightPx: DEFAULT_SETTINGS.dataView?.paddingHeightPx ?? 0,
    },
  };
}

export function toSchemaSettings(defaults: FullSchemaDefaults): SchemaSettings {
  return {
    messages: { ...defaults.messages },
    colors: { ...defaults.colors },
    layout: { ...defaults.layout },
    viewport: {
      height: defaults.viewport.height,
      minHeight: defaults.viewport.minHeight,
      showToolbar: defaults.viewport.showToolbar,
      toolbarControls: { ...defaults.viewport.toolbarControls },
    },
    dataView: {
      ...defaults.dataView,
      titleKeyPriority: [...defaults.dataView.titleKeyPriority],
      hiddenKeysGlobal: [...defaults.dataView.hiddenKeysGlobal],
      noWrapKeys: [...defaults.dataView.noWrapKeys],
      labelData: { ...defaults.dataView.labelData },
      defaultNodeSize: { ...defaults.dataView.defaultNodeSize },
    },
  };
}
