const app = Vue.createApp({
	data() {
		return {
			inputClass: '',
			isVisible: true,
			bgColor: ''
		}
	},
	methods: {
		toggleVisible() {
			this.isVisible = !this.isVisible;
		}
	},
});

app.mount("#assignment");