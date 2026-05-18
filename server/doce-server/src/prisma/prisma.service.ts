import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool, PoolConfig } from 'pg';
import { PrismaClient } from '../../generated/prisma/index.js';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private prisma: PrismaClient;
  private pool: Pool;

  constructor() {
    const poolConfig: PoolConfig = {
      connectionString: process.env.DATABASE_URL,
    };
    this.pool = new Pool(poolConfig);
    const adapter = new PrismaPg(this.pool);
    this.prisma = new PrismaClient({ adapter });
  }

  async onModuleInit() {
    await this.prisma.$connect();
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
    await this.pool.end();
  }

  get user() {
    return this.prisma.user;
  }

  get account() {
    return this.prisma.account;
  }

  get session() {
    return this.prisma.session;
  }

  get verificationToken() {
    return this.prisma.verificationToken;
  }
}
