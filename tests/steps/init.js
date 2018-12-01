let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.restaurants_api   = "https://qotj4xds8h.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
  process.env.restaurants_table = "restaurants-dev-ryan"
  process.env.AWS_REGION        = "eu-west-1"
  process.env.order_events_stream = 'orders-dev-ryan'
  process.env.restaurant_notification_topic = 'restaurants-dev-ryan'
  process.env.TEST_ROOT = "https://qotj4xds8h.execute-api.eu-west-1.amazonaws.com/dev"
  
  initialized = true
}

module.exports = {
  init
}