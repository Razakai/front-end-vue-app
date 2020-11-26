<template>
  <section class="registerContainer">
    <div class="registerContainer-row">
    <TextInput class="registerInput"  v-model="firstName" placeholder="First Name"/>
      <TextInput class="registerInput" v-model="lastName" placeholder="Last Name"/>
    </div>
    <div class="registerContainer-row">
      <TextInput class="registerInput" v-model="weight" placeholder="Weight"/>
      <TextInput class="registerInput" v-model="height" placeholder="Height"/>
    </div>
    <div class="registerContainer-row">
      <TextInput class="registerInput" v-model="address" placeholder="Address"/>
      <TextInput class="registerInput" v-model="email" placeholder="Email"/>
    </div>
    <div class="registerContainer-row">
      <TextInput class="registerInput" v-model="phoneNumber" placeholder="Phone Number"/>
      <TextInput class="registerInput" v-model="age" placeholder="Age"/>
    </div>
    <div class="registerContainer-row">
      <TextInput class="registerInput" v-model="username" placeholder="Username"/>
      <TextInput class="registerInput" v-model="password" placeholder="Password"/>
    </div>
    <div class="registerContainer-row-radio">
      <input type="radio" id="male" value="male" v-model="gender">
      <label for="male">Male</label>
      <input type="radio" id="female" value="female" v-model="gender">
      <label for="male">Female</label>
    </div>
    <div class="registerContainer-row-radio">
      <input type="radio" id="student" value="student" v-model="status">
      <label for="male">Student</label>
      <input type="radio" id="staff" value="staff" v-model="status">
      <label for="male">Staff</label>
      <input type="radio" id="neither" value="neither" v-model="status">
      <label for="male">Neither</label>
    </div>
    <div class="registerContainer-row-radio">
      <input type="radio" id="oneYear" value="oneYear" v-model="membership">
      <label for="male">One Year</label>
      <input type="radio" id="openEnded" value="openEnded" v-model="membership">
      <label for="male">Open Ended</label>
    </div>
    <div class="registerContainer-btn">
      <g-button @click="register">Register</g-button>
    </div>

  </section>
</template>
<script src="./register.js"></script>
<style src="./register.scss" lang="scss"></style>
