<template>
    <div>
        <label>name</label>
        <input type="text" v-model="enteredName" />
        <label>age</label>
        <input type="text" v-model="enteredAge" />
        <button @click="addUser">Add</button>
    </div>
</template>

<script>
export default {
    emits: ["add-user"],
    data() {
        return {
            generatedId: 0,
            enteredName: "",
            enteredAge: null,
        };
    },
    methods: {
        addUser() {
            this.$emit("add-user", this.generatedId, this.enteredName, this.enteredAge);
            this.generatedId++;
        },
    },
};
</script>
