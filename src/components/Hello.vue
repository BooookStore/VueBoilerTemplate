<template>
    <div>
        <p>Hello, Vue !</p>
        <p>Support</p>
        <ul>
            <li v-for="(content, key) in support" :key="key">{{content}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class Hello extends Vue {

        // noinspection JSMethodCanBeStatic, JSUnusedGlobalSymbols
        public data(): Object {
            return {
                message: "This is Vue Boiler Template.",
                support: [
                    "TypeScript",
                    "scss",
                    "sass",
                    "decorator"
                ]
            }
        }

    }
</script>

<style scoped lang="scss">

</style>