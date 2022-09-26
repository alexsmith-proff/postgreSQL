import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    create(@Body() user: IUser) {
        return this.userService.createUser(user)
    }

    @Get(':id')
    findUserById(
        @Param('id') id: string
    ) {
        return this.userService.getUserByID(id)
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() user:IUser
    ) {
        return this.userService.updateUser(id, user)
    }

    @Delete(':id')
    delete(
        @Param('id') id: string
    ) {
        return this.userService.deleteUser(id)
    }

}
