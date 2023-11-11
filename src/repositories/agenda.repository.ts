import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Agenda, AgendaRelations, Pacientes} from '../models';
import {PacientesRepository} from './pacientes.repository';

export class AgendaRepository extends DefaultCrudRepository<
  Agenda,
  typeof Agenda.prototype.idAgenda,
  AgendaRelations
> {

  public readonly agenda_pacientes: BelongsToAccessor<Pacientes, typeof Agenda.prototype.idAgenda>;

  constructor(
    @inject('datasources.dataJSON') dataSource: DataJsonDataSource, @repository.getter('PacientesRepository') protected pacientesRepositoryGetter: Getter<PacientesRepository>,
  ) {
    super(Agenda, dataSource);
    this.agenda_pacientes = this.createBelongsToAccessorFor('agenda_pacientes', pacientesRepositoryGetter,);
    this.registerInclusionResolver('agenda_pacientes', this.agenda_pacientes.inclusionResolver);
  }
}
