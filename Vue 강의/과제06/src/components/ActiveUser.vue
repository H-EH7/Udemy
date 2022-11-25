<template>
    <div>
        <h2><strong>Name:</strong> {{ name }}</h2>
        <h3><strong>Age:</strong> {{ age }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            String,
            require: true,
        },
        age: {
            Number,
            require: true,
        },
    },
};
</script>
