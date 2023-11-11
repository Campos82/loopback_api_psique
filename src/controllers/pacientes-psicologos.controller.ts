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
  Psicologos,
} from '../models';
import {PacientesRepository} from '../repositories';

export class PacientesPsicologosController {
  constructor(
    @repository(PacientesRepository)
    public pacientesRepository: PacientesRepository,
  ) { }

  @get('/pacientes/{id}/psicologos', {
    responses: {
      '200': {
        description: 'Psicologos belonging to Pacientes',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Psicologos),
          },
        },
      },
    },
  })
  async getPsicologos(
    @param.path.number('id') id: typeof Pacientes.prototype.idPaciente,
  ): Promise<Psicologos> {
    return this.pacientesRepository.paciente_psicologo(id);
  }
}
