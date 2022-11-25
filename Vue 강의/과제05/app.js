const app = Vue.createApp({
	data() {
		return {
			inputTask: "",
			tasks: [],
			isShowList: true
		}
	},
	methods: {
		addTask() {
			this.tasks.push(this.inputTask);
			this.inputTask = '';
		},
		toggleShow() {
			this.isShowList = !this.isShowList;
		}
	},
});

app.mount("#assignment");