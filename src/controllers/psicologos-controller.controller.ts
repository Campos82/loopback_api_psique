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
import {Psicologos} from '../models';
import {PsicologosRepository} from '../repositories';

export class PsicologosControllerController {
  constructor(
    @repository(PsicologosRepository)
    public psicologosRepository : PsicologosRepository,
  ) {}

  @post('/psicologos')
  @response(200, {
    description: 'Psicologos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Psicologos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Psicologos, {
            title: 'NewPsicologos',
            exclude: ['idPsicologo'],
          }),
        },
      },
    })
    psicologos: Omit<Psicologos, 'idPsicologo'>,
  ): Promise<Psicologos> {
    return this.psicologosRepository.create(psicologos);
  }

  @get('/psicologos/count')
  @response(200, {
    description: 'Psicologos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Psicologos) where?: Where<Psicologos>,
  ): Promise<Count> {
    return this.psicologosRepository.count(where);
  }

  @get('/psicologos')
  @response(200, {
    description: 'Array of Psicologos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Psicologos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Psicologos) filter?: Filter<Psicologos>,
  ): Promise<Psicologos[]> {
    return this.psicologosRepository.find(filter);
  }

  @patch('/psicologos')
  @response(200, {
    description: 'Psicologos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Psicologos, {partial: true}),
        },
      },
    })
    psicologos: Psicologos,
    @param.where(Psicologos) where?: Where<Psicologos>,
  ): Promise<Count> {
    return this.psicologosRepository.updateAll(psicologos, where);
  }

  @get('/psicologos/{id}')
  @response(200, {
    description: 'Psicologos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Psicologos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Psicologos, {exclude: 'where'}) filter?: FilterExcludingWhere<Psicologos>
  ): Promise<Psicologos> {
    return this.psicologosRepository.findById(id, filter);
  }

  @patch('/psicologos/{id}')
  @response(204, {
    description: 'Psicologos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Psicologos, {partial: true}),
        },
      },
    })
    psicologos: Psicologos,
  ): Promise<void> {
    await this.psicologosRepository.updateById(id, psicologos);
  }

  @put('/psicologos/{id}')
  @response(204, {
    description: 'Psicologos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() psicologos: Psicologos,
  ): Promise<void> {
    await this.psicologosRepository.replaceById(id, psicologos);
  }

  @del('/psicologos/{id}')
  @response(204, {
    description: 'Psicologos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.psicologosRepository.deleteById(id);
  }
}
