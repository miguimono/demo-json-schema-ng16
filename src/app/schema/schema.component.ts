import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  TemplateRef,
} from '@angular/core';
import {
  ImageFit,
  ImageShape,
  SchemaSettings,
} from '@miguimono/json-schema/ng16';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchemaComponent implements OnChanges {
  // --- Inputs básicos ---
  @Input() title: string = 'json-schema-ng16: ';
  @Input() id: number | string | null = null;
  @Input() schemeData: any | null = null;

  @Input() showLegend: boolean = true;
  @Input() legendTitle: string = 'Leyenda de colores';

  // --- Mensajes ---
  @Input() isLoading: boolean = false;
  @Input() isError: boolean = false;
  @Input() emptyMessage: string = 'No hay datos para mostrar.';
  @Input() loadingMessage: string = 'Cargando json-schema...';
  @Input() errorMessage: string = 'Error al cargar el json-schema.';

  // --- Colores / acentos ---
  @Input() accentByKey: string | null = null;
  @Input() accentInverse: boolean = false;
  @Input() accentFill: boolean = false;
  @Input() showColorTrue: boolean = false;
  @Input() showColorFalse: boolean = false;
  @Input() showColorNull: boolean = false;

  @Input() descriptionShowColorTrue: string | null = null;
  @Input() descriptionShowColorFalse: string | null = null;
  @Input() descriptionShowColorNull: string | null = null;

  // --- Layout ---
  @Input() layoutAlign: 'firstChild' | 'center' = 'center';
  // --- Viewport ---
  @Input() viewportHeight: number | null = 600;
  @Input() minViewportHeight: number | null = 400;
  @Input() showToolbar: boolean = true;

  // --- DataView ---
  @Input() jsonTitleKeys: string[] | undefined;
  @Input() labelData: Record<string, string> | undefined;
  @Input() hiddenKeysGlobal: string[] | undefined;
  @Input() noWrapKeys: string[] | undefined;

  @Input() showImage: string | null = null;
  @Input() imageSizePx: number = 32;
  @Input() imageShape: ImageShape = 'square'; // "square" | "rounded" | "circle"
  @Input() imageBorder: boolean = false;

  @Input() imageBg: string | null = 'transparent';
  @Input() imageFit: ImageFit = 'contain';
  @Input() enableCollapse: boolean = true;

  // --- Template para las cards ---
  @Input() cardTemplate: TemplateRef<any> | null = null;

  settings: SchemaSettings = this.buildSettings();

  /** Se renderiza la leyenda si hay al menos una descripción y no está forzada a ocultarse. */
  get legendVisible(): boolean {
    if (!this.showLegend) return false;
    return !!(
      this.descriptionShowColorTrue ||
      this.descriptionShowColorFalse ||
      this.descriptionShowColorNull
    );
  }

  /**
   * Ítems de leyenda aplicando accentInverse:
   * - accentInverse = false → verde=true, rojo=false.
   * - accentInverse = true  → verde=false, rojo=true.
   * - gris siempre representa null.
   */
  get legendItems(): Array<{
    color: 'green' | 'red' | 'grey';
    text: string;
  }> {
    const items: Array<{ color: 'green' | 'red' | 'grey'; text: string }> = [];
    const inv = this.accentInverse;

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

  ngOnChanges(): void {
    this.settings = this.buildSettings();
  }

  trackLegendItem(
    _index: number,
    item: { color: 'green' | 'red' | 'grey'; text: string }
  ): string {
    return `${item.color}:${item.text}`;
  }

  /** Mapa completo de configuración para el <schema> interno. */

  private buildSettings(): SchemaSettings {
    return {
      messages: {
        isLoading: this.isLoading,
        isError: this.isError,
        emptyMessage: this.emptyMessage,
        loadingMessage: this.loadingMessage,
        errorMessage: this.errorMessage,
      },
      colors: {
        accentByKey: this.accentByKey,
        accentFill: this.accentFill,
        accentInverse: this.accentInverse,
        showColorTrue: this.showColorTrue,
        showColorFalse: this.showColorFalse,
        showColorNull: this.showColorNull,
      },
      layout: {
        layoutAlign: this.layoutAlign,
      },
      viewport: {
        height: this.viewportHeight ?? undefined,
        minHeight: this.minViewportHeight ?? undefined,
        showToolbar: this.showToolbar,
      },
      dataView: {
        titleKeyPriority: this.jsonTitleKeys,
        labelData: this.labelData,
        hiddenKeysGlobal: this.hiddenKeysGlobal,
        noWrapKeys: this.noWrapKeys,
        showImage: this.showImage,
        imageSizePx: this.imageSizePx,
        imageShape: this.imageShape,
        imageBorder: this.imageBorder,
        imageBg: this.imageBg,
        imageFit: this.imageFit,
        enableCollapse: this.enableCollapse,
        autoResizeCards: true,
      },
    };
  }
}
