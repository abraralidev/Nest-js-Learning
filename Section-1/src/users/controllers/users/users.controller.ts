import { Controller, Get, Post } from '@nestjs/common';
import { title } from 'process';

@Controller('users')
export class UsersController {

    @Post()
    createUser() {
        return 'This action adds a new user';
    }
    // Get API's
    // step one: create a controller with a route decorator and a method with a route decorator
    // step two: add a method to the controller with a route decorator
    // step three: return a simple object from the method
    // step four: add a route to the method
    // step five: return an object with a nested array from the method
    // step six: return an object with a nested array from the method
    // step seven: return an array of objects from the method


    // @Get()
    // getUsers() {
    //     return {
    //         username: 'John Doe',
    //         email: 'abraralidev@gmail.com'
    //     };
    // }

    // @Get('posts')
    // getUsersPosts() {
    //     return {
    //         username: 'John Doe',
    //         email: 'abraralidev@gmail.com',
    //         post: [{
    //             id: 1,
    //             title: 'My first post',
    //             content: 'This is my first post'
    //         }]
    //     };
    // }

    // @Get('comments')
    // getUsersComments() {
    //     return [
    //         {
    //             id: 1,
    //             title: 'post 1',
    //             content: []
    //         },
    //         {
    //             id: 2,
    //             content: 'This is my second comment'
    //         }

    //     ]
    // }
}
