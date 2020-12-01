<template>
  <button
    :disabled="disabled"
    class="w-button"
    @click="onClick">
    <slot/>
  </button>
</template>
<script src="./GButton.js"></script>
<style src="./GButton.scss" lang="scss"></style>
