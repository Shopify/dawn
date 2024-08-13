/**
 * List of subscribers for each event.
 * @type {Object<string, Array<function>>}
 */
let subscribers = {};

/**
 * Subscribe to an event.
 * @param {string} eventName - Name of event to subscribe to.
 * @param {Function} callback - Callback function to execute on event.
 * @returns {Function} Unsubscribe function.
 */
function subscribe(eventName, callback) {
  if (subscribers[eventName] === undefined) {
    subscribers[eventName] = [];
  }

  subscribers[eventName] = [...subscribers[eventName], callback];

  /** Unsubscribe from an event. Remove callback from event name in subscribers array. */
  return function unsubscribe() {
    subscribers[eventName] = subscribers[eventName].filter((cb) => {
      return cb !== callback;
    });
  };
}

/**
 * Publish an event.
 * @param {string} eventName - Name of event to publish.
 * @param {any} data - Data to pass to subscribers.
 */
function publish(eventName, data) {
  if (subscribers[eventName]) {
    subscribers[eventName].forEach((callback) => {
      callback(data);
    });
  }
}
