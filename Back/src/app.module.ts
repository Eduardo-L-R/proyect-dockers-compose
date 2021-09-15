import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { BackofficeModule } from './backoffice/backoffice.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    BackofficeModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService) {

    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
