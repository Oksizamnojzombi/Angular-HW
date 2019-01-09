interface AdminInterface {
    name: string;
    email: string;
    password: string;
    readonly type: string;
}

let admin: AdminInterface = {
    name: 'Zombie',
    email: 'zombie@zombie.com',
    password: 'trololo',
    type: 'admin'
};

