import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Psicologos, PsicologosRelations} from '../models';

export class PsicologosRepository extends DefaultCrudRepository<
  Psicologos,
  typeof Psicologos.prototype.idPsicolgo,
  PsicologosRelations
> {
  constructor(
    @inject('datasources.dataJSON') dataSource: DataJsonDataSource,
  ) {
    super(Psicologos, dataSource);
  }
}
