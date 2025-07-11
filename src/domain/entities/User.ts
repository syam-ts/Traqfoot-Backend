

export abstract class User {
    constructor(name: string) { };

    abstract getRole(): string;
    abstract viewAllJobPost(): any;
};