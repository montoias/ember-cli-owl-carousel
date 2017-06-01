/* eslint-env node */

module.exports = {
  description: 'add owl.carousel bower package',

  afterInstall() {
    return this.addBowerPackageToProject('owl.carousel', '~2.2.1');
  }
};
