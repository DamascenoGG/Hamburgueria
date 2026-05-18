import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async getUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        createdAt: true,
      },
    });
  }

  async getUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        createdAt: true,
      },
    });
  }

  async createUser(data: { email: string; name?: string; image?: string }) {
    return this.prisma.user.create({
      data,
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        createdAt: true,
      },
    });
  }

  async updateUser(
    id: string,
    data: { name?: string; image?: string; email?: string },
  ) {
    return this.prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
      },
    });
  }
}
