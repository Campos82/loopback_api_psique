import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Expedientes,
  Pacientes,
} from '../models';
import {ExpedientesRepository} from '../repositories';

export class ExpedientesPacientesController {
  constructor(
    @repository(ExpedientesRepository)
    public expedientesRepository: ExpedientesRepository,
  ) { }

  @get('/expedientes/{id}/pacientes', {
    responses: {
      '200': {
        description: 'Pacientes belonging to Expedientes',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Pacientes),
          },
        },
      },
    },
  })
  async getPacientes(
    @param.path.number('id') id: typeof Expedientes.prototype.idExpediente,
  ): Promise<Pacientes> {
    return this.expedientesRepository.expediente_pacientes(id);
  }
}
