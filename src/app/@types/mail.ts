export interface Mail {
    key: string;
    emailTo: string;
    emailFrom: string;
    subject: string;
    message: string;
    date: number;
    isNew: boolean;
}
