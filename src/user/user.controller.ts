import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, OnModuleInit, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginGuard } from 'src/login.guard';

@Controller('user-service')
export class UserController implements OnModuleInit {
  constructor(private readonly userService: UserService, @Inject('common') private readonly common: {cc: number, aa: number} ) {};

  onModuleInit() {
      console.log('onModuleInit-user');
      
  }
  @UseGuards(LoginGuard)
  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  findAll() {
    return this.userService.findAll();
  }

  @Get('id:id/name/:name')
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
