export interface IUser {
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
    // socials: ISocails[];
}

export enum STATUS {
    ACTIVE = 'active',
    OFFLINE = 'offline',
    IDLE = 'idle'
}

export enum DEPARTMENT {
    FRONT_END = 'Front End',
    BACK_END = 'Back End',
    SALES_MANAGER = 'Sales Manager',
    PROJECT_MANAGER = 'Project Manager',
    DESIGNER = 'Designer'
}

export interface IEmailPhone {
    primary: boolean;
    contact: string;
}

// interface ISocails {
//     google?: string;
//     facebook?: string;
//     linkedin?: string;
// }

export const users: IUser[] = [
    {
        firstName: 'Nicolas',
        lastName: 'Gordon',
        status: STATUS.ACTIVE,
        department: DEPARTMENT.FRONT_END,
        avatar: 'https://i.pravatar.cc/114?img=1',
        bio: 'Internet specialist. Unable to type with boxing gloves on. Music nerd. Coffee ninja. Falls down a lot. Friendly troublemaker.',
        emails: [{primary: false, contact: 'test@test.com'}, {primary: true, contact: 'test@test2.com'}],
        dial: 'random string.com',
        meeting: 'random string.com',
        phones: [{primary: true, contact: '03331234456'}, {primary: true, contact: '03331234456'}],
    },
    {
        firstName: 'Bradley',
        lastName: 'Malone',
        status: STATUS.IDLE,
        department: DEPARTMENT.SALES_MANAGER,
        avatar: 'https://i.pravatar.cc/114?img=2',
        bio: 'Food ninja. Thinker. Zombie geek. Avid student. Typical troublemaker. Future teen idol. Travel lover. Gamer. Incurable internet fanatic.',
        emails: [{primary: true, contact: 'test@test.com'}, {primary: false, contact: 'test@test2.com'}, {primary: false, contact: 'test@test3.com'}],
        dial: 'random string.com',
        meeting: 'random string.com',
        phones: [{primary: false, contact: '03331234456'}, {primary: true, contact: '03331234456'}, {primary: false, contact: '03339876654'}],
    },
    {
        firstName: 'Johannas',
        lastName: 'Stevens',
        status: STATUS.ACTIVE,
        department: DEPARTMENT.PROJECT_MANAGER,
        avatar: 'https://i.pravatar.cc/114?img=3',
        bio: 'Friendly twitter trailblazer. Beer maven. Troublemaker. Introvert. Unapologetic creator.',
        emails: [{primary: true, contact: 'test@test.com'}, {primary: false, contact: 'test@test2.com'}, {primary: false, contact: 'test@test3.com'}],
        dial: 'random string.com',
        meeting: 'random string.com',
        phones: [{primary: false, contact: '03331234456'}, {primary: true, contact: '03331234456'}, {primary: false, contact: '03339876654'}],
    },
    {
        firstName: 'Marvin',
        lastName: 'Lambert',
        status: STATUS.IDLE,
        department: DEPARTMENT.DESIGNER,
        avatar: 'https://i.pravatar.cc/114?img=4',
        bio: 'Student. Troublemaker. Food maven. Social media enthusiast. Twitter advocate. Zombie aficionado.',
        emails: [{primary: true, contact: 'test@test.com'}, {primary: false, contact: 'test@test2.com'}, {primary: false, contact: 'test@test3.com'}],
        dial: 'random string.com',
        meeting: 'random string.com',
        phones: [{primary: false, contact: '03331234456'}, {primary: true, contact: '03331234456'}, {primary: false, contact: '03339876654'}],
    },
    {
        firstName: 'Teresa',
        lastName: 'Lloyd',
        status: STATUS.IDLE,
        department: DEPARTMENT.BACK_END,
        avatar: 'https://i.pravatar.cc/114?img=5',
        bio: 'Social media evangelist. Tv trailblazer. Alcohol geek. Award-winning coffee specialist.',
        emails: [{primary: true, contact: 'test@test.com'}, {primary: false, contact: 'test@test2.com'}, {primary: false, contact: 'test@test3.com'}],
        dial: 'random string.com',
        meeting: 'random string.com',
        phones: [{primary: false, contact: '03331234456'}, {primary: true, contact: '03331234456'}, {primary: false, contact: '03339876654'}],
    },
    {
        firstName: 'Nicolas',
        lastName: 'Gordon',
        status: STATUS.ACTIVE,
        department: DEPARTMENT.FRONT_END,
        avatar: 'https://i.pravatar.cc/114?img=6',
        bio: 'Internet specialist. Unable to type with boxing gloves on. Music nerd. Coffee ninja. Falls down a lot. Friendly troublemaker.',
        emails: [{primary: false, contact: 'test@test.com'}, {primary: true, contact: 'test@test2.com'}],
        dial: 'random string.com',
        meeting: 'random string.com',
        phones: [{primary: true, contact: '03331234456'}, {primary: true, contact: '03331234456'}],
    },
    {
        firstName: 'Bradley',
        lastName: 'Malone',
        status: STATUS.IDLE,
        department: DEPARTMENT.SALES_MANAGER,
        avatar: 'https://i.pravatar.cc/114?img=7',
        bio: 'Food ninja. Thinker. Zombie geek. Avid student. Typical troublemaker. Future teen idol. Travel lover. Gamer. Incurable internet fanatic.',
        emails: [{primary: true, contact: 'test@test.com'}, {primary: false, contact: 'test@test2.com'}, {primary: false, contact: 'test@test3.com'}],
        dial: 'random string.com',
        meeting: 'random string.com',
        phones: [{primary: false, contact: '03331234456'}, {primary: true, contact: '03331234456'}, {primary: false, contact: '03339876654'}],
    },
    {
        firstName: 'Johannas',
        lastName: 'Stevens',
        status: STATUS.ACTIVE,
        department: DEPARTMENT.PROJECT_MANAGER,
        avatar: 'https://i.pravatar.cc/114?img=8',
        bio: 'Friendly twitter trailblazer. Beer maven. Troublemaker. Introvert. Unapologetic creator.',
        emails: [{primary: true, contact: 'test@test.com'}, {primary: false, contact: 'test@test2.com'}, {primary: false, contact: 'test@test3.com'}],
        dial: 'random string.com',
        meeting: 'random string.com',
        phones: [{primary: false, contact: '03331234456'}, {primary: true, contact: '03331234456'}, {primary: false, contact: '03339876654'}],
    },
    {
        firstName: 'Marvin',
        lastName: 'Lambert',
        status: STATUS.IDLE,
        department: DEPARTMENT.DESIGNER,
        avatar: 'https://i.pravatar.cc/114?img=9',
        bio: 'Student. Troublemaker. Food maven. Social media enthusiast. Twitter advocate. Zombie aficionado.',
        emails: [{primary: true, contact: 'test@test.com'}, {primary: false, contact: 'test@test2.com'}, {primary: false, contact: 'test@test3.com'}],
        dial: 'random string.com',
        meeting: 'random string.com',
        phones: [{primary: false, contact: '03331234456'}, {primary: true, contact: '03331234456'}, {primary: false, contact: '03339876654'}],
    },
    {
        firstName: 'Teresa',
        lastName: 'Lloyd',
        status: STATUS.IDLE,
        department: DEPARTMENT.BACK_END,
        avatar: 'https://i.pravatar.cc/114?img=10',
        bio: 'Social media evangelist. Tv trailblazer. Alcohol geek. Award-winning coffee specialist.',
        emails: [{primary: true, contact: 'test@test.com'}, {primary: false, contact: 'test@test2.com'}, {primary: false, contact: 'test@test3.com'}],
        dial: 'random string.com',
        meeting: 'random string.com',
        phones: [{primary: false, contact: '03331234456'}, {primary: true, contact: '03331234456'}, {primary: false, contact: '03339876654'}],
    }
]