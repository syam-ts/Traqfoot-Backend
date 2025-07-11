import { User } from "./User";

export class Employer extends User {
   name: string;
    constructor(name: string) {
        super(name);
        this.name = name;
    }

    getRole = (): string => {
        return "employer";
    };

    viewAllJobPost = () => {
    return
    };

    createJobPost = (job: any) => {
        let newPost;
        return newPost;
    }

}
