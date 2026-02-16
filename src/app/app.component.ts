import { ChangeDetectionStrategy, Component } from '@angular/core';
export const JSON_TITLE_KEYS = ['title']; // Elementos que seran titulos
export const LABEL_DATA = {
  title: 'TITULO',
  subtitle: 'SUBTITULO',
}; // Datos a traducir
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly title = 'json-schema-ng16';
  data = [
    {
      jsonSchema: 'json-schema-ng16',
      data: {
        level: 'nivel 0',
        title: 'Árbol de Prueba',
        subtitle:
          'Dataset jerárquico con banderas, textos y variación de estructura',
        isTrue: true,
        isFalse: false,
        isNull: null,
        children: [
          {
            level: 'Nivel 1',
            info: 'Información adicional del nivel 1',
            title: 'Fundamentos',
            subtitle: 'Conceptos base de IA',
            priority: 1,
            isTrue: true,
            children: [
              {
                level: 'Nivel 1.1',
                info: 'Información adicional del nivel 1.1',
                img: 'assets/img.png',
                children: [
                  {
                    level: 'Nivel 1.1.1',
                    info: 'Información adicional del nivel 1.1.1',
                    title: 'Modelos y entrenamiento',
                    subtitle: 'De datos a predicciones',
                    params: {
                      learningRate: 0.0003,
                      batchSize: 32,
                      epochs: 3,
                      seed: 12345,
                      isNull: null,
                    },
                    children: [
                      {
                        level: 'Nivel 1.1.1.1',
                        info: 'Información adicional del nivel 1.1.1.1',
                        textLong:
                          'Texto largo de prueba: en un flujo real de IA, este nodo podría contener una explicación extensa sobre el proceso de entrenamiento, la importancia del preprocesamiento, el balance de clases, el overfitting, y el monitoreo de métricas. Este texto sirve para probar scroll, wrap, truncado y performance. Incluye números (123456), símbolos (@#%&), y saltos de línea.\nLínea 2: más contenido.\nLínea 3: aún más contenido para forzar render.',
                        isFalse: false,
                        children: [
                          {
                            level: 'Nivel 1.1.1.1.1',
                            info: 'Información adicional del nivel 1.1.1.1.1',
                            children: [
                              {
                                level: 'Nivel 1.1.1.1.1.1',
                                info: 'Información adicional del nivel 1.1.1.1.1.1',
                                title: 'Fine-tuning',
                                subtitle: 'Ajuste a dominio específico',
                                isTrue: true,
                              },
                            ],
                          },
                          {
                            level: 'Nivel 1.1.1.1.2',
                            info: 'Información adicional del nivel 1.1.1.1.2',
                            subtitle: 'Validación y control',
                            children: [
                              {
                                level: 'Nivel 1.1.1.1.2.1',
                                info: 'Información adicional del nivel 1.1.1.1.2.1',
                                title: 'Split de datos',
                                subtitle: 'train/val/test',
                                isNull: null,
                                ratios: { train: 0.8, val: 0.1, test: 0.1 },
                              },
                              {
                                level: 'Nivel 1.1.1.1.2.2',
                                info: 'Información adicional del nivel 1.1.1.1.2.2',
                                notesShort: 'Nodo con array vacío intencional.',
                                children: [],
                              },
                            ],
                          },
                          {
                            level: 'Nivel 1.1.1.1.3',
                            info: 'Información adicional del nivel 1.1.1.1.3',
                            title: 'Evaluación',
                            subtitle: 'Métricas, sesgos y reporte',
                            metrics: {
                              accuracy: 0.91,
                              f1: 0.88,
                              precision: 0.9,
                              recall: 0.86,
                              isTrue: true,
                            },
                            children: [
                              {
                                level: 'Nivel 1.1.1.1.3.1',
                                info: 'Información adicional del nivel 1.1.1.1.3.1',
                                notesShort: 'Texto corto.',
                              },
                              {
                                level: 'Nivel 1.1.1.1.3.2',
                                info: 'Información adicional del nivel 1.1.1.1.3.2',
                                textLong:
                                  'Otro texto largo de prueba, no exagerado: sirve para validar cómo tu UI muestra párrafos medianos. Aquí se menciona explicabilidad, fairness, drift, y evaluación continua en producción.',
                              },
                              {
                                level: 'Nivel 1.1.1.1.3.3',
                                info: 'Información adicional del nivel 1.1.1.1.3.3',
                                flags: {
                                  isTrue: true,
                                  isFalse: false,
                                  isNull: null,
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        level: 'Nivel 1.1.1.2',
                        info: 'Información adicional del nivel 1.1.1.2',
                        title: 'Datos',
                        subtitle: 'Calidad y gobierno',
                        children: [
                          {
                            level: 'Nivel 1.1.1.2.1',
                            info: 'Información adicional del nivel 1.1.1.2.1',
                            owner: { name: 'Data Steward', active: true },
                            isTrue: true,
                          },
                          {
                            level: 'Nivel 1.1.1.2.2',
                            info: 'Información adicional del nivel 1.1.1.2.2',
                            children: [],
                            isFalse: false,
                            extra: {
                              source: 'synthetic',
                              piiRisk: 0.0,
                              url: 'https://example.com/datasets/ai',
                            },
                          },
                        ],
                      },
                      {
                        level: 'Nivel 1.1.1.3',
                        info: 'Información adicional del nivel 1.1.1.3',
                        children: [],
                        subtitle: 'Nodo hoja sin hijos',
                        isNull: null,
                      },
                    ],
                  },
                  {
                    level: 'Nivel 1.1.2',
                    info: 'Información adicional del nivel 1.1.2',
                    title: 'Prompting',
                    subtitle: 'Instrucciones y formatos',
                    children: [
                      {
                        level: 'Nivel 1.1.2.1',
                        info: 'Información adicional del nivel 1.1.2.1',
                        examples: [
                          {
                            role: 'system',
                            text: 'Eres un asistente conciso.',
                          },
                          { role: 'user', text: 'Resume este documento.' },
                        ],
                      },
                      {
                        level: 'Nivel 1.1.2.2',
                        info: 'Información adicional del nivel 1.1.2.2',
                        isTrue: true,
                        params: { temperature: 0.2, topP: 0.9 },
                      },
                      {
                        level: 'Nivel 1.1.2.3',
                        info: 'Información adicional del nivel 1.1.2.3',
                        notesShort:
                          'Checklist: claridad, contexto, restricciones.',
                      },
                    ],
                  },
                  {
                    level: 'Nivel 1.1.3',
                    info: 'Información adicional del nivel 1.1.3',
                    children: [],
                    title: 'Embeddings',
                    subtitle: 'Vectorización de texto',
                    isFalse: false,
                  },
                  {
                    level: 'Nivel 1.1.4',
                    info: 'Información adicional del nivel 1.1.4',
                    children: [],
                    notesShort: 'Nodo vacío a propósito',
                    isNull: null,
                  },
                ],
              },
              {
                level: 'Nivel 1.2',
                info: 'Información adicional del nivel 1.2',
                subtitle: 'Modelos generativos',
                children: [
                  {
                    level: 'Nivel 1.2.1',
                    info: 'Información adicional del nivel 1.2.1',
                    title: 'LLMs',
                    subtitle: 'Lenguaje a gran escala',
                    isTrue: true,
                    textLong:
                      'Los LLMs se usan para generación, resumen, extracción y razonamiento asistido. Este texto es moderadamente largo para validar UI.',
                  },
                  {
                    level: 'Nivel 1.2.2',
                    info: 'Información adicional del nivel 1.2.2',
                    title: 'Diffusion',
                    subtitle: 'Modelos para imagen',
                    isFalse: false,
                  },
                ],
              },
            ],
          },
          {
            level: 'Nivel 2',
            info: 'Información adicional del nivel 2',
            title: 'MLOps',
            subtitle: 'Operación y despliegue',
            children: [
              {
                level: 'Nivel 2.1',
                info: 'Información adicional del nivel 2.1',
                children: [
                  {
                    level: 'Nivel 2.1.1',
                    info: 'Información adicional del nivel 2.1.1',
                    title: 'CI/CD',
                    subtitle: 'Pipelines para modelos',
                    isTrue: true,
                  },
                  {
                    level: 'Nivel 2.1.2',
                    info: 'Información adicional del nivel 2.1.2',
                    subtitle: 'Observabilidad',
                    telemetry: {
                      traces: true,
                      logs: true,
                      metrics: true,
                      isNull: null,
                    },
                  },
                ],
              },
              {
                level: 'Nivel 2.2',
                info: 'Información adicional del nivel 2.2',
                children: [
                  {
                    level: 'Nivel 2.2.1',
                    info: 'Información adicional del nivel 2.2.1',
                    title: 'Rollouts',
                    subtitle: 'Canary / Blue-Green',
                    isFalse: false,
                    params: { canaryPercent: 10, windowMin: 30 },
                  },
                  {
                    level: 'Nivel 2.2.2',
                    info: 'Información adicional del nivel 2.2.2',
                    title: 'Feature Flags',
                    subtitle: 'Activación gradual',
                    isTrue: true,
                    flags: ['rag_enabled', 'rerank_enabled', 'tools_enabled'],
                  },
                ],
              },
            ],
          },
          {
            level: 'Nivel 3',
            info: 'Información adicional del nivel 3',
            title: 'RAG y Agentes',
            subtitle: 'Recuperación, herramientas y orquestación',
            children: [
              {
                level: 'Nivel 3.1',
                info: 'Información adicional del nivel 3.1',
                children: [
                  {
                    level: 'Nivel 3.1.1',
                    info: 'Información adicional del nivel 3.1.1',
                    title: 'Retrieval',
                    subtitle: 'Búsqueda híbrida',
                    params: { topK: 12, threshold: 0.35 },
                  },
                  {
                    level: 'Nivel 3.1.2',
                    info: 'Información adicional del nivel 3.1.2',
                    title: 'Reranking',
                    subtitle: 'Mejorar relevancia',
                    isTrue: true,
                  },
                ],
              },
              {
                level: 'Nivel 3.2',
                info: 'Información adicional del nivel 3.2',
                title: 'Agentes',
                subtitle: 'Planificación y ejecución',
                children: [
                  {
                    level: 'Nivel 3.2.1',
                    info: 'Información adicional del nivel 3.2.1',
                    notesShort: 'Nodo simple para comparar.',
                  },
                  {
                    level: 'Nivel 3.2.2',
                    info: 'Información adicional del nivel 3.2.2',
                    title: 'Orquestador',
                    subtitle: 'Level 3.2.2 con más hijos',
                    isTrue: true,
                    isFalse: false,
                    isNull: null,
                    children: [
                      {
                        level: 'Nivel 3.2.2.1',
                        info: 'Hijo 1 adicional',
                        title: 'Planner',
                        subtitle: 'Define pasos',
                        params: { maxSteps: 6, style: 'short' },
                        children: [
                          {
                            level: 'Nivel 3.2.2.1.1',
                            info: 'Nieto',
                            notesShort: 'Paso 1: entender el objetivo',
                            isTrue: true,
                          },
                          {
                            level: 'Nivel 3.2.2.1.2',
                            info: 'Nieto',
                            textLong:
                              'Texto medio para probar render: el planner puede generar una lista de acciones, priorizarlas, y decidir si requiere herramientas. Aquí se simula esa explicación con un párrafo no tan largo.',
                            isFalse: false,
                          },
                        ],
                      },
                      {
                        level: 'Nivel 3.2.2.2',
                        info: 'Hijo 2 adicional',
                        title: 'Executor',
                        subtitle: 'Llama herramientas',
                        tools: [
                          { name: 'search.kb', enabled: true },
                          { name: 'ticket.lookup', enabled: false },
                        ],
                        children: [
                          {
                            level: 'Nivel 3.2.2.2.1',
                            info: 'Nieto',
                            title: 'Tool Call',
                            subtitle: 'Ejemplo',
                            payload: {
                              query: 'errores 500 api',
                              topK: 5,
                              isNull: null,
                            },
                            isTrue: true,
                          },
                        ],
                      },
                      {
                        level: 'Nivel 3.2.2.3',
                        info: 'Hijo 3 adicional',
                        title: 'Guardrails',
                        subtitle: 'Seguridad',
                        policies: {
                          noSecrets: true,
                          noPII: true,
                          copyright: true,
                          selfHarm: true,
                        },
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                level: 'Nivel 3.3',
                info: 'Información adicional del nivel 3.3',
                children: [
                  {
                    level: 'Nivel 3.3.1',
                    info: 'Información adicional del nivel 3.3.1',
                    title: 'Evaluación RAG',
                    subtitle: 'Faithfulness / relevancia',
                    scores: {
                      faithfulness: 0.86,
                      relevancy: 0.81,
                      isTrue: true,
                    },
                  },
                  {
                    level: 'Nivel 3.3.2',
                    info: 'Información adicional del nivel 3.3.2',
                    title: 'Citas',
                    subtitle: 'Precisión de fuentes',
                    isFalse: false,
                    notesShort: 'Nodo con valores simples.',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ];
  isError = false;
  showLoader = false;
  id = 0;
  readonly damageOptions = {
    title: 'JsonSchema-ng16',
    labelData: LABEL_DATA,
    accentByKey: 'isTrue',
    accentFill: true,
    jsonTitleKeys: JSON_TITLE_KEYS,
    showColorTrue: true,
    showColorFalse: true,
    showColorNull: true,
    descriptionShowColorTrue: 'enabled true',
    descriptionShowColorFalse: 'enabled false',
    descriptionShowColorNull: 'enabled null',
  };
}
