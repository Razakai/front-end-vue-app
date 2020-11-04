<template>
  <form class="registerContainer">
    <div class="registerContainer-row">
    <TextInput v-model="firstName" placeholder="first name"/>
      <TextInput v-model="lastName" placeholder="last name"/>
    </div>
    <div class="registerContainer-row">
      <TextInput v-model="studentId" placeholder="student ID"/>
      <TextInput v-model="courseNumber" placeholder="Course number"/>
    </div>
    <div class="registerContainer-btn">
    <g-button>Register</g-button>
    </div>

  </form>
</template>
<script src="./register.js"></script>
<style src="./register.scss" lang="scss"></style>
