import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuario } from 'src/Usuario/modelos/Usuario';
import { UsuariosService } from 'src/Usuario/Usuario.service';

@Injectable()
export class AutenticacionService {


    constructor(
        @InjectModel(Usuario)
        private readonly usuarioModel: typeof Usuario) { }



    
}
