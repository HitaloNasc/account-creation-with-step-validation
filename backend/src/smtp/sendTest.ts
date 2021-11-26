import { GMailService } from "./smtp";

let gmailService = new GMailService();

gmailService.sendMail('hitalobruno2011@gmail.com', 'hello', 'hello2');