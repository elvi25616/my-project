import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
    async createUser(name: string,
        email: string,
        password: string,): Promise<void> {
        //const {name, email, password } = registerUserDto;
        const user = this.create({name,email,password});
        //await this.save(user);

        try {
            await this.save(user);
          } catch (e) {
            if (e.code === 'ER_DUP_ENTRY') {
              throw new ConflictException('This email is already registered');
            }
            throw new InternalServerErrorException();
          }
    }
}