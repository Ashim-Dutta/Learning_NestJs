import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async createUser(registerUserDto: RegisterDto) {
       
        try {

            return await this.userModel.create({
                fname: registerUserDto.fname,
                lname: registerUserDto.lname,
                email: registerUserDto.email,
                password: registerUserDto.password
            });

            
        } catch (error) {

            const DUPLICATE_KEY_ERROR_CODE = 11000;

            if (error.code === DUPLICATE_KEY_ERROR_CODE) { 
                throw new ConflictException('User with this email already exists');
            }

            throw error;
            
        }
        
       
        
    }

}
