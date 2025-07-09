import { Component } from '@theme/component';

/**
 * A custom element that renders a video background.
 *
 * @typedef {object} Refs
 * @property {HTMLElement[]} videoSources - The video sources.
 * @property {HTMLVideoElement} videoElement - The video element.
 *
 * @extends Component<Refs>
 */
export class VideoBackgroundComponent extends Component {
  requiredRefs = ['videoSources', 'videoElement'];

  connectedCallback() {
    super.connectedCallback();

    const { videoSources, videoElement } = this.refs;

    for (const source of videoSources) {
      const { videoSource } = source.dataset;

      if (videoSource) source.setAttribute('src', videoSource);
    }

    videoElement.load();
  }
}

if (!customElements.get('video-background-component')) {
  customElements.define('video-background-component', VideoBackgroundComponent);
}
