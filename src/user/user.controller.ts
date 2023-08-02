import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@ApiTags("User")
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    //CREATE USER //FOR EXAMPLE
    @Post("/create")
    async createUser(
        @Body() dto: UserDto
    ) {
        return await this.userService.createUser(dto);
    }
}
