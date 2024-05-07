class BulkAdd extends HTMLElement {
  constructor() {
    super();
    this.queue = []
    this.requestStarted = false;
    this.ids = []
  }

  startQueue(id, quantity) {
    this.queue.push({id, quantity})
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
    queue.forEach((queueItem) => {
      items[parseInt(queueItem.id)] = queueItem.quantity;
      ids.push(queueItem.id)
    });
    this.queue = this.queue.filter(queueElement => !queue.includes(queueElement));
    const quickOrderList = this.closest('quick-order-list');
    quickOrderList.updateMultipleQty(items, ids)
  }
}

if (!customElements.get('bulk-add')) {
  customElements.define('bulk-add', BulkAdd)
};


