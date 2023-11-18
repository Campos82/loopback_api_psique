import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Pacientes, PacientesRelations, Usuarios, Psicologos} from '../models';
import {UsuariosRepository} from './usuarios.repository';
import {PsicologosRepository} from './psicologos.repository';

export class PacientesRepository extends DefaultCrudRepository<
  Pacientes,
  typeof Pacientes.prototype.idPaciente,
  PacientesRelations
> {

  public readonly pacientes_usuarios: BelongsToAccessor<Usuarios, typeof Pacientes.prototype.idPaciente>;

  public readonly pacientes_psicologos: BelongsToAccessor<Psicologos, typeof Pacientes.prototype.idPaciente>;

  constructor(
    @inject('datasources.dataJSON') dataSource: DataJsonDataSource, @repository.getter('UsuariosRepository') protected usuariosRepositoryGetter: Getter<UsuariosRepository>, @repository.getter('PsicologosRepository') protected psicologosRepositoryGetter: Getter<PsicologosRepository>,
  ) {
    super(Pacientes, dataSource);
    this.pacientes_psicologos = this.createBelongsToAccessorFor('pacientes_psicologos', psicologosRepositoryGetter,);
    this.registerInclusionResolver('pacientes_psicologos', this.pacientes_psicologos.inclusionResolver);
    this.pacientes_usuarios = this.createBelongsToAccessorFor('pacientes_usuarios', usuariosRepositoryGetter,);
    this.registerInclusionResolver('pacientes_usuarios', this.pacientes_usuarios.inclusionResolver);
  }
}
