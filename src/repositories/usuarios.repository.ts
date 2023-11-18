import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Usuarios, UsuariosRelations} from '../models';

export class UsuariosRepository extends DefaultCrudRepository<
  Usuarios,
  typeof Usuarios.prototype.idUsuario,
  UsuariosRelations
> {
  constructor(
    @inject('datasources.dataJSON') dataSource: DataJsonDataSource,
  ) {
    super(Usuarios, dataSource);
  }
}
