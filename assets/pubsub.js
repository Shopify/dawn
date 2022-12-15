class PubSub {
  subscribers = {}
  
  subscribe(eventName, callback) {
    if (!Array.isArray(this.subscribers[eventName])) {
      this.subscribers[eventName] = []
    }
    this.subscribers[eventName].push(callback);
  };

  unsubscribe(eventName) {
    const index = this.subscribers[eventName].length - 1;
    this.subscribers[eventName].splice(index, 1);
  }

  publish(eventName, data) {
    if (this.subscribers[eventName]) {
      this.subscribers[eventName].forEach((callback) => {
        callback(data)
      })
    } else {
      return
    }
  }
}

export default new PubSub();
