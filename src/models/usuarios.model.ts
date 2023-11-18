import {Entity, model, property} from '@loopback/repository';

@model()
export class Usuarios extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idUsuario?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  ap1: string;

  @property({
    type: 'string',
    required: true,
  })
  ap2: string;

  @property({
    type: 'string',
    required: true,
  })
  edad: string;

  @property({
    type: 'string',
    required: true,
  })
  sexo: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasena: string;


  constructor(data?: Partial<Usuarios>) {
    super(data);
  }
}

export interface UsuariosRelations {
  // describe navigational properties here
}

export type UsuariosWithRelations = Usuarios & UsuariosRelations;
