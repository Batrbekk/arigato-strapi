'use strict';

/**
 * travel-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::travel-list.travel-list');
