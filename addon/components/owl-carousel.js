import Ember from 'ember';
import layout from '../templates/components/owl-carousel';

const { Component, run } = Ember;

export default Component.extend({
  layout,
  classNameBindings: ['carouselClassName'],
  carousel: null,

  carouselClassName: 'owl-carousel owl-theme',
  center: false,
  loop: false,
  dots: false,
  dotsEach: false,
  autoWidth: false,
  items: 3,
  margin: 10,
  responsive: {},

  carouselOptions: {},

  onInitialized() {},

  didInsertElement() {
    this._super(...arguments);

    run.scheduleOnce('afterRender', this, () => {
      this.set('carousel', this.$());
      this.get('carousel').on('initialized.owl.carousel', () => this.get('onInitialized')());

      this.get('carousel').owlCarousel({
        ...this.getProperties('loop', 'dots', 'dotsEach', 'items', 'autoWidth', 'margin', 'responsive', 'center'),
        ...this.get('carouselOptions')
      });
    });
  }
});
