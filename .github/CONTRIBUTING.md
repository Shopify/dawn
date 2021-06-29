# Contributing

[Before contributing](#before-contributing) |
[Scope](#scope) |
[Theme code principles](#theme-code-principles) |
[Contributing code](#contributing-code) |
[Reporting a bug](#reporting-a-bug) |
[Reviewing](#reviewing)

We're really glad you're reading this, because we would love to have more developers contribute to this theme! If you're passionate about building for the next million entrepreneurs, you're in the right place.

## Before contributing

If you encounter a bug or think of a useful feature for Dawn, please [create a new issue](https://github.com/Shopify/dawn/issues/new). Creating an issue before jumping into code ensures we can discuss it and determine whether it aligns with the direction of the theme.

If you want to contribute to the theme, regardless of whether it's a small bug fix or correcting a typo, please feel free to do so. Any help goes a long way! Also, contributions aren't necessarily all code related. Other contributions can be in the form of issues, pull requests, discussions, etc.

## Scope

This Github repository exists for the theme development community to discuss and solve problems directly related to Dawn. It **is not the place** to discuss general theme development problems, nor the place to seek help for non-Dawn related problems.

Shopify theme development is a big topic and it's completely normal that you will encounter problems which might require you to reach out for help. In fact, we provide several knowledge and support platforms for theme development already:

* [Shopify Development](https://shopify.dev/themes)
* [Shopify Help Center](https://help.shopify.com/themes)
* [Shopify Forum](https://ecommerce.shopify.com/forums)
* [Shopify Experts](https://experts.shopify.com/)

## Theme code principles

Before contributing to Dawn, please read the following theme code principles to better understand our fundamental approach to theme development. The expectation is that you follow these principles as you build for Dawn.

### Why these principles?

Browsers provide APIs to solve many problems: from [WebGL](https://en.wikipedia.org/wiki/WebGL) and [WASM](https://en.wikipedia.org/wiki/WebAssembly)-powered apps to static websites. The best APIs to use depends on the thing you’re building. Themes power ecommerce websites. In most cases, [Web-native](https://docs.google.com/document/d/11c0EpBmzIPiNrt8hHFz3pnTmEfC7vsC4kktZFoPhhPI/edit#heading=h.fdenrwz0rwne) is a perfect fit for ecommerce websites. Ecommerce needs incredibly fast websites for mostly “logged out” traffic.

### Web-native in its purest form

_The most important principle._

Themes run on the [evergreen Web](https://www.w3.org/2001/tag/doc/evergreen-web/). We leverage the latest web browsers to their fullest, while maintaining support for the older ones through progressive enhancement—not polyfills.

We write bespoke Web-native code with no abstractions. Frameworks, libraries, and dependencies don’t belong in our themes.

We engage with the browser ecosystem on behalf of our merchants to make Web-native ecommerce the best it can be.

“Don’t repeat yourself” is an anti-pattern. We do our utmost best to do more with less, but we don’t build abstractions around repetition. Instead, we use linting and testing to enforce consistently-good and up-to-date Web-native code.

### Lean, fast, and reliable

_The principle requirement._

Code must be lean, fast, and reliable. Our targets include:

* Zero [Cumulative Layout Shift](https://web.dev/cls/)
* No DOM manipulation before user input
* No render-blocking JavaScript
* No [long tasks](https://developer.mozilla.org/en-US/docs/Web/API/Long_Tasks_API)

Functionality and design defaults to “no” until it meets this requirement. Code ships on quality.

We relentlessly and continuously optimize code within the constraint of being Web-native. If ever there is a feature that browsers have not made fast yet, we either don’t use it, or use it “as is” if it is fast enough. We trust that browsers will get faster over time.

Themes must be built with purpose. They shouldn’t support each and every feature in Shopify.

### JavaScript not required, fails gracefully

_NoJS is our baseline._

We extract every bit of speed and functionality out of HTTP, semantic HTML, and CSS before writing our first line of JavaScript.

JavaScript can only be used to progressively enhance features. JavaScript cannot be required to find or purchase products. And the little JavaScript that we use must always fail gracefully, such that every browser gets the most “enhanced” experience that it can within the capabilities that it has.

>:information_source: We do so not because we expect buyers to experience our storefronts with JavaScript disabled, but because it keeps us aligned with the other principles: writing fast, server-rendered, Web-native code.

### Server-rendered

_Our main constraint._

HTML must be rendered by Shopify servers using [Liquid](https://shopify.dev/api/liquid). Business logic and platform primitives such as translations and money formatting don’t belong on the client.

Server-rendered doesn’t imply “full page reload”. Async and on-demand rendering of parts of the page is OK, but we do it sparingly as a progressive enhancement.

### Functional, not pixel-perfect

_No buyer is left behind._

The Web doesn’t require each page to be rendered pixel-perfect by each browser engine. Using semantic markup, progressive enhancement, and clever design, we ensure that themes remain functional regardless of the browser.

And since legacy browsers are often the slowest, we don’t burden them with polyfills. We rely instead on the fail-open nature of the Web to provide them with a “minimal but functional” experience.

## Contributing code

You can follow these steps to go from setting up a store to creating a pull request for Dawn.

>:information_source: We'll assume you're already set up with Git and GitHub (if you're not familiar with these, [start with these docs](https://docs.github.com/en/github/getting-started-with-github/quickstart/set-up-git)).

1. Set up a [development store](https://shopify.dev/themes/tools/development-stores) so you can test your code changes (assuming you don't already have a store).
2. Install the [Shopify CLI](https://github.com/Shopify/shopify-cli) by following [these steps](https://shopify.dev/themes/tools/cli/installation).
3. Fork the repository, clone it and create a new branch:
```sh
git clone git@github.com:your-username/dawn.git
cd dawn
git checkout -b your-new-branch-name
```
4. Launch a development server:
```sh
shopify theme serve
```
5. Add your changes to the codebase.
6. Commit your changes:
```sh
git commit -a -m="Your commit message"
```
7. Push your commit to your forked repository:
```sh
git push origin your-new-branch-name
```
8. Open a pull request. See [GitHub's official documentation](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) for more details.
9. Before you can merge your pull request, you must sign Shopify's [Contributor License Agreement (CLA)](https://cla.shopify.com/).

## Reporting a bug

Bugs are tracked as [GitHub issues](https://github.com/Shopify/dawn/issues). Search open issues to see if someone else has reported a similar bug. If it's something new, [open an issue](https://github.com/Shopify/dawn/issues/new). We'll use the issue to have a conversation about the problem you want to fix.

When creating a new issue, please ensure the issue is clear and include additional details to help maintainers reproduce it:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps.** Include links to files, or copy/pasteable snippets. If you're providing snippets in the issue, use Markdown code blocks.
* **Describe the behavior you observed** after following the steps and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see** instead and why.
* **Include screenshots and animated GIFs** where possible.

## Reviewing

We (the Themes team) review every single PR. The purpose of reviews is to create the best version of Dawn we can for merchants, developers, and others who use it.

:yellow_heart: Reviews are always respectful, acknowledging that everyone did the best possible job with the knowledge they had at the time.
:yellow_heart: Reviews discuss content, not the person who created it.
:yellow_heart: Reviews are constructive and start conversation around feedback.

### Self review

You should always review your own PR first.

For code changes, make sure that you:
- [ ] Confirm that the changes meet our [theme code principles](#theme-code-principles).
- [ ] Check new or updated Liquid docs to confirm that the code used is up to date and isn't deprecated.
- [ ] If there are any failing checks in your PR, troubleshoot them until they're all passing.
- [ ] Add @Shopify/themes-front-end-developers as a reviewer.

### Pull request template

When you open a pull request, you must fill out the "Ready for review" template before we can review your PR. This template helps reviewers understand your changes and the purpose of your pull request.

### Suggested changes

We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.

As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
