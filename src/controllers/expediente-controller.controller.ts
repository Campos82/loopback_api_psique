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
import {Expedientes} from '../models';
import {ExpedientesRepository} from '../repositories';

export class ExpedienteControllerController {
  constructor(
    @repository(ExpedientesRepository)
    public expedientesRepository : ExpedientesRepository,
  ) {}

  @post('/expedientes')
  @response(200, {
    description: 'Expedientes model instance',
    content: {'application/json': {schema: getModelSchemaRef(Expedientes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Expedientes, {
            title: 'NewExpedientes',
            exclude: ['idExpedientes'],
          }),
        },
      },
    })
    expedientes: Omit<Expedientes, 'idExpedientes'>,
  ): Promise<Expedientes> {
    return this.expedientesRepository.create(expedientes);
  }

  @get('/expedientes/count')
  @response(200, {
    description: 'Expedientes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Expedientes) where?: Where<Expedientes>,
  ): Promise<Count> {
    return this.expedientesRepository.count(where);
  }

  @get('/expedientes')
  @response(200, {
    description: 'Array of Expedientes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Expedientes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Expedientes) filter?: Filter<Expedientes>,
  ): Promise<Expedientes[]> {
    return this.expedientesRepository.find(filter);
  }

  @patch('/expedientes')
  @response(200, {
    description: 'Expedientes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Expedientes, {partial: true}),
        },
      },
    })
    expedientes: Expedientes,
    @param.where(Expedientes) where?: Where<Expedientes>,
  ): Promise<Count> {
    return this.expedientesRepository.updateAll(expedientes, where);
  }

  @get('/expedientes/{id}')
  @response(200, {
    description: 'Expedientes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Expedientes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Expedientes, {exclude: 'where'}) filter?: FilterExcludingWhere<Expedientes>
  ): Promise<Expedientes> {
    return this.expedientesRepository.findById(id, filter);
  }

  @patch('/expedientes/{id}')
  @response(204, {
    description: 'Expedientes PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Expedientes, {partial: true}),
        },
      },
    })
    expedientes: Expedientes,
  ): Promise<void> {
    await this.expedientesRepository.updateById(id, expedientes);
  }

  @put('/expedientes/{id}')
  @response(204, {
    description: 'Expedientes PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() expedientes: Expedientes,
  ): Promise<void> {
    await this.expedientesRepository.replaceById(id, expedientes);
  }

  @del('/expedientes/{id}')
  @response(204, {
    description: 'Expedientes DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.expedientesRepository.deleteById(id);
  }
}
