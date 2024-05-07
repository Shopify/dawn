class BulkAdd extends HTMLElement {
  constructor() {
    super();
    this.queue = []
    this.requestStarted = false;
    this.ids = []
  }

  startQueue(id, quantity, event) {
    this.queue.push({id, quantity, event})
    const interval = setInterval(() => {
      if (this.queue.length > 0) {
        if (!this.requestStarted)  {
          this.sendRequest(this.queue)
        }
      } else {
        clearInterval(interval)
      }
    }, 250)
  }


  sendRequest(queue) {
    this.requestStarted = true;
    const items = {}
    const ids = []
    const events = []
    queue.forEach((queueItem) => {
      items[parseInt(queueItem.id)] = queueItem.quantity;
      ids.push(queueItem.id)
      events.push(queueItem.event)
    });
    this.queue = this.queue.filter(queueElement => !queue.includes(queueElement));
    const element = this.closest('quick-order-list') || this.closest('quick-add-bulk');
    element.updateMultipleQty(items, ids, events)
  }
}

if (!customElements.get('bulk-add')) {
  customElements.define('bulk-add', BulkAdd)
};


