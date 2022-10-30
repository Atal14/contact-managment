import { DEPARTMENT, IEmailPhone, IUser, STATUS } from "src/mockData";

export class ContactsModel {
    firstName: string;
    lastName: string;
    status: STATUS;
    department: DEPARTMENT;
    avatar: string;
    bio: string;
    emails: IEmailPhone[]
    dial: string;
    meeting: string;
    phones: IEmailPhone[];

    constructor(contact: IUser) {
        Object.assign(this, contact);
    }

    get FullName(): string {
        return `${this.firstName} ${this.lastName}` 
    }

    get PrimaryEmail(): string {
        const email = this.emails.find((email: IEmailPhone) => email.primary);
        if (email) {
            return email.contact
        }
        return '';
    }

    get PrimaryPhone(): string {
        const phone = this.phones.find((phone: IEmailPhone) => phone.primary);
        if (phone) {
            return phone.contact
        }
        return ''
    }

    get RestEmails(): IEmailPhone[] {
        return this.emails.filter((email: IEmailPhone) => !email.primary);
    }

    get RestPhones(): IEmailPhone[] {
        return this.phones.filter((phone: IEmailPhone) => !phone.primary);
    }

}