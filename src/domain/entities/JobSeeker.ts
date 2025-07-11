import { User } from "./User";

export class JobSeeker extends User {
    name: string;
    constructor(name: string) {
        super(name);
        this.name = name;
    }

    getRole = (): string => {
        return "jobseeker";
    };

    applyJob = (jobApplication: any) => {
        return;
    };
    viewAllJobPost = () => {
        return;
    };
}
