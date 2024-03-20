if (!customElements.get('simple-quantity-popover')) {
  customElements.define(
    'simple-quantity-popover',
    class SimpleQuantityPopover extends HTMLElement {
      constructor() {
        super();
        console.log('ehyyyy')
        this.mql = window.matchMedia('(min-width: 990px)');
        this.mqlTablet = window.matchMedia('(min-width: 750px)');
        this.button = this.querySelector('.card__information-volume-pricing-note');
        // this.infoButtonMobile = this.querySelector('.quantity-popover__info-button--icon-with-label');
        this.popoverInfo = this.querySelector('.quantity-popover__info');
        this.closeButton = this.querySelector('.button-close');
        this.eventMouseEnterHappened = false;

        if (this.closeButton) {
          this.closeButton.addEventListener('click', this.closePopover.bind(this));
        }

        if (this.popoverInfo && this.button) {
          this.popoverInfo.addEventListener('mouseleave', this.closePopover.bind(this));
        }

        if (this.button) {
          this.button.addEventListener('click', this.togglePopover.bind(this));
        }

        // if (this.infoButtonMobile) {
        //   this.infoButtonMobile.addEventListener('click', this.togglePopover.bind(this));
        // }

        // if (this.infoButtonDesktop && this.mqlTablet.matches) {
        //   this.infoButtonDesktop.addEventListener('mouseenter', this.togglePopover.bind(this));
        //   this.infoButtonDesktop.addEventListener('mouseleave', this.closePopover.bind(this));
        // }
      }

      togglePopover(event) {
        console.log('click')
        event.preventDefault();
        if (event.type === 'mouseenter') {
          this.eventMouseEnterHappened = true;
        }

        if (event.type === 'click' && this.eventMouseEnterHappened) return;

        const button = this.button
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        if ((this.mql.matches && !isExpanded) || event.type === 'click') {
          button.setAttribute('aria-expanded', !isExpanded);
  
          this.popoverInfo.toggleAttribute('hidden');
  
          button.classList.toggle('quantity-popover__info-button--open');

          this.infoButtonDesktop.classList.add('quantity-popover__info-button--icon-only--animation')
        }

        const isOpen = button.getAttribute('aria-expanded') === 'true';

        if (isOpen && event.type !== 'mouseenter') {
          button.focus();
          button.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') {
              this.closePopover(e)
            }
          })
        }
      }

      closePopover(event) {
        event.preventDefault();
        const isButtonChild = this.infoButtonDesktop.contains(event.relatedTarget);
        const isPopoverChild = this.popoverInfo.contains(event.relatedTarget)

        const button = this.infoButtonDesktop && this.mql.matches ? this.infoButtonDesktop : this.infoButtonMobile;

        if (!isButtonChild && !isPopoverChild) {
          button.setAttribute('aria-expanded', 'false');
          button.classList.remove('quantity-popover__info-button--open');
          this.popoverInfo.setAttribute('hidden', '');
          this.infoButtonDesktop.classList.remove('quantity-popover__info-button--icon-only--animation')
        }

        this.eventMouseEnterHappened = false;

        
      }
    }
  );
}
