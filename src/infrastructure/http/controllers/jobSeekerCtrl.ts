import { Request, Response } from "express";
import { ApplyJobPost } from "../../../use-cases/JobSeeker/applyJobUseCase";
import { ViewAllJobPost } from "../../../use-cases/JobSeeker/viewAllJobPostUseCase";
import { JobSeekerRepositoryDb } from "../../repository-db/JobseekerRepositoryDb";

const jobSeekerRepo = new JobSeekerRepositoryDb();
const applyJobPostUseCase = new ApplyJobPost(jobSeekerRepo); 
const viewAllJobPostUseCase = new ViewAllJobPost(jobSeekerRepo); 

export class JobSeekerController {
    constructor() {}

    async applyjob(req: Request, res: Response): Promise<any> {
        try {
      
            const result = await applyJobPostUseCase.execute(req.body);
            res.json({ success: true, result }).status(201);
        } catch (err: any) {
            res.json({ success: false, message: err.message }).status(501);
        }
    }

    async viewAllJobPost(req: Request, res: Response): Promise<any> {
        try {
            const result = await viewAllJobPostUseCase.execute();
            res.json({ success: true, result }).status(200);
        } catch (err: any) {
            res.json({ success: false, message: err.message }).status(501);
        }
    }
}
