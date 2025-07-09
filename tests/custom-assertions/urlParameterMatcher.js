export async function toHaveUrlParameter(page, paramName, expectedValue, options = {}) {
  const assertionName = 'toHaveUrlParameter';
  const timeout = options.timeout ?? 5000;

  let pass = false;
  let actualValue = null;

  try {
    // Wait for the URL to contain the expected parameter value
    await page.waitForFunction(
      ({ paramName, expectedValue }) => {
        const url = new URL(window.location.href);
        return url.searchParams.get(paramName) === expectedValue;
      },
      { paramName, expectedValue },
      { timeout }
    );

    // If waitForFunction succeeds, we know the value matches
    actualValue = expectedValue;
    pass = true;
  } catch (error) {
    // If waitForFunction times out, get the current value
    actualValue = await page.evaluate((paramName) => {
      const url = new URL(window.location.href);
      return url.searchParams.get(paramName);
    }, paramName);
    pass = false;
  }

  const message = () => {
    const hint = this.utils.matcherHint(assertionName, 'page', `'${paramName}', '${expectedValue}'`, {
      isNot: this.isNot,
    });

    return (
      hint +
      '\n\n' +
      `Expected URL parameter '${paramName}' to have value: ${this.utils.printExpected(expectedValue)}\n` +
      `Received: ${this.utils.printReceived(actualValue)}\n` +
      `Current URL: ${page.url()}`
    );
  };

  return {
    message,
    pass,
    name: assertionName,
    expected: expectedValue,
    actual: actualValue,
  };
}
