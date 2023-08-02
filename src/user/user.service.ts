import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>
    ) { }

    //CREATE USER
    async createUser(dto: UserDto) {
        try {
            const newUser = await this.userRepo.create({
                address: dto.address,
                cash1: dto.cash1,
                cash2: dto.cash2,
                cash3: dto.cash3
            })
            await this.userRepo.save(newUser);
            return newUser;
        } catch (err) {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
