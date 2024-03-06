class ProductShippingCountdown extends HTMLElement {
  constructor() {
    super();
    this.intervalId = null;
  }
  connectedCallback() {
    this.data = {
      message: this.dataset.message,
      timeThreshold: this.dataset.timeThreshold,
      timeZone: this.dataset.timeZone,
      showOnWeekends: this.dataset.showOnWeekends.toLowerCase() === 'true',
      excludedDates: this.dataset.excludedDates.split(',').map(date => date.trim()),
    }

    this.updateMessage();
    this.intervalId = setInterval(() => this.updateMessage(), 60000);
  }
  disconnectedCallback() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  get timeThreshold() {
    const [hours, minutes] = this.data.timeThreshold.split(':').map(Number)
    const timeZone = this.data.timeZone

    const dateOptions = {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }
    const formatter = new Intl.DateTimeFormat('en-US', dateOptions)
    const formattedDate = formatter.format(new Date())
    const dateParts = formattedDate.match(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2}):(\d{2})/);

    const threshold = new Date(`${dateParts[3]}-${dateParts[1]}-${dateParts[2]}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00Z`);
    threshold.setTime(threshold.getTime() + threshold.getTimezoneOffset() * 60 * 1000)
    return threshold
  }
  get isVisible() {
    // Returns true if current time is within the threshold
    const now = new Date()

    // Weekend check
    const isWeekend = now.getDay() === 0 || now.getDay() === 6
    if (isWeekend && !this.data.showOnWeekends) return false

    // Excluded dates check
    if (this.data.excludedDates.length) {
      const todayFormatted = now.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })
      if (this.data.excludedDates.includes(todayFormatted)) return false
    }

    return now < this.timeThreshold
  }
  get messageCountdownVariable() {
    // Returns replacement for {countdown} in the message
    // {countdown} -> '3 hours, 2 minutes'
    const now = new Date()
    const diff = this.timeThreshold - now
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff / (1000 * 60)) % 60)

    const hoursString = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : ''
    const minutesString = minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : ''
    const separator = hoursString && minutesString ? ', ' : ''
    return `${hoursString}${separator}${minutesString}`
  }
  get messageTimeVariable() {
    const options = { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: this.data.timeZone };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(this.timeThreshold);
  }
  get formattedMessage() {
    // Returns message with countdown and time variables replaced
    const message = this.data.message
      .replace('{countdown}', this.messageCountdownVariable)
      .replace('{time}', this.messageTimeVariable)

    return message
  }
  updateMessage() {
    console.log('updating message')
    if (this.isVisible) {
      this.innerText = this.formattedMessage;
    }
  }
}

customElements.define('product-shipping-countdown', ProductShippingCountdown)
