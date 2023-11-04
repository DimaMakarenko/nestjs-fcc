import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDTO } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signIn() {
    return 'Sign In Service';
  }
  signUp(dto: AuthDTO) {
    return 'Sign Up Service';
  }
}
