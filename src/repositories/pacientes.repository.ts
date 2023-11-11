import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Pacientes, PacientesRelations, Psicologos} from '../models';
import {PsicologosRepository} from './psicologos.repository';

export class PacientesRepository extends DefaultCrudRepository<
  Pacientes,
  typeof Pacientes.prototype.idPaciente,
  PacientesRelations
> {

  public readonly paciente_psicologo: BelongsToAccessor<Psicologos, typeof Pacientes.prototype.idPaciente>;

  constructor(
    @inject('datasources.dataJSON') dataSource: DataJsonDataSource, @repository.getter('PsicologosRepository') protected psicologosRepositoryGetter: Getter<PsicologosRepository>,
  ) {
    super(Pacientes, dataSource);
    this.paciente_psicologo = this.createBelongsToAccessorFor('paciente_psicologo', psicologosRepositoryGetter,);
    this.registerInclusionResolver('paciente_psicologo', this.paciente_psicologo.inclusionResolver);
  }
}
