<template>
  <div>
    <section id="country-list" class="w-1/2 mx-12">
      <ul class="m-auto justify-center flex" @click="toggleCompeteHandler(i)" v-for="(country, i) in countries"
        :key="i">

        <CustomButton :index="i" @btnClicked="deleteCountryHandler(i)" buttonType="trash" />
        <span :class="['cursor-pointer ml-4', country.complete && 'line-through']">
          {{ country.name }}
        </span>

      </ul>
    </section>
  </div>
</template>
  
<script>
import CustomButton from './uiElements/CustomButton.vue';
export default {
  name: "CountryList",
  props: {
    countries: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    toggleCompeteHandler(i) {
      this.$emit("toggleComplete", i);
    },
    deleteCountryHandler(i) {
      console.log("delete", i);
      this.$emit("deleteEvent", i);
    },
  },
  components: {
    CustomButton,
  },
};
</script>
  
<style scoped>

</style>