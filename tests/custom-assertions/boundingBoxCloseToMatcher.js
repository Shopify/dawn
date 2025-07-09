export async function toBeBoundingBoxCloseTo(received, expected, precision = 0) {
  const assertionName = 'toBeBoundingBoxCloseTo';

  // Validate inputs
  if (!received || !expected) {
    return {
      message: () =>
        `${this.utils.matcherHint(assertionName)}\n\n` + 'Expected and received bounding boxes must be defined',
      pass: false,
    };
  }

  const props = ['x', 'y', 'width', 'height'];
  const failures = [];

  // Check each property
  for (const prop of props) {
    if (typeof received[prop] !== 'number' || typeof expected[prop] !== 'number') {
      failures.push(`${prop}: Expected number but got ${typeof received[prop]} and ${typeof expected[prop]}`);
      continue;
    }

    const diff = Math.abs(received[prop] - expected[prop]);
    const expectedDiff = Math.pow(10, -precision) / 2;

    if (diff >= expectedDiff) {
      failures.push(`${prop}: Expected ${expected[prop]} (±${expectedDiff}), but got ${received[prop]}`);
    }
  }

  const pass = failures.length === 0;

  const message = () => {
    const hint = this.utils.matcherHint(assertionName, undefined, undefined, {
      isNot: this.isNot,
    });

    return (
      hint +
      '\n\n' +
      `Expected: ${this.utils.printExpected(expected)}\n` +
      `Received: ${this.utils.printReceived(received)}\n\n` +
      (failures.length > 0 ? `Failures:\n${failures.map((f) => `  • ${f}`).join('\n')}` : '')
    );
  };

  return {
    message,
    pass,
    name: assertionName,
    expected,
    actual: received,
  };
}
