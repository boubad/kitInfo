import 'bootstrap';
import {Aurelia} from 'aurelia-framework';
//
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
		.plugin('aurelia-animator-css')
    .plugin('aurelia-validation', (config) => { config.useLocale('fr-FR') })
		.feature('./src/resources');

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(a => a.setRoot('./src/app'));
}
