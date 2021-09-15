import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InicioService } from './application/inicio.service';
import { InicioController } from './controller/inicio.controller';
import { INICIO_REPOSITORI } from './domain/iinicio.repository';
import { InicioRepository } from './infraestructure/inicio.repository';
import { PgInicioRepository } from './infraestructure/pg-inicio.repository';

@Module({
    imports: [TypeOrmModule.forFeature(
      [InicioRepository]
      )],
    providers: [ InicioService, {
      useClass: PgInicioRepository,
      provide: INICIO_REPOSITORI
    }],
    controllers: [InicioController],
  })
export class InicioModule {}
