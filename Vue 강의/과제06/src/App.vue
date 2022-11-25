<template>
    <div>
        <user-data @add-user="addUser"></user-data>
        <active-user v-for="user in users" :key="user.id" :name="user.name" :age="user.age"></active-user>
    </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
    components: { UserData, ActiveUser },
    data() {
        return {
            users: [],
        };
    },
    methods: {
        addUser(newId, newName, newAge) {
            this.users.unshift({
                id: newId,
                name: newName,
                age: newAge,
            });
        },
    },
};
</script>
