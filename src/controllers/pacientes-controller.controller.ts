import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Pacientes} from '../models';
import {PacientesRepository} from '../repositories';

export class PacientesControllerController {
  constructor(
    @repository(PacientesRepository)
    public pacientesRepository : PacientesRepository,
  ) {}

  @post('/pacientes')
  @response(200, {
    description: 'Pacientes model instance',
    content: {'application/json': {schema: getModelSchemaRef(Pacientes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pacientes, {
            title: 'NewPacientes',
            exclude: ['idPaciente'],
          }),
        },
      },
    })
    pacientes: Omit<Pacientes, 'idPaciente'>,
  ): Promise<Pacientes> {
    return this.pacientesRepository.create(pacientes);
  }

  @get('/pacientes/count')
  @response(200, {
    description: 'Pacientes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Pacientes) where?: Where<Pacientes>,
  ): Promise<Count> {
    return this.pacientesRepository.count(where);
  }

  @get('/pacientes')
  @response(200, {
    description: 'Array of Pacientes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Pacientes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Pacientes) filter?: Filter<Pacientes>,
  ): Promise<Pacientes[]> {
    return this.pacientesRepository.find(filter);
  }

  @patch('/pacientes')
  @response(200, {
    description: 'Pacientes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pacientes, {partial: true}),
        },
      },
    })
    pacientes: Pacientes,
    @param.where(Pacientes) where?: Where<Pacientes>,
  ): Promise<Count> {
    return this.pacientesRepository.updateAll(pacientes, where);
  }

  @get('/pacientes/{id}')
  @response(200, {
    description: 'Pacientes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Pacientes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Pacientes, {exclude: 'where'}) filter?: FilterExcludingWhere<Pacientes>
  ): Promise<Pacientes> {
    return this.pacientesRepository.findById(id, filter);
  }

  @patch('/pacientes/{id}')
  @response(204, {
    description: 'Pacientes PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pacientes, {partial: true}),
        },
      },
    })
    pacientes: Pacientes,
  ): Promise<void> {
    await this.pacientesRepository.updateById(id, pacientes);
  }

  @put('/pacientes/{id}')
  @response(204, {
    description: 'Pacientes PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pacientes: Pacientes,
  ): Promise<void> {
    await this.pacientesRepository.replaceById(id, pacientes);
  }

  @del('/pacientes/{id}')
  @response(204, {
    description: 'Pacientes DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pacientesRepository.deleteById(id);
  }
}
