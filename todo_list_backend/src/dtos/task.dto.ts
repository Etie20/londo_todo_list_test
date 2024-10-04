export class CreateTaskDto {
    public name: string;

    public description: string;

    public state: string;

    public category: string;

    public created_at: Date;

    public user: string;
}