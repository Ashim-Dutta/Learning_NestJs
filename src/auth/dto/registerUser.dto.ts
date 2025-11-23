import { IsEmail, IsNotEmpty, IsString} from 'class-validator'


export class RegisterDto{

    @IsNotEmpty()
    @IsString()
    fname: string;

    @IsString()
    lname: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string
}


//This Dto belongs to user it might be under the user folder 