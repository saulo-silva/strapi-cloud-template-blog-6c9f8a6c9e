'use strict';

/**
 *  global controller
 */

const { factories } = require('@strapi/strapi');

module.exports = factories.createCoreController('api::global.global');
