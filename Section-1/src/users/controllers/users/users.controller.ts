import { Controller, Get, Post, Req, Res, Body, Param, Query, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './dtos/CreateUser.dto';



@Controller('users')
export class UsersController {
    //================================================================================================   
    // Post API's
    // create user by passing data in body according to nestjs example of passing data in body with validation
    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData.email);
        return {
            message: 'User created'
        };
    }


    // example of post request

    // @Post('create')
    // createUser(@Req() request: Request, @Res() response: Response) {
    //     console.log(request.body);
    //     response.send({ message: 'User created' });
    // }

    //================================================================================================   
    // Get API's

    // get users by id according to nestjs example of passing id as a query parameter
    @Get()
    getUserById(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
        console.log(sortDesc);
        return {};
    }


    // get users by id according to nestjs example of passing id as a parameter
    // @Get(':id')
    // getUserById(@Param('id', ParseIntPipe) id: number) {
    //     console.log(id);
    //     return {
    //         id: id,

    //     };
    // }

    // get users by id according to express
    // @Get(':id')
    // getUserById(@Param() request: Request) {
    //     console.log(request.params);
    //     return {
    //         id: request.params.id
    //     };
    // }
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
