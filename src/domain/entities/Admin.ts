import { User } from "./User";


export class Admin extends User {
    name: string;
    constructor(name: string) {
        super(name);
        this.name = name;
    }

    getRole = (): string => {
        return "admin";
    };
    
    viewAllJobPost = () => {
        return
    };

    deleteJobPost = (postId: string) => {
        let deletedPost;

        return deletedPost
    }
}
