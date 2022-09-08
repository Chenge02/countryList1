<template>
    <div id="app">
        <h1>Countries</h1>
        <ul v-for="country of countries" :key="country.id">
            <button @click="getDetails">
                {{country.name}}
            </button>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

const baseURL = 'https://restcountries.com/v2/all'
export default {
    data() {
        return {
            countries: [10],
        };
    },
    async created() {
        try {
            const res = await axios.get(baseURL);
            this.countries = res.data;
        } catch (err) {
            console.log(e);
        }
    },
    methods: {
        getCountries() {
            get(baseURL).then(res => res.json())

        },
        getDetails() {
            return {
                rawHtml: '{{country.region}}'
            }
        }
    },
}
</script>

<style scoped>

</style>