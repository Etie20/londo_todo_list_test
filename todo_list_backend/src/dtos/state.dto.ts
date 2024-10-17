import {IsString} from "class-validator";
export class CreateBaseDto {
    //@ts-ignore
    @IsString()
    public name: string;
}