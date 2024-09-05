import {IsEmail, IsString} from "class-validator";

export class CreateUserDto {
    // @ts-ignore
    @IsEmail()
    public email: string;

    @IsString()
    public password: string;
}