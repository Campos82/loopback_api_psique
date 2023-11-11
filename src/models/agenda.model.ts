import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Pacientes} from './pacientes.model';

@model({settings: {strict: false}})
export class Agenda extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idAgenda?: number;

  @property({
    type: 'string',
    required: true,
  })
  comentario: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  hora: string;

  @belongsTo(() => Pacientes, {name: 'agenda_pacientes'})
  idPaciente: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Agenda>) {
    super(data);
  }
}

export interface AgendaRelations {
  // describe navigational properties here
}

export type AgendaWithRelations = Agenda & AgendaRelations;
