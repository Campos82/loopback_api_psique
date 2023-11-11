import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Expedientes, ExpedientesRelations, Pacientes} from '../models';
import {PacientesRepository} from './pacientes.repository';

export class ExpedientesRepository extends DefaultCrudRepository<
  Expedientes,
  typeof Expedientes.prototype.idExpedientes,
  ExpedientesRelations
> {

  public readonly expediente_pacientes: BelongsToAccessor<Pacientes, typeof Expedientes.prototype.idExpediente>;

  constructor(
    @inject('datasources.dataJSON') dataSource: DataJsonDataSource, @repository.getter('PacientesRepository') protected pacientesRepositoryGetter: Getter<PacientesRepository>,
  ) {
    super(Expedientes, dataSource);
    this.expediente_pacientes = this.createBelongsToAccessorFor('expediente_pacientes', pacientesRepositoryGetter,);
    this.registerInclusionResolver('expediente_pacientes', this.expediente_pacientes.inclusionResolver);
  }
}
