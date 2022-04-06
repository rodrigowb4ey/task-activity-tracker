<template>
    <header>
        <h1>
            <img src="../assets/aluratrackerlogo.png">
        </h1>
        <button class="button" @click="changeTheme">
            {{ buttonText }}
        </button>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SideBar',
    emits: ['whenChangingTheme'],
    data() {
        return {
            darkModeIsActive: false
        }
    },
    computed: {
        buttonText() {
            if (this.darkModeIsActive) {
                return 'Light Theme'
            } else {
                return 'Dark Theme'
            }
        }
    },
    methods: {
        changeTheme() {
            this.darkModeIsActive = !this.darkModeIsActive;
            this.$emit('whenChangingTheme', this.darkModeIsActive);
        }
    }
})

</script>

<style scoped>
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}
@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>