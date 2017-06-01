/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-owl-carousel',

  included(app) {
    this._super.included.apply(this, arguments);

    if (typeof this._findHost === 'function') {
      app = this._findHost();
    } else {
      let current = this;

      do {
        app = current.app || app;
      } while (current.parent.parent && (current = current.parent));
    }

    app.import(`${app.bowerDirectory}/owl.carousel/dist/assets/owl.carousel.min.css`);
    app.import(`${app.bowerDirectory}/owl.carousel/dist/assets/owl.theme.default.min.css`);

    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import(`${app.bowerDirectory}/owl.carousel/dist/owl.carousel.min.js`);
    }
  }
};
