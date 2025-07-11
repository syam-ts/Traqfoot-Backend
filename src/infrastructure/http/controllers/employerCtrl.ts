import { Request, Response } from "express";
import { CreateJobPost } from "../../../use-cases/Employer/createJobPostUseCase";
import { ViewAllJobPost } from "../../../use-cases/Employer/viewAllJobPostUseCase";
import { EmployerDbRepository } from "../../repository-db/EmployerDbRepository";

const employerRepo = new EmployerDbRepository();
const createJobPostUseCase = new CreateJobPost(employerRepo);
const viewAllJobPostUseCase = new ViewAllJobPost(employerRepo);

export class EmployerController {
    constructor() {}

    async createJobPost(req: Request, res: Response): Promise<any> {
        try {
      
            const result = await createJobPostUseCase.execute(req.body);
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
