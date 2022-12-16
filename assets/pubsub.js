let subscribers = {}

function subscribe(eventName, callback) {
  if (subscribers[eventName] === undefined) {
    subscribers[eventName] = []
  }
  subscribers[eventName].push(callback);
  const index = subscribers[eventName].length - 1
  return {
    unsubscribe() {
      subscribers[eventName].splice(index, 1)
    }
  }
};

function publish(eventName, data) {
  if (subscribers[eventName]) {
    subscribers[eventName].forEach((callback) => {
      callback(data)
    })
  }
}

export {
  subscribe,
  publish
}
