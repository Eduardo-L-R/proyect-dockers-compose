import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { join } from 'path';
import { InicioService } from '../application/inicio.service';

const tipoError = {
  created: { status: HttpStatus.CREATED, message: 'Creado correctamente' },
  badRequest: { status: HttpStatus.BAD_REQUEST, message: 'Petición incorrecta al servidor' },
  internalServerError: { status: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Error interno del servidor' },
};

@Controller('')
export class InicioController {
  constructor(private readonly _inicioService: InicioService) {}

  @Get('/getAll')
  async getAll() {
    const getAll: any = await this._inicioService.getAll();
    return getAll;
  }

  @Get('/create-base-data')
  async saveBaseData() {
    const saveBaseData: any = await this._inicioService.saveBaseData();
    return saveBaseData;
  }

  @Get('/filter')
  async getFiltrado(@Query() query:any) {
    const getFiltrado: any = await this._inicioService.getFiltrado(query);
    return getFiltrado;
  }

  @Get('*')
  wild() {
    throw new BadRequestException('plase, use a valid endpoint');
  }
}
