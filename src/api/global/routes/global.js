'use strict';

/**
 * global router.
 */

const { factories } = require('@strapi/strapi');

module.exports = factories.createCoreRouter('api::global.global');
