import { Redis } from 'ioredis';
import { RedisClient } from './redis-client.provider';
export declare class RedisService {
    private readonly redisClient;
    constructor(redisClient: RedisClient);
    getClient(clientName?: string): Redis;
    getClients(): Map<string, Redis>;
}
