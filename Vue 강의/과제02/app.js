const app = Vue.createApp({
	data() {
		return {
			outPutA: '',
			outPutB: ''
		}
	},
	methods: {
		showAlert() {
			alert("Button clicked!");
		},
		changeOutPut(event) {
			this.outPutA = event.target.value;
		},
		enterOutPut(event) {
			this.outPutB = event.target.value;
		}
	},
});

app.mount("#assignment");