'use strict';
const stripe = require('stripe')('sk_test_BOr18UuvTDRzH0MVad0HQKpR');


/**
 * A set of functions called "actions" for `Card`
 */

module.exports = {
  index: async ctx => {
    const customerId = ctx.request.querystring;
    const customerData = await stripe.customers.retrieve(customerId);
    const cardData = customerData.sources.data;
    ctx.send(cardData);
  },
  add: async ctx => {
    const { customer, source } = ctx.request.body;
    const card = await stripe.customers.createSource(customer, { source });
    ctx.send(card);
  }
};
