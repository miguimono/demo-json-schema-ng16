export type SchemaSettingPath = string;

export interface SchemaSettingDocItem {
  type: string;
  description: string;
  example?: string;
  notes?: string;
}

export const SCHEMA_SETTINGS_DOCS: Record<
  SchemaSettingPath,
  SchemaSettingDocItem
> = {
  'messages.isLoading': {
    type: 'boolean',
    description: 'Forzar overlay de cargando.',
    example: 'true',
  },
  'messages.isError': {
    type: 'boolean',
    description: 'Forzar overlay de error.',
    example: 'false',
  },
  'messages.loadingMessage': {
    type: 'string',
    description: 'Texto del overlay de carga.',
    example: '"Cargando…"',
  },
  'messages.errorMessage': {
    type: 'string',
    description: 'Texto del overlay de error.',
    example: '"Error al cargar el esquema"',
  },
  'messages.emptyMessage': {
    type: 'string',
    description: 'Texto del overlay sin datos.',
    example: '"No hay datos para mostrar"',
  },

  'colors.linkStroke': {
    type: 'string',
    description: 'Color del trazo de aristas (CSS color).',
    example: '"#019df4"',
  },
  'colors.linkStrokeWidth': {
    type: 'number',
    description: 'Grosor del trazo de aristas en px.',
    example: '2',
  },
  'colors.accentByKey': {
    type: 'string | null',
    description: 'Clave booleana en node.data para acentuar cards.',
    example: '"in_damage" o null',
  },
  'colors.accentInverse': {
    type: 'boolean',
    description: 'Invierte la semantica de acentos (true ↔ false).',
    example: 'false',
  },
  'colors.accentFill': {
    type: 'boolean',
    description: 'Aplica relleno adicional segun el valor del acento.',
    example: 'true',
  },
  'colors.showColorTrue': {
    type: 'boolean',
    description: 'Habilita color para valor true.',
    example: 'true',
  },
  'colors.showColorFalse': {
    type: 'boolean',
    description: 'Habilita color para valor false.',
    example: 'true',
  },
  'colors.showColorNull': {
    type: 'boolean',
    description: 'Habilita color para valor null.',
    example: 'true',
  },
  'colors.colorTrue': {
    type: 'string',
    description:
      'Color base para visuales de true (texto, borde y sombras derivadas).',
    example: '"#16a34a"',
  },
  'colors.colorFalse': {
    type: 'string',
    description:
      'Color base para visuales de false (texto, borde y sombras derivadas).',
    example: '"#dc2626"',
  },
  'colors.colorNull': {
    type: 'string',
    description:
      'Color base para visuales de null (texto, borde y sombras derivadas).',
    example: '"#6b7280"',
  },

  'layout.layoutDirection': {
    type: '"RIGHT" | "DOWN"',
    description: 'Direccion del layout del grafo.',
    example: '"RIGHT"',
  },
  'layout.layoutAlign': {
    type: '"firstChild" | "center"',
    description: 'Alineacion del padre respecto a sus hijos.',
    example: '"center"',
  },
  'layout.linkStyle': {
    type: '"curve" | "orthogonal" | "line"',
    description: 'Estilo visual de las aristas.',
    example: '"orthogonal"',
  },
  'layout.curveTension': {
    type: 'number',
    description: 'Tension para curvas en px.',
    example: '80',
    notes: 'Rango sugerido: 20-200.',
  },
  'layout.straightThresholdDx': {
    type: 'number',
    description: 'Umbral en px para renderizar curva como linea.',
    example: '60',
  },
  'layout.columnGapPx': {
    type: 'number',
    description: 'Separacion horizontal entre columnas en px.',
    example: '64',
  },
  'layout.rowGapPx': {
    type: 'number',
    description: 'Separacion vertical entre filas en px.',
    example: '32',
  },

  'dataView.titleKeyPriority': {
    type: 'string[]',
    description: 'Prioridad de claves para titulo del nodo.',
    example: '["name", "title", "id"]',
  },
  'dataView.hiddenKeysGlobal': {
    type: 'string[]',
    description: 'Claves globales a ocultar en atributos de preview.',
    example: '["_internal", "password"]',
  },
  'dataView.noWrapKeys': {
    type: 'string[]',
    description: 'Claves que no deben romper linea (nowrap).',
    example: '["id", "hash", "uuid"]',
  },
  'dataView.labelData': {
    type: 'Record<string, string>',
    description: 'Mapa de clave a etiqueta legible para UI.',
    example: '{"first_name": "Nombre", "last_name": "Apellido"}',
  },
  'dataView.treatScalarArraysAsAttribute': {
    type: 'boolean',
    description: 'Muestra arrays escalares como atributo (join).',
    example: 'true',
  },
  'dataView.maxDepth': {
    type: 'number | null',
    description: 'Profundidad maxima de exploracion. null = sin limite.',
    example: '3 o null',
  },
  'dataView.previewMaxKeys': {
    type: 'number',
    description: 'Maximo de pares clave/valor por card.',
    example: '999',
  },
  'dataView.valueMaxChars': {
    type: 'number | null',
    description: 'Trunca valores largos al exceder este tamano.',
    example: '50 o null',
  },
  'dataView.valueShowTooltip': {
    type: 'boolean',
    description: 'Muestra tooltip con valor completo cuando hay truncado.',
    example: 'true',
  },
  'dataView.maxCardWidth': {
    type: 'number | null',
    description: 'Ancho maximo de card en px.',
    example: '380 o null',
  },
  'dataView.maxCardHeight': {
    type: 'number | null',
    description: 'Alto maximo de card en px.',
    example: '600 o null',
  },
  'dataView.defaultNodeSize.width': {
    type: 'number',
    description: 'Ancho base del nodo en px.',
    example: '256',
  },
  'dataView.defaultNodeSize.height': {
    type: 'number',
    description: 'Alto base del nodo en px.',
    example: '64',
  },
  'dataView.showImage': {
    type: 'string | null',
    description: 'Clave que contiene la URL de imagen en node.data.',
    example: '"avatarUrl" o null',
  },
  'dataView.imageSizePx': {
    type: 'number',
    description: 'Tamano de miniatura en px.',
    example: '32',
  },
  'dataView.imageShape': {
    type: '"square" | "rounded" | "circle"',
    description: 'Forma de la miniatura de imagen.',
    example: '"rounded"',
  },
  'dataView.imageBorder': {
    type: 'boolean',
    description: 'Dibuja borde sutil alrededor de miniatura.',
    example: 'false',
  },
  'dataView.imageBg': {
    type: 'string | null',
    description: 'Color/fondo CSS para miniatura.',
    example: '"transparent"',
  },
  'dataView.imageFit': {
    type: '"contain" | "cover" | "scale-down"',
    description: 'Ajuste de imagen (object-fit).',
    example: '"contain"',
  },
  'dataView.imageFallback': {
    type: 'string | null',
    description: 'URL/path de imagen fallback si falla la principal.',
    example: '"assets/comingSoon.png" o null',
  },
  'dataView.enableCollapse': {
    type: 'boolean',
    description: 'Habilita colapso/expansion de nodos.',
    example: 'true',
  },
  'dataView.allowCardTextSelection': {
    type: 'boolean',
    description: 'Permite seleccion de texto dentro de card.',
    example: 'true',
  },
  'dataView.showCopyAllButton': {
    type: 'boolean',
    description: 'Muestra boton Copiar en cada card.',
    example: 'false',
  },
  'dataView.autoResizeCards': {
    type: 'boolean',
    description: 'Recalcula tamano de cards segun contenido.',
    example: 'true',
  },
  'dataView.paddingWidthPx': {
    type: 'number',
    description: 'Ancho extra en px al medir cards.',
    example: '16',
  },
  'dataView.paddingHeightPx': {
    type: 'number',
    description: 'Alto extra en px al medir cards.',
    example: '0',
  },

  'viewport.height': {
    type: 'number',
    description: 'Alto del viewport en px.',
    example: '800',
  },
  'viewport.minHeight': {
    type: 'number',
    description: 'Alto minimo del viewport en px.',
    example: '480',
  },
  'viewport.showToolbar': {
    type: 'boolean',
    description: 'Muestra/oculta la toolbar.',
    example: 'true',
  },
  'viewport.toolbarControls.showLinkStyle': {
    type: 'boolean',
    description: 'Muestra selector de estilo de enlace en toolbar.',
    example: 'true',
  },
  'viewport.toolbarControls.showLayoutAlign': {
    type: 'boolean',
    description: 'Muestra selector de alineacion en toolbar.',
    example: 'true',
  },
  'viewport.toolbarControls.showLayoutDirection': {
    type: 'boolean',
    description: 'Muestra selector de direccion en toolbar.',
    example: 'true',
  },
};

export function getSchemaSettingTooltip(path: SchemaSettingPath): string {
  const doc = SCHEMA_SETTINGS_DOCS[path];
  if (!doc) {
    return `Campo: ${path}`;
  }

  const lines = [
    `Campo: ${path}`,
    `Tipo: ${doc.type}`,
    `Descripcion: ${doc.description}`,
  ];

  if (doc.example) {
    lines.push(`Ejemplo: ${doc.example}`);
  }

  if (doc.notes) {
    lines.push(`Notas: ${doc.notes}`);
  }

  return lines.join('\n');
}
