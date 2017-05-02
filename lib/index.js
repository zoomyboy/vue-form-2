import formTemplate from './templates/form'
import statusBar from './components/status-bar'
import submit from './components/submit'
import text from './components/fields/text'
import password from './components/fields/password'
import fields from './templates/fields'

exports.install = function(Vue, globalOptions, customFields) {

	window.customFields = customFields != undefined ? customFields : [];
	window.globalOptions = globalOptions != undefined ? globalOptions : [];

	Vue.component('vf-form',require('./form.vue'));

	Vue.component('vf-text',text());
	Vue.component('vf-email',require('./components/fields/email')());
	Vue.component('vf-number',require('./components/fields/number')());
	Vue.component('vf-password',password());
	Vue.component('vf-file',require('./components/fields/file')());
	Vue.component('vf-textarea',require('./components/fields/textarea')());
	Vue.component('vf-select',require('./components/fields/select')());
	Vue.component('vf-buttons-list',require('./components/fields/buttons-list')());
	Vue.component('vf-date',require('./components/fields/date')());
	Vue.component('vf-checkbox',require('./components/fields/checkbox')());

	Vue.component('vf-status-bar', statusBar);
	Vue.component('vf-submit',submit);


}


