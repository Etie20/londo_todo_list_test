import {IsString,IsDate} from "class-validator";
export class CreateTaskDto {
    //@ts-ignore
    @IsString()
    public name: string;

    @IsString()
    public description: string;

    @IsString()
    public state: string;

    @IsString()
    public category: string;

    @IsDate()
    public created_at: Date;

    @IsString()
    public user: string;
}