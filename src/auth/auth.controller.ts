import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  signUp(@Body() dto: AuthDTO) {
    return this.authService.signUp(dto);
  }
  @HttpCode(HttpStatus.OK)
  @Post('signIn')
  signIn(@Body() dto: AuthDTO) {
    return this.authService.signIn(dto);
  }
}
