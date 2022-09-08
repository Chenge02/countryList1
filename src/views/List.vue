<template>
    <div class="w-full">
    <section id="input-area" class="m-auto w-1/2 px-8">
      <h1 class="text-2xl text-center font-semibold">
        {{ countryCount }} {{ countryCount === 1 ? "Country" : "Countries" }}
      </h1>

      <form @submit.prevent>
        <input
          :placeholder="'Add Country # ' + (countries.length + 1)"
          class="border-2 border-black rounded-md w-full px-2 text-center"
          type="text"
          v-model="newCountry"
        />
        <button
          @click="addCountryHandler"
          class="border-2 border-black rounded-md hidden"
        >
          Add Country
        </button>
      </form>
    </section>
    <CountryList
      v-show="countries.length"
      @deleteEvent="deleteEventHandler"
      @toggleComplete="toggleCompleteHandler"
      :countries="countries"
    />
  </div>
</template>

<script>
    import CountryList from '../components/CountryList.vue';
export default {
  name: "App",
  data() {
    return {
      newCountry: "",
      countries: [],
    };
  },
  methods: {
    deleteEventHandler(i) {
      this.countries.splice(i, 1);
    },
    toggleCompleteHandler(i) {
      if (this.countries.length < 1) return;
      const currentCountryCompleteStatus = this.countries[i].complete;
      const newCompleteValue = !currentCountryCompleteStatus;
      this.countries[i].complete = newCompleteValue;
    },
    addCountryHandler() {
      if (!this.newCountry) return;
      this.countries.push(this.newCountryObject);
      this.newCountry = "";
    },
  },
  computed: {
    countryCount() {
      return this.countries.length;
    },
    newCountryObject() {
      return {
        id: this.countries.length + 1,
        name: this.newCountry,
        complete: false,
      };
    },
  },
  components: {
    CountryList,
  },
};
</script>

<style scoped>
</style>