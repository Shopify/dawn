class BulkAdd extends HTMLElement {
  constructor() {
    super();
    this.queue = []
    this.requestStarted = false;
  }

  startQueue(id, quantity) {
    this.queue.push({id, quantity})
    const int = setInterval(() => {
      if (this.queue.length > 0) {
        if (!this.requestStarted)  {
          this.sendRequest(this.queue)
        }
      } else {
        clearInterval(int)
      }
    }, 250)
  }


  sendRequest(queue) {
    this.requestStarted = true;
    const items = {}
    const ids = []
    queue.forEach((q) => {
      items[parseInt(q.id)] = q.quantity;
      ids.push(q.id)
    });
    this.queue = this.queue.filter(q => !queue.includes(q));
    this.updateMultipleQty(items, ids)
  }
}

customElements.define('bulk-add', BulkAdd);