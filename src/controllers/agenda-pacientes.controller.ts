import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Agenda,
  Pacientes,
} from '../models';
import {AgendaRepository} from '../repositories';

export class AgendaPacientesController {
  constructor(
    @repository(AgendaRepository)
    public agendaRepository: AgendaRepository,
  ) { }

  @get('/agenda/{id}/pacientes', {
    responses: {
      '200': {
        description: 'Pacientes belonging to Agenda',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Pacientes),
          },
        },
      },
    },
  })
  async getPacientes(
    @param.path.number('id') id: typeof Agenda.prototype.idAgenda,
  ): Promise<Pacientes> {
    return this.agendaRepository.agenda_pacientes(id);
  }
}
