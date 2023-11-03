import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})

export class Pacientes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idPaciente?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomPaciente: string;

  @property({
    type: 'string',
    required: true,
  })
  ap1Paciente: string;

  @property({
    type: 'string',
    required: true,
  })
  ap2Paciente: string;

  @property({
    type: 'string',
    required: true,
  })
  edadPaciente: string;

  @property({
    type: 'string',
    required: true,
  })
  sexoPaciente: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Pacientes>) {
    super(data);
  }
}

export interface PacientesRelations {
  // describe navigational properties here
}

export type PacientesWithRelations = Pacientes & PacientesRelations;
