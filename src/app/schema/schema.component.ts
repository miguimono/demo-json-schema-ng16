import {
  ImageFit,
  ImageShape,
  SchemaSettings,
} from '@miguimono/json-schema/ng16';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core';
import { environment } from '../../environments/environment';
import { getFullSchemaDefaults } from '../shared/schema-settings-defaults';

const FULL_DEFAULTS = getFullSchemaDefaults();

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchemaComponent {
  readonly showJsonDebugSection = environment.schemaDebug.showJsonSection;
  readonly showSchemaInputsDebugSection =
    environment.schemaDebug.showSchemaInputsSection;

  @Input() id: number | string | null = null;
  @Input() schemeData: unknown = null;
  @Input() schemaSettings: SchemaSettings | null = null;

  @Input() showLegend = true;
  @Input() legendTitle = 'Leyenda de colores';

  @Input() isLoading = FULL_DEFAULTS.messages.isLoading;
  @Input() isError = FULL_DEFAULTS.messages.isError;
  @Input() emptyMessage = FULL_DEFAULTS.messages.emptyMessage;
  @Input() loadingMessage = FULL_DEFAULTS.messages.loadingMessage;
  @Input() errorMessage = FULL_DEFAULTS.messages.errorMessage;

  @Input() linkStroke = FULL_DEFAULTS.colors.linkStroke;
  @Input() linkStrokeWidth = FULL_DEFAULTS.colors.linkStrokeWidth;
  @Input() accentByKey: string | null = FULL_DEFAULTS.colors.accentByKey;
  @Input() accentInverse = FULL_DEFAULTS.colors.accentInverse;
  @Input() accentFill = FULL_DEFAULTS.colors.accentFill;
  @Input() showColorTrue = FULL_DEFAULTS.colors.showColorTrue;
  @Input() showColorFalse = FULL_DEFAULTS.colors.showColorFalse;
  @Input() showColorNull = FULL_DEFAULTS.colors.showColorNull;
  @Input() colorTrue = FULL_DEFAULTS.colors.colorTrue;
  @Input() colorFalse = FULL_DEFAULTS.colors.colorFalse;
  @Input() colorNull = FULL_DEFAULTS.colors.colorNull;

  @Input() descriptionShowColorTrue: string | null = null;
  @Input() descriptionShowColorFalse: string | null = null;
  @Input() descriptionShowColorNull: string | null = null;

  @Input() layoutDirection: 'RIGHT' | 'DOWN' =
    FULL_DEFAULTS.layout.layoutDirection;
  @Input() layoutAlign: 'firstChild' | 'center' =
    FULL_DEFAULTS.layout.layoutAlign;
  @Input() linkStyle: 'curve' | 'orthogonal' | 'line' =
    FULL_DEFAULTS.layout.linkStyle;
  @Input() curveTension = FULL_DEFAULTS.layout.curveTension;
  @Input() straightThresholdDx = FULL_DEFAULTS.layout.straightThresholdDx;
  @Input() columnGapPx = FULL_DEFAULTS.layout.columnGapPx;
  @Input() rowGapPx = FULL_DEFAULTS.layout.rowGapPx;

  @Input() viewportHeight: number | null = FULL_DEFAULTS.viewport.height;
  @Input() minViewportHeight: number | null = FULL_DEFAULTS.viewport.minHeight;
  @Input() showToolbar = FULL_DEFAULTS.viewport.showToolbar;
  @Input() toolbarShowLinkStyle =
    FULL_DEFAULTS.viewport.toolbarControls.showLinkStyle;
  @Input() toolbarShowLayoutAlign =
    FULL_DEFAULTS.viewport.toolbarControls.showLayoutAlign;
  @Input() toolbarShowLayoutDirection =
    FULL_DEFAULTS.viewport.toolbarControls.showLayoutDirection;

  @Input() jsonTitleKeys: string[] = FULL_DEFAULTS.dataView.titleKeyPriority;
  @Input() hiddenKeysGlobal: string[] = FULL_DEFAULTS.dataView.hiddenKeysGlobal;
  @Input() treatScalarArraysAsAttribute =
    FULL_DEFAULTS.dataView.treatScalarArraysAsAttribute;
  @Input() maxDepth: number | null = FULL_DEFAULTS.dataView.maxDepth;
  @Input() labelData: Record<string, string> = FULL_DEFAULTS.dataView.labelData;
  @Input() previewMaxKeys = FULL_DEFAULTS.dataView.previewMaxKeys;
  @Input() valueMaxChars: number | null = FULL_DEFAULTS.dataView.valueMaxChars;
  @Input() valueShowTooltip = FULL_DEFAULTS.dataView.valueShowTooltip;
  @Input() noWrapKeys: string[] = FULL_DEFAULTS.dataView.noWrapKeys;
  @Input() maxCardWidth: number | null = FULL_DEFAULTS.dataView.maxCardWidth;
  @Input() maxCardHeight: number | null = FULL_DEFAULTS.dataView.maxCardHeight;
  @Input() defaultNodeWidth = FULL_DEFAULTS.dataView.defaultNodeSize.width;
  @Input() defaultNodeHeight = FULL_DEFAULTS.dataView.defaultNodeSize.height;

  @Input() showImage: string | null = FULL_DEFAULTS.dataView.showImage;
  @Input() imageSizePx = FULL_DEFAULTS.dataView.imageSizePx;
  @Input() imageShape: ImageShape = FULL_DEFAULTS.dataView.imageShape;
  @Input() imageBorder = FULL_DEFAULTS.dataView.imageBorder;
  @Input() imageBg: string | null = FULL_DEFAULTS.dataView.imageBg;
  @Input() imageFit: ImageFit = FULL_DEFAULTS.dataView.imageFit;
  @Input() imageFallback: string | null = FULL_DEFAULTS.dataView.imageFallback;

  @Input() enableCollapse = FULL_DEFAULTS.dataView.enableCollapse;
  @Input() allowCardTextSelection =
    FULL_DEFAULTS.dataView.allowCardTextSelection;
  @Input() showCopyAllButton = FULL_DEFAULTS.dataView.showCopyAllButton;
  @Input() autoResizeCards = FULL_DEFAULTS.dataView.autoResizeCards;
  @Input() paddingWidthPx = FULL_DEFAULTS.dataView.paddingWidthPx;
  @Input() paddingHeightPx = FULL_DEFAULTS.dataView.paddingHeightPx;

  @Input() cardTemplate: TemplateRef<any> | null = null;

  get legendVisible(): boolean {
    if (!this.showLegend) return false;
    return [
      this.descriptionShowColorTrue,
      this.descriptionShowColorFalse,
      this.descriptionShowColorNull,
    ].some((text) => !!text);
  }

  get effectiveAccentByKey(): string | null {
    return this.resolvedSettings.colors?.accentByKey ?? null;
  }

  get effectiveAccentInverse(): boolean {
    return this.resolvedSettings.colors?.accentInverse ?? false;
  }

  get legendItems(): { color: 'green' | 'red' | 'grey'; text: string }[] {
    const items: { color: 'green' | 'red' | 'grey'; text: string }[] = [];
    const inv = this.effectiveAccentInverse;

    const tTrue = this.descriptionShowColorTrue;
    const tFalse = this.descriptionShowColorFalse;
    const tNull = this.descriptionShowColorNull;

    const greenText = inv ? tFalse : tTrue;
    const redText = inv ? tTrue : tFalse;

    if (greenText) items.push({ color: 'green', text: greenText });
    if (redText) items.push({ color: 'red', text: redText });
    if (tNull) items.push({ color: 'grey', text: tNull });

    return items;
  }

  get legendColorMap(): Record<'green' | 'red' | 'grey', string> {
    const colors = this.resolvedSettings.colors;
    return {
      green: colors?.colorTrue ?? FULL_DEFAULTS.colors.colorTrue,
      red: colors?.colorFalse ?? FULL_DEFAULTS.colors.colorFalse,
      grey: colors?.colorNull ?? FULL_DEFAULTS.colors.colorNull,
    };
  }

  get legacySettings(): SchemaSettings {
    return {
      messages: {
        isLoading: this.isLoading,
        isError: this.isError,
        emptyMessage: this.emptyMessage,
        loadingMessage: this.loadingMessage,
        errorMessage: this.errorMessage,
      },
      colors: {
        linkStroke: this.linkStroke,
        linkStrokeWidth: this.linkStrokeWidth,
        accentByKey: this.accentByKey,
        accentFill: this.accentFill,
        accentInverse: this.accentInverse,
        showColorTrue: this.showColorTrue,
        showColorFalse: this.showColorFalse,
        showColorNull: this.showColorNull,
        colorTrue: this.colorTrue,
        colorFalse: this.colorFalse,
        colorNull: this.colorNull,
      },
      layout: {
        layoutDirection: this.layoutDirection,
        layoutAlign: this.layoutAlign,
        linkStyle: this.linkStyle,
        curveTension: this.curveTension,
        straightThresholdDx: this.straightThresholdDx,
        columnGapPx: this.columnGapPx,
        rowGapPx: this.rowGapPx,
      },
      viewport: {
        height: this.viewportHeight ?? undefined,
        minHeight: this.minViewportHeight ?? undefined,
        showToolbar: this.showToolbar,
        toolbarControls: {
          showLinkStyle: this.toolbarShowLinkStyle,
          showLayoutAlign: this.toolbarShowLayoutAlign,
          showLayoutDirection: this.toolbarShowLayoutDirection,
        },
      },
      dataView: {
        titleKeyPriority: this.jsonTitleKeys,
        hiddenKeysGlobal: this.hiddenKeysGlobal,
        treatScalarArraysAsAttribute: this.treatScalarArraysAsAttribute,
        maxDepth: this.maxDepth,
        labelData: this.labelData,
        previewMaxKeys: this.previewMaxKeys,
        valueMaxChars: this.valueMaxChars,
        valueShowTooltip: this.valueShowTooltip,
        noWrapKeys: this.noWrapKeys,
        maxCardWidth: this.maxCardWidth,
        maxCardHeight: this.maxCardHeight,
        defaultNodeSize: {
          width: this.defaultNodeWidth,
          height: this.defaultNodeHeight,
        },
        showImage: this.showImage,
        imageSizePx: this.imageSizePx,
        imageShape: this.imageShape,
        imageBorder: this.imageBorder,
        imageBg: this.imageBg,
        imageFit: this.imageFit,
        imageFallback: this.imageFallback,
        enableCollapse: this.enableCollapse,
        allowCardTextSelection: this.allowCardTextSelection,
        showCopyAllButton: this.showCopyAllButton,
        autoResizeCards: this.autoResizeCards,
        paddingWidthPx: this.paddingWidthPx,
        paddingHeightPx: this.paddingHeightPx,
      },
    };
  }

  get resolvedSettings(): SchemaSettings {
    return this.schemaSettings ?? this.legacySettings;
  }

  get debugDataJson(): string {
    return this.stringifySafe(this.schemeData);
  }

  get debugSchemaInputsJson(): string {
    return this.stringifySafe({
      settings: this.resolvedSettings,
      cardTemplate: this.cardTemplate ? '[TemplateRef provided]' : null,
    });
  }

  trackLegendItem(
    _index: number,
    item: { color: 'green' | 'red' | 'grey'; text: string },
  ): string {
    return `${item.color}:${item.text}`;
  }

  private stringifySafe(value: unknown): string {
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return '[No se pudo serializar el contenido]';
    }
  }
}
