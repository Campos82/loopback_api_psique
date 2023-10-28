import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Pacientes, PacientesRelations} from '../models';

export class PacientesRepository extends DefaultCrudRepository<
  Pacientes,
  typeof Pacientes.prototype.idPaciente,
  PacientesRelations
> {
  constructor(
    @inject('datasources.dataJSON') dataSource: DataJsonDataSource,
  ) {
    super(Pacientes, dataSource);
  }
}
