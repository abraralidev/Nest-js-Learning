import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [{
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com'
    },
    {
        id: 2,
        name: 'John Doe 2',
        email: 'johndoe2@gmail.com'
    },
    
];
    fetchUsers() {
        return this.users;
    }
}
