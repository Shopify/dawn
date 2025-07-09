
class ThemePerformance {
  /**
   * @param {string} metricPrefix
   */
  constructor(metricPrefix) {
    this.metricPrefix = metricPrefix;
  }

  /**
   * @param {string} benchmarkName
   * @returns {PerformanceMark}
   */
  createStartingMarker(benchmarkName) {
    const metricName = `${this.metricPrefix}:${benchmarkName}`
    return performance.mark(`${metricName}:start`);
  }

  /**
   * @param {string} benchmarkName
   * @param {Event} event
   * @returns {void}
   */
  measureFromEvent(benchmarkName, event) {
    const metricName = `${this.metricPrefix}:${benchmarkName}`
    const startMarker = performance.mark(`${metricName}:start`, {
      startTime: event.timeStamp
    });

    performance.mark(`${metricName}:end`);

    performance.measure(
      metricName,
      `${metricName}:start`,
      `${metricName}:end`
    );
  }

  /**
   * @param {PerformanceMark} startMarker
   * @returns {void}
   */
  measureFromMarker(startMarker) {
    const metricName = startMarker.name.replace(/:start$/, '');
    const endMarker = performance.mark(`${metricName}:end`);

    performance.measure(
      metricName,
      startMarker.name,
      endMarker.name
    );
  }

  /**
   * @param {string} benchmarkName
   * @param {Function} callback
   * @returns {void}
   */
  measure(benchmarkName, callback) {
    const metricName = `${this.metricPrefix}:${benchmarkName}`
    performance.mark(`${metricName}:start`);

    callback();

    performance.mark(`${metricName}:end`);

    performance.measure(
      benchmarkName,
      `${metricName}:start`,
      `${metricName}:end`
    );
  }
}

export const cartPerformance = new ThemePerformance('cart-performance');
