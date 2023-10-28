import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Expedientes extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  padecimientos: string;

  @property({
    type: 'number',
    required: true,
  })
  idExpedientes: number;

  @property({
    type: 'string',
    required: true,
  })
  diagnostico: string;

  @property({
    type: 'string',
    required: true,
  })
  hist_clinica: string;

  @property({
    type: 'string',
    required: true,
  })
  familiograma: string;

  @property({
    type: 'string',
    required: true,
  })
  seguimiento: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Expedientes>) {
    super(data);
  }
}

export interface ExpedientesRelations {
  // describe navigational properties here
}

export type ExpedientesWithRelations = Expedientes & ExpedientesRelations;
