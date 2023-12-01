import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user-service')
export class UserController {
  constructor(private readonly userService: UserService, @Inject('common') private readonly common: {cc: number, aa: number} ) {};

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    console.log(this.common);
    
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id') @Get(':name') @Post('/a')
  findOne(@Param('id') id: string, @Param('name') name: string) {
    return this.userService.findOne(+id, name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
