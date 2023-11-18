import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Psicologos,
  Usuarios,
} from '../models';
import {PsicologosRepository} from '../repositories';

export class PsicologosUsuariosController {
  constructor(
    @repository(PsicologosRepository)
    public psicologosRepository: PsicologosRepository,
  ) { }

  @get('/psicologos/{id}/usuarios', {
    responses: {
      '200': {
        description: 'Usuarios belonging to Psicologos',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Usuarios),
          },
        },
      },
    },
  })
  async getUsuarios(
    @param.path.number('id') id: typeof Psicologos.prototype.idPsicologo,
  ): Promise<Usuarios> {
    return this.psicologosRepository.psicologos_usuarios(id);
  }
}
