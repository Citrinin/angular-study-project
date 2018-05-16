import { Mail } from "./mail";

export interface MailsList {
    mails: Mail[];
    isPrevPage: boolean;
    isNextPage: boolean;
}