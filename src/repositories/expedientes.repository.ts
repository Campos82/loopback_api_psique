import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Expedientes, ExpedientesRelations} from '../models';

export class ExpedientesRepository extends DefaultCrudRepository<
  Expedientes,
  typeof Expedientes.prototype.idExpedientes,
  ExpedientesRelations
> {
  constructor(
    @inject('datasources.dataJSON') dataSource: DataJsonDataSource,
  ) {
    super(Expedientes, dataSource);
  }
}
