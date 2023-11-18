import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Usuarios} from './usuarios.model';
import {Psicologos} from './psicologos.model';

@model()
export class Pacientes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idPaciente?: number;

  @belongsTo(() => Usuarios, {name: 'pacientes_usuarios'})
  idUsuario: number;

  @belongsTo(() => Psicologos, {name: 'pacientes_psicologos'})
  idPsicologo: number;

  constructor(data?: Partial<Pacientes>) {
    super(data);
  }
}

export interface PacientesRelations {
  // describe navigational properties here
}

export type PacientesWithRelations = Pacientes & PacientesRelations;
