import { Module } from '@nestjs/common';
import { AutenticacionController } from './autenticacion.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from 'src/Usuario/modelos/Usuario';
import { UsuariosService } from 'src/Usuario/Usuario.service';

@Module({
  imports:[SequelizeModule.forFeature([Usuario])], 
  controllers: [AutenticacionController],
  providers: [UsuariosService]
})
export class AutenticacionModule {}
