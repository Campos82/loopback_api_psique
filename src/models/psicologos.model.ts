import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Usuarios} from './usuarios.model';

@model()
export class Psicologos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idPsicologo?: number;

  @property({
    type: 'string',
    required: true,
  })
  especialidad: string;

  @belongsTo(() => Usuarios, {name: 'psicologos_usuarios'})
  idUsuario: number;

  constructor(data?: Partial<Psicologos>) {
    super(data);
  }
}

export interface PsicologosRelations {
  // describe navigational properties here
}

export type PsicologosWithRelations = Psicologos & PsicologosRelations;
