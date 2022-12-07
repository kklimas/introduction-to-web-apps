export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string;
}
export class PostCreateDTO {
    userId: number;
    title: string;
    body: string;
}