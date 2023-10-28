import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Psicologos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idPsicolgo?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomPsicolgo: string;

  @property({
    type: 'string',
    required: true,
  })
  ap1Psicolgo: string;

  @property({
    type: 'string',
    required: true,
  })
  ap2Psicolgo: string;

  @property({
    type: 'string',
    required: true,
  })
  edadPsicolgo: string;

  @property({
    type: 'string',
    required: true,
  })
  sexoPsicolgo: string;

  @property({
    type: 'string',
    required: true,
  })
  especialidad: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Psicologos>) {
    super(data);
  }
}

export interface PsicologosRelations {
  // describe navigational properties here
}

export type PsicologosWithRelations = Psicologos & PsicologosRelations;
