import {IsString} from "class-validator";
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

    @IsString()
    public created_at: Date;

    @IsString()
    public user: string;
}