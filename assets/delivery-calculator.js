class DeliveryCalculator {
  constructor() {
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.calculateAllDeliveries());
    } else {
      this.calculateAllDeliveries();
    }
  }

  calculateAllDeliveries() {
    const deliveryElements = document.querySelectorAll('[id^="delivery-date-"]');
    
    deliveryElements.forEach(element => {
      const blockId = element.id.replace('delivery-date-', '');
      const block = document.querySelector(`[data-block-id="${blockId}"]`);
      
      if (block) {
        const settings = this.extractSettings(block);
        const deliveryDate = this.calculateDeliveryDate(settings);
        element.textContent = deliveryDate;
      }
    });
  }

  extractSettings(block) {
    return {
      deliveryDays: parseInt(block.dataset.deliveryDays) || 2,
      excludeWeekends: block.dataset.excludeWeekends === 'true',
      holidays: block.dataset.holidays ? block.dataset.holidays.split(',').map(date => date.trim()) : []
    };
  }

  calculateDeliveryDate(settings) {
    const today = new Date();
    let deliveryDate = new Date(today);
    let daysAdded = 0;

    while (daysAdded < settings.deliveryDays) {
      deliveryDate.setDate(deliveryDate.getDate() + 1);
      
      if (this.isWorkingDay(deliveryDate, settings)) {
        daysAdded++;
      }
    }

    return this.formatDate(deliveryDate);
  }

  isWorkingDay(date, settings) {
    const dayOfWeek = date.getDay();
    
    if (settings.excludeWeekends && (dayOfWeek === 0 || dayOfWeek === 6)) {
      return false;
    }

    const dateString = this.formatDateForComparison(date);
    if (settings.holidays.includes(dateString)) {
      return false;
    }

    return true;
  }

  formatDate(date) {
    const months = [
      'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
      'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];

    return `livré le ${day} ${month}`;
  }

  formatDateForComparison(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

new DeliveryCalculator();