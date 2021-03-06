'use strict';

let redis = require('redis');
let redisClient = null;

if (process.env.REDIS_URL) {
    redisClient = redis.createClient(process.env.REDIS_URL, {no_ready_check: true});
} else {
    redisClient = redis.createClient();
}

redisClient.on('connect', function() {
    let environment = process.env.REDIS_URL ? 'production' : 'developer';
    console.log('Redis %s environment connected', environment);
});

module.exports = redisClient;
