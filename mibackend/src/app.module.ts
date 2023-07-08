import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuariosModule } from './Usuario/Usuario.module';
import { RolesModule } from './roles/roles.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'Invest', //Crear base de datos en XAMPP con el mismo nombre
      autoLoadModels: true,
      synchronize: true,
    }),
    UsuariosModule,
    RolesModule,
    AutenticacionModule,
  ],
})
export class AppModule {}
