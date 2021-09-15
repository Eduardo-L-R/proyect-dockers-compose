import { Module } from '@nestjs/common';
// import { UserModule } from './user/user.module';
// import { RoleModule } from './role/role.module';
import { InicioModule } from './inicio/inicio.module';

@Module({
  imports: [
    InicioModule
  ],
  controllers: [],
  providers: [],
})

export class BackofficeModule {
}
