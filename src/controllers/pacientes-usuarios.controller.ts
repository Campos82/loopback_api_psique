import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Pacientes,
  Usuarios,
} from '../models';
import {PacientesRepository} from '../repositories';

export class PacientesUsuariosController {
  constructor(
    @repository(PacientesRepository)
    public pacientesRepository: PacientesRepository,
  ) { }

  @get('/pacientes/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Usuarios belonging to Pacientes',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Usuarios),
          },
        },
      },
    },
  })
  async getUsuarios(
    @param.path.number('id') id: typeof Pacientes.prototype.idPaciente,
  ): Promise<Usuarios> {
    return this.pacientesRepository.pacientes_usuarios(id);
  }
}
