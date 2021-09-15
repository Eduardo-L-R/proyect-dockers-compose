import { Persons } from '../../../shared/domain';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Persons)
export class InicioRepository extends Repository<Persons> {}

