import { Injectable } from '@nestjs/common';
import * as Redis from 'ioredis';

@Injectable()
export class CacheService {
  private redis: Redis.Redis;

  constructor() {
    this.redis = new Redis();
  }

  async get(key: string): Promise<string | null> {
    return this.redis.get(key);
  }

  async set(key: string, value: string, ttl?: number): Promise<void> {
    await this.redis.set(key, value, 'EX', ttl || 3600);
  }

  async del(key: string): Promise<void> {
    await this.redis.del(key);
  }
}
