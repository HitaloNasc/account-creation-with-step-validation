import * as nodemailer from 'nodemailer';
require('dotenv').config();

export class GMailService {
    private _transporter: nodemailer.Transporter;

    constructor() {
        this._transporter = nodemailer.createTransport(
            `smtps://${process.env.TEST_EMAIL}:${process.env.PASS_EMAIL}@smtp.${process.env.DOMAIN_EMAIL}`
        );
    }

    sendMail(to: string, subject: string, content: string) {
        let options = {
            from: 'from_test@gamil.com',
            to: to,
            subject: subject,
            text: content
        }
        this._transporter.sendMail(options, (error, info) => {
            if (error) {
                return console.log(`error: ${error}`);
            }
            console.log(`Message set ${info.response}`);
        });
    }

}
