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
        dataset: {
          id: 'ai_ds_2026_02_11_0001',
          title: 'AI Lab - Dataset de Prueba para JSON-Schema',
          subtitle:
            'Tema: IA aplicada (LLMs, MLOps, ética, RAG, agentes, evaluación)',
          version: {
            major: 1,
            minor: 3,
            patch: 7,
            releaseTag: 'beta',
            isStable: false,
          },
          flags: {
            active: true,
            archived: false,
            containsPII: false,
            hasSyntheticData: true,
            needsReview: true,
            gdprAligned: true,
          },
          timestamps: {
            createdAt: '2026-02-11T02:00:00-05:00',
            updatedAt: '2026-02-11T02:10:00-05:00',
            lastValidatedAt: null,
          },
          meta: {
            owner: {
              team: 'ML Platform',
              contact: {
                name: 'Soporte IA',
                email: 'ai-support@example.com',
                slack: '#ml-platform',
                pagerDuty: null,
              },
            },
            tags: [
              'llm',
              'rag',
              'agents',
              'evaluation',
              'mlops',
              'safety',
              'telemetry',
              'prompting',
            ],
            notesShort:
              'Dataset mixto: configs, experimentos, métricas y artefactos.',
            notesLong:
              'Este JSON está diseñado para estresar un visualizador/esquematizador: mezcla tipos (string/number/bool/null), arrays heterogéneos, objetos anidados profundos (>=5 niveles), textos largos/cortos, y estructuras que parecen reales en un proyecto de IA (pipelines, RAG, agentes, evaluaciones, trazas). No contiene datos personales reales.',
          },
          aiProgram: {
            programName: 'Proyecto Atlas',
            goal: 'Mejorar la precisión de respuestas y reducir alucinaciones en un asistente corporativo.',
            domains: [
              {
                name: 'Soporte Técnico',
                priority: 1,
                enabled: true,
                useCases: [
                  {
                    useCaseId: 'UC-001',
                    title: 'Asistente para incidentes',
                    subtitle: 'Clasificación + sugerencias de solución',
                    expectedImpact: {
                      kpi: 'MTTR',
                      targetReductionPercent: 18.5,
                      baseline: 9.2,
                      baselineUnit: 'hours',
                      target: 7.5,
                      targetUnit: 'hours',
                    },
                    requirements: {
                      latencyMsP95: 1200,
                      availabilityPercent: 99.9,
                      mustCiteSources: true,
                      languages: ['es', 'en'],
                      disallowContent: [
                        'secrets',
                        'credentials',
                        'personal-data',
                      ],
                      canUseTools: true,
                    },
                  },
                ],
              },
              {
                name: 'Finanzas',
                priority: 2,
                enabled: false,
                useCases: [],
              },
            ],
            architecture: {
              pattern: 'RAG + Tools',
              components: {
                llm: {
                  provider: 'Open',
                  model: 'gpt-x',
                  temperature: 0.2,
                  maxTokens: 1200,
                  topP: 0.9,
                  stopSequences: ['<END>'],
                  safety: {
                    enabled: true,
                    policy: {
                      harmfulContent: true,
                      selfHarm: true,
                      privacy: true,
                      copyright: true,
                    },
                    fallbackResponse: 'No puedo ayudar con eso.',
                  },
                },
                retrieval: {
                  enabled: true,
                  strategy: 'hybrid',
                  index: {
                    name: 'kb_corporate_v2',
                    embeddingModel: 'text-embedding-x',
                    dimensions: 1536,
                    chunking: {
                      method: 'semantic',
                      maxChars: 1200,
                      overlapChars: 150,
                      splitBy: ['heading', 'paragraph', 'sentence'],
                    },
                  },
                  reranker: {
                    enabled: true,
                    model: 'rerank-x',
                    topK: 12,
                    threshold: 0.35,
                  },
                },
                tools: {
                  enabled: true,
                  available: [
                    {
                      name: 'ticket.lookup',
                      type: 'internal_api',
                      timeoutMs: 900,
                      retries: 2,
                      permissions: ['read:tickets'],
                    },
                    {
                      name: 'status.page',
                      type: 'http',
                      timeoutMs: 800,
                      retries: 1,
                      permissions: ['read:status'],
                    },
                  ],
                },
              },
            },
          },
          experiments: [
            {
              experimentId: 'EXP-2026-0007',
              title: 'RAG: chunking semántico vs fijo',
              subtitle: 'Comparación para mejorar exactitud y citas',
              enabled: true,
              hypothesis:
                'El chunking semántico reduce respuestas con contexto incompleto.',
              variables: {
                chunkingMode: 'semantic',
                chunkSize: 1200,
                overlap: 150,
                rerankTopK: 12,
                temperature: 0.2,
              },
              metrics: {
                faithfulnessScore: 0.86,
                answerRelevancy: 0.81,
                citationPrecision: 0.74,
                latencyMsP95: 1188,
                costUsdPer1kTokens: 0.012,
                passed: true,
                notes: 'Buen balance; la latencia sube levemente con reranker.',
              },
              artifacts: {
                promptTemplate: {
                  system: 'Eres un asistente técnico que cita fuentes.',
                  user: 'Resuelve el caso y cita documentos relevantes.',
                  guards: {
                    mustCite: true,
                    noSecrets: true,
                    maxSteps: 6,
                  },
                },
                evaluation: {
                  suite: 'qa_regression_v3',
                  samples: [
                    {
                      sampleId: 'S-001',
                      question: '¿Cómo reinicio un servicio sin perder logs?',
                      expected:
                        'Indicar procedimiento con systemd y ubicación de logs.',
                      labels: ['linux', 'ops'],
                      result: {
                        passed: true,
                        score: 0.92,
                        explanations: [
                          'Incluyó pasos correctos.',
                          'Citas presentes.',
                        ],
                        trace: {
                          traceId: 'tr_9f2a',
                          steps: [
                            {
                              step: 1,
                              type: 'retrieve',
                              details: {
                                query:
                                  'reiniciar servicio sin perder logs systemd',
                                hits: 8,
                                topDoc: {
                                  docId: 'DOC-ops-22',
                                  title: 'Guía systemd',
                                  confidence: 0.77,
                                },
                              },
                            },
                            {
                              step: 2,
                              type: 'generate',
                              details: {
                                tokensIn: 812,
                                tokensOut: 233,
                                finishReason: 'stop',
                                safetyTriggered: false,
                              },
                            },
                          ],
                        },
                      },
                    },
                  ],
                  summary: {
                    total: 1,
                    passed: 1,
                    failed: 0,
                    skipped: 0,
                    runTimeSec: 14.3,
                  },
                },
              },
            },
            {
              experimentId: 'EXP-2026-0011',
              title: 'Agentes: planificación corta vs larga',
              subtitle: 'Menos pasos, menos costo',
              enabled: false,
              hypothesis:
                'Planificación corta reduce costo sin bajar calidad en tickets simples.',
              variables: {
                planner: {
                  style: 'short',
                  maxSteps: 4,
                  allowToolLoop: true,
                },
                executor: {
                  maxToolCalls: 3,
                  timeoutMs: 2000,
                },
              },
              metrics: {
                faithfulnessScore: 0.79,
                answerRelevancy: 0.76,
                citationPrecision: 0.61,
                latencyMsP95: 940,
                costUsdPer1kTokens: 0.009,
                passed: false,
                notes: 'Perdió calidad en casos con múltiples fuentes.',
              },
            },
          ],
          ragPipelines: [
            {
              pipelineId: 'RAG-P-01',
              title: 'Ingesta KB corporativa',
              enabled: true,
              sourceTypes: ['pdf', 'html', 'md', 'confluence'],
              ingestion: {
                schedule: '0 */6 * * *',
                lastRun: '2026-02-10T18:00:00-05:00',
                nextRun: '2026-02-12T00:00:00-05:00',
                errors: [],
                stats: {
                  docsFetched: 412,
                  docsIndexed: 398,
                  docsFailed: 14,
                  avgChunkCount: 9.4,
                },
              },
              qualityGates: {
                minLanguageConfidence: 0.8,
                maxPIIScore: 0.1,
                duplicateDetection: {
                  enabled: true,
                  method: 'minhash',
                  threshold: 0.92,
                },
              },
              deepConfig: {
                level1: {
                  level2: {
                    level3: {
                      level4: {
                        level5: {
                          switches: {
                            enableCache: true,
                            enableVectorCompression: false,
                            experimentalTokenizer: null,
                          },
                          limits: {
                            maxDocsPerQuery: 20,
                            maxTotalContextTokens: 6000,
                            maxCitations: 6,
                          },
                          strings: {
                            short: 'ok',
                            long: 'Texto largo de prueba: este bloque existe para validar truncado, wrap, y performance. Incluye números (12345), símbolos (@#%&), y saltos de línea.\nLínea 2.\nLínea 3 con más contenido para forzar scroll.',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          ],
          safetyAndEthics: {
            title: 'Políticas de Seguridad y Ética',
            subtitle: 'Controles para uso responsable',
            principles: [
              {
                name: 'Privacidad',
                description:
                  'No exponer información sensible ni datos personales.',
                enabled: true,
                exceptions: [],
              },
              {
                name: 'Transparencia',
                description: 'Citar fuentes y explicar supuestos.',
                enabled: null,
                exceptions: [
                  {
                    case: 'Conversación casual',
                    allowed: true,
                    reason: 'No se requiere cita para contenido no factual.',
                  },
                ],
              },
            ],
            riskRegister: [
              {
                riskId: 'R-01',
                title: 'Alucinación en respuestas sin evidencia',
                severity: 'high',
                mitigation: {
                  controls: [
                    'RAG con umbral de confianza',
                    'Rechazar si no hay fuentes',
                    'Evaluación continua',
                  ],
                  owner: 'AI Governance',
                  status: 'in_progress',
                  dueDate: '2026-03-15',
                },
              },
              {
                riskId: 'R-02',
                title: 'Fuga de secretos por prompt injection',
                severity: 'critical',
                mitigation: {
                  controls: [
                    'Sanitización de entradas',
                    'Política de herramientas',
                    'Red-teaming mensual',
                  ],
                  owner: 'Security',
                  status: 'planned',
                  dueDate: null,
                },
              },
            ],
          },
          mixedTypesShowcase: {
            title: 'Showcase de Tipos',
            subtitle: 'Arrays heterogéneos y nulls',
            values: [
              'texto',
              42,
              3.14159,
              true,
              false,
              null,
              {
                nested: {
                  a: 1,
                  b: 'dos',
                  c: false,
                },
              },
              [
                'lista',
                99,
                {
                  deep: {
                    x: 'y',
                  },
                },
              ],
            ],
          },
          appendix: {
            title: 'Apéndice',
            subtitle: 'Objetos para stress-test',
            loremShort: 'IA útil, no mágica.',
            loremLong:
              'Un párrafo más largo para probar render: El objetivo de este apéndice es forzar al visualizador a manejar bloques extensos, saltos de línea, y mezcla de caracteres. También incluye claves con nombres variados y estructuras repetidas pero con valores distintos.',
            edgeCases: {
              emptyObject: {},
              emptyArray: [],
              zero: 0,
              negative: -13,
              bigNumber: 9999999999,
              weirdStrings: {
                withQuotes: 'Dijo: "hola" y se fue.',
                withUnicode: 'áéíóú ñ ü 漢字',
                withPath: 'C:\\data\\models\\run_01',
                withUrl: 'https://example.com/docs?id=1&ref=ai',
                withTemplate: '{{user.name}} - {{ticket.id}}',
              },
            },
          },
        },
      },
    },
  ];
  isError = false;
  showLoader = false;
  id = 0;
  readonly damageOptions = {
    title: 'JsonSchema-ng16',
    labelData: LABEL_DATA,
    accentByKey: 'enabled',
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
