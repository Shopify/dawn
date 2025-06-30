
if (!customElements.get('media-gallery')) {
  function debounce(fn, delay) {
    let timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, arguments), delay);
    };
  }

  customElements.define(
    'media-gallery',
    class MediaGallery extends HTMLElement {
      constructor() {
        super();
        this.elements = {
          liveRegion: this.querySelector('[id^="GalleryStatus"]'),
          viewer: this.querySelector('[id^="GalleryViewer"]'),
          thumbnails: this.querySelector('[id^="GalleryThumbnails"]'),
        };
        this.mql = window.matchMedia('(min-width: 750px)');
        if (!this.elements.thumbnails) return;

        this.elements.viewer.addEventListener('slideChanged', debounce(this.onSlideChanged.bind(this), 500));
        this.elements.thumbnails.querySelectorAll('[data-target]').forEach((mediaToSwitch) => {
          mediaToSwitch
            .querySelector('button')
            .addEventListener('click', this.setActiveMedia.bind(this, mediaToSwitch.dataset.target, false));
        });
        if (this.dataset.desktopLayout?.includes('thumbnail') && this.mql.matches) this.removeListSemantic?.();
      }

      onSlideChanged(event) {
        const thumbnail = this.elements.thumbnails.querySelector(
          `[data-target="${event.detail.currentElement.dataset.mediaId}"]`
        );
        this.setActiveThumbnail(thumbnail);
      }

      setActiveMedia(mediaId, prepend) {
        const activeMedia =
          this.elements.viewer.querySelector(`[data-media-id="${mediaId}"]`) ||
          this.elements.viewer.querySelector('[data-media-id]');
        if (!activeMedia) return;

        this.elements.viewer.querySelectorAll('[data-media-id]').forEach((el) =>
          el.classList.remove('is-active')
        );
        activeMedia.classList.add('is-active');

        if (prepend) {
          if (activeMedia.parentElement.firstChild !== activeMedia) {
            activeMedia.parentElement.prepend(activeMedia);
          }
          if (this.elements.thumbnails) {
            const activeThumbnail = this.elements.thumbnails.querySelector(`[data-target="${mediaId}"]`);
            if (activeThumbnail && activeThumbnail.parentElement.firstChild !== activeThumbnail) {
              activeThumbnail.parentElement.prepend(activeThumbnail);
            }
          }
          if (this.elements.viewer.slider) this.elements.viewer.resetPages?.();
        }

        this.preventStickyHeader();
        window.setTimeout(() => {
          if (!this.mql.matches || this.elements.thumbnails) {
            activeMedia.parentElement.scrollTo({ left: activeMedia.offsetLeft });
          }
          const rect = activeMedia.getBoundingClientRect();
          if (rect.top > -0.5) return;
          const top = rect.top + window.scrollY;
          window.scrollTo({ top: top, behavior: 'smooth' });
        });
        this.playActiveMedia(activeMedia);

        if (!this.elements.thumbnails) return;
        const activeThumbnail = this.elements.thumbnails.querySelector(`[data-target="${mediaId}"]`);
        this.setActiveThumbnail(activeThumbnail);
      }

      setActiveThumbnail(thumbnail) {
        if (!thumbnail) return;
        this.elements.thumbnails.querySelectorAll('[data-target]').forEach((el) =>
          el.classList.remove('is-active')
        );
        thumbnail.classList.add('is-active');
      }

      playActiveMedia(media) {
        if (!media) return;
        const video = media.querySelector('video');
        if (video) video.play();
      }

      preventStickyHeader() {
        // Placeholder if needed
      }
    }
  );
}
<script src="{{ 'media-gallery.js' | asset_url }}" defer="defer"></script>
