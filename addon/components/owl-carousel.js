import Ember from 'ember';
import layout from '../templates/components/owl-carousel';

const { Component, run, observer } = Ember;

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
  startIndex: null,
  currentIndex: null,
  carouselOptions: {},

  onCurrentIndexChange: observer('currentIndex', function() {
    if (this.get('currentIndex')) {
      this.get('carousel').trigger('to.owl.carousel', this.get('currentIndex'));
    }
  }),

  onInitialized() {
    if (this.get('startIndex')) {
      this.get('carousel').trigger('to.owl.carousel', this.get('startIndex'));
      this.set('currentIndex', this.get('startIndex'));
    }
  },
  onDragStart() {},
  onDragEnd() {},
  onWillChange() {},
  onDidChange() {},

  didInsertElement() {
    this._super(...arguments);

    run.scheduleOnce('afterRender', this, () => {
      this.set('carousel', this.$());
      this.get('carousel').on('initialized.owl.carousel', this.get('onInitialized').bind(this));
      this.get('carousel').on('drag.owl.carousel', this.get('onDragStart').bind(this));
      this.get('carousel').on('dragged.owl.carousel', this.get('onDragEnd').bind(this));
      this.get('carousel').on('change.owl.carousel', this.get('onWillChange').bind(this));
      this.get('carousel').on('changed.owl.carousel', this.get('onDidChange').bind(this));

      this.get('carousel').owlCarousel({
        ...this.getProperties('loop', 'dots', 'dotsEach', 'items', 'autoWidth', 'margin', 'responsive', 'center'),
        ...this.get('carouselOptions')
      });
    });
  }
});
