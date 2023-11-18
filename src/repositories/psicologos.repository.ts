import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Psicologos, PsicologosRelations, Usuarios} from '../models';
import {UsuariosRepository} from './usuarios.repository';

export class PsicologosRepository extends DefaultCrudRepository<
  Psicologos,
  typeof Psicologos.prototype.idPsicologo,
  PsicologosRelations
> {

  public readonly psicologos_usuarios: BelongsToAccessor<Usuarios, typeof Psicologos.prototype.idPsicologo>;

  constructor(
    @inject('datasources.dataJSON') dataSource: DataJsonDataSource, @repository.getter('UsuariosRepository') protected usuariosRepositoryGetter: Getter<UsuariosRepository>,
  ) {
    super(Psicologos, dataSource);
    this.psicologos_usuarios = this.createBelongsToAccessorFor('psicologos_usuarios', usuariosRepositoryGetter,);
    this.registerInclusionResolver('psicologos_usuarios', this.psicologos_usuarios.inclusionResolver);
  }
}
