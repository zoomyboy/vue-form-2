<template>
	<form :action="action" :method="method" :class="opts.layout" @submit="submit" novalidate slot="slot" enctype="multipart/form-data">
		<slot></slot>
	</form>
</template>
<script>

	import opts from './computed/opts'

	window.customFields = window.customFields != undefined ? window.customFields : [];
	window.globalOptions = window.globalOptions != undefined ? window.globalOptions : [];

	var vfForm = {
		props: {
			name:{
				type:String,
				required:false
			},
			ajax: {
				type: Boolean,
				required: false,
				default: false
			},
			action: {
				type: String
			},
			method: {
				type: String,
				required:false,
				default: 'POST'
			},
			validation: {
				type: Object,
				required:false,
				default: function() {
					return {
					}
				}
			},
			triggers:{
				type: Object,
				required:false,
				default: function() {
					return {
					}
				}
			},
			options:{
				type: Object,
				required:false,
				default: function() {
					return {
					}
				}
			}
		},

		created: function() {
			this.registerInterfieldsRules();
			this.registerTriggers();

		},
		data: function() {
			return {
				globalOptions: globalOptions,
				templates: merge.recursive(fields, customFields),
				isForm: true,
				fields:[],
				errors:[],
				relatedFields:{},
				triggeredFields:{},
				sending:false
			}
		},
		computed: {
			labelClass:require('./computed/label-class'),
			hasErrors: require('./computed/has-errors'),
			server: () => {
				return !this.ajax && !this.client;
			},
			opts,
			pristine: function() {
				return this.fields.length==0;
			}
		},
		methods: {
			fieldClass:require('./methods/field-class'),
			submit:require('./methods/submit'),
			formData:require('./methods/form-data'),
			getField:require('./methods/get-field'),
			reinitForm:require('./methods/reinit-form'),
			registerInterfieldsRules: require('./methods/register-interfields-rules'),
			registerTriggers: require('./methods/register-triggers'),
			childrenOf: require('./methods/children-of'),
			getStatusBar: require('./methods/get-status-bar'),
			dispatch: require('./methods/dispatch'),
			getOptions: opts
		}

	}
</script>
