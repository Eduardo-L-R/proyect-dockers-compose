import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { Configuration } from '../config/config.keys';
import { ConnectionOptions } from 'typeorm';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        type: 'postgres' as 'postgres',
        // type: 'mssql' as 'mssql',
        host: config.get(Configuration.HOST),
        // port: 1433,
        username: config.get(Configuration.USERNAME),
        password: config.get(Configuration.PASSWORD),
        database: config.get(Configuration.DATABASE),
        maxQueryExecutionTime: 35000,
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        migrations: [__dirname + '/migrations/*{.ts,.js}',]
      } as ConnectionOptions;
    },
  }),
];
