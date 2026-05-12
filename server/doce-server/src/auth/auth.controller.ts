import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('user/:id')
  getUserById(@Param('id') id: string) {
    return this.authService.getUserById(id);
  }

  @Get('user/email/:email')
  getUserByEmail(@Param('email') email: string) {
    return this.authService.getUserByEmail(email);
  }

  @Post('register')
  createUser(@Body() data: { email: string; name?: string; image?: string }) {
    return this.authService.createUser(data);
  }

  @Patch('user/:id')
  updateUser(
    @Param('id') id: string,
    @Body() data: { name?: string; image?: string; email?: string },
  ) {
    return this.authService.updateUser(id, data);
  }
}
