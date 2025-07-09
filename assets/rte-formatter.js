/**
 * A custom element that formats rte content for easier styling
 */
class RTEFormatter extends HTMLElement {
  connectedCallback() {
    this.querySelectorAll('table').forEach(this.#formatTable);
  }

  /**
   * Formats a table for easier styling
   * @param {HTMLTableElement} table
   */
  #formatTable(table) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('rte-table-wrapper');
    const parent = table.parentNode;
    if (parent) {
      parent.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
  }
}

if (!customElements.get('rte-formatter')) {
  customElements.define('rte-formatter', RTEFormatter);
}
