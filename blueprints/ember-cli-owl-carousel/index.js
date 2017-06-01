/* eslint-env node */

module.exports = {
  description: 'add owl.carousel bower package',

  normalizeEntityName() {},

  afterInstall() {
    return this.addBowerPackageToProject('owl.carousel', '~2.2.1');
  }
};
