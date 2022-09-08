<template>
    <button @click="$emit('btnClicked', index)" v-if="buttonType === 'check'">
      ✅
    </button>
    <button @click="$emit('btnClicked', index)" v-else-if="buttonType === 'x'">
      ❌
    </button>
    <button @click="$emit('btnClicked', index)" v-else>🗑</button>
  </template>
  
  <script>
  export default {
    name: "CustomButton",
    props: {
      index: {
        type: Number,
        default: 0,
      },
      buttonType: {
        type: String,
        default: "check",
      },
    },
  };
  </script>
  
  <style scoped></style>