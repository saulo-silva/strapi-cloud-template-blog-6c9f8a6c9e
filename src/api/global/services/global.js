'use strict';

/**
 * global service.
 */

const { factories } = require('@strapi/strapi');

module.exports = factories.createCoreService('api::global.global');
