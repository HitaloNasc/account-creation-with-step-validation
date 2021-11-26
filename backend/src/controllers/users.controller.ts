import express from 'express'
import users from '../models/user.model';
import { GMailService } from '../smtp/smtp';


export class UserController {

    async create(req: express.Request, res: express.Response) {
        let gmailService = new GMailService();
        const {
            name,
            email,
            password,
            code
        } = req.body;
        // let data = {};
        // let user = await users.findOne({ email });
        // if (!user) {
        let data = {
            name,
            email,
            password,
            code
        }
        let user = await users.create(data);
        gmailService.sendMail(String(user.email), 'VALIDATION CODE', String(user.code));
        return res.status(200).json(user);
        // } else {
        //     return res.status(500).json(user);
        // }
    }
}



const userController = new UserController();

export default userController;