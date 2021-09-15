import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import * as fs from 'fs';
import * as express from 'express';
import * as http from 'http';
import * as https from 'https';

async function bootstrap() {
  const dirHttpsOptions = '/etc/letsencrypt/live/'
  let existsSSLKeys:boolean = false;
  let constsVerify = new Promise((res)=>{
    if (fs.existsSync(dirHttpsOptions)) {
      existsSSLKeys = true;
      res(null);
    } else {
      existsSSLKeys = false;
      console.log('no tiene las claves ssl');
      res(null);
    }
  }) 

  constsVerify.then(async()=>{
    const server = express();
    const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
      new ExpressAdapter(server),
    );
    // app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.setGlobalPrefix('api');
    app.use(bodyParser.json({ limit: '25mb' }));
    app.use(bodyParser.urlencoded({ limit: '25mb', extended: true }));
    app.enableCors();
    app.init();
    
    const eventInitServers = new Promise((res)=>{
      http.createServer(server).listen(5000);
      if(existsSSLKeys){
        const httpsOptions = {
          key: fs.readFileSync(
            dirHttpsOptions + '/privkey.pem',
            'utf8',
          ),
          cert: fs.readFileSync(
            dirHttpsOptions + '/cert.pem',
            'utf8',
          ),
          ca: fs.readFileSync(
            dirHttpsOptions + '/chain.pem',
            'utf8',
          ),
        };
        https.createServer(httpsOptions, server).listen(443);
        res(null);
      }else{
        console.log('no se inicio el puerto 443')
        res(null);
      }
    })  
    eventInitServers.then(()=>{
      console.log(`Application is running on port ${existsSSLKeys? '5000 and 443': '5000'}`);
    })
  })
}
bootstrap();
