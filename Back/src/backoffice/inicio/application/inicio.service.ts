import { Injectable, Inject, HttpStatus, BadRequestException, NotFoundException, NotAcceptableException, Scope } from '@nestjs/common';

import { join } from 'path';
import { IInicioRepository, INICIO_REPOSITORI } from '../domain/iinicio.repository';
import * as fs from 'fs';
import { DIR_LOGS_FILES } from '../../../shared/constants';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

var contadorVisitas:number = 0;

@Injectable({ scope: Scope.REQUEST })
export class InicioService {
  constructor(
    @Inject(INICIO_REPOSITORI)
    private readonly _inicioRepository: IInicioRepository,
    @Inject(REQUEST) private readonly req: Request
  ) {}

  async getAll(): Promise<void> {
    const getAll:any = await this._inicioRepository.getAll();
    return getAll;
  }

  async saveBaseData(): Promise<void> {
    const saveBaseData:any = await this._inicioRepository.saveBaseData();
    return saveBaseData;
  }

  async getFiltrado(query:any): Promise<void> {
    const getFiltrado:any = await this._inicioRepository.getFiltrado(query);
    return getFiltrado;
  }
  
}
