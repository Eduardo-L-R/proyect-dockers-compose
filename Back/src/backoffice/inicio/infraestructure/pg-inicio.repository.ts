import { InjectRepository } from '@nestjs/typeorm';
import { Body, Injectable, NotFoundException, BadRequestException, NotAcceptableException, HttpException, BadGatewayException } from '@nestjs/common';
import { InicioRepository } from './inicio.repository';
import { IInicioRepository } from '../domain/iinicio.repository';

@Injectable()
export class PgInicioRepository implements IInicioRepository {
  constructor(
    @InjectRepository(InicioRepository)
    private readonly _inicioRepository: InicioRepository,
  ) {}

  async getAll(): Promise<any> {
    return await this._inicioRepository
        .createQueryBuilder('p')
        .select('p.id','id')
        .addSelect('p.name','name')
        .addSelect('p.age','age')
        .addSelect('p.happy','happy')
        .addSelect('p.healthy','healthy')
        .addSelect('p.busy','busy')
        .getRawMany();
  }
  
  async saveBaseData(): Promise<any> {
    
    let baseData = [
      {name: "joe", age: 20, happy: true, healthy: true, busy: true},
      {name: "jane", age: 30, happy: true, healthy: true, busy: true},
      {name: "harry", age: 40, happy: true, healthy: true, busy: true},
      {name: "moe", age: 50, happy: true, healthy: true, busy: true}
    ]
    let contador = 0
    for(let person of baseData){
      await this._inicioRepository.save(person);
      contador ++;
    }
    if(contador === baseData.length){
      return await this._inicioRepository.find()
    }else{
      throw new BadGatewayException('the request was not process correctly')
    }
  }
  
  async getFiltrado(query:any): Promise<any> {
    const getFiltrado =  this._inicioRepository
        .createQueryBuilder('p')
        .distinct(true)
        // .select('p.id','id')
        .select('p.name','name')
        .addSelect('p.age','age')
        .addSelect('p.happy','happy')
        .addSelect('p.healthy','healthy')
        .addSelect('p.busy','busy')
        .where('1=1');

    if(query.name){
      getFiltrado.andWhere(`p.name like '%${query.name}%'`)
    }
    if(query.age){
      getFiltrado.andWhere(`CAST(p.age AS text) like '%${parseInt(query.age)}%'`)
    }
    if(query.happy){
      getFiltrado.andWhere(`p.happy = ${query.happy}`)
    }
    if(query.healthy){
      getFiltrado.andWhere(`p.healthy = ${query.healthy}`)
    }
    if(query.busy){
      getFiltrado.andWhere(`p.busy = ${query.busy}`)
    }

    console.log(await getFiltrado.getQuery());

    return await getFiltrado.getRawMany();
    
  }
}
