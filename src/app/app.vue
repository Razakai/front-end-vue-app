<template>
  <div class="nav">
    <img src="../assets/citLogo.jpg" height="100" width="200">
    <span v-if="isLoggedIn" class="nav-container">
      <span class="nav-container__left">
        <router-link to="/" class="router-link">Home</router-link>
        <router-link to="/clubs" class="router-link">Clubs</router-link>
        <router-link to="/bookings" class="router-link">Bookings</router-link>
        <router-link to="/trainingPlan" class="router-link">Training Plan</router-link>
      </span>
      <span class="nav-container__right">
        <router-link to="/profile" class="router-link">Profile</router-link>
        <g-button @click="logout"> Logout </g-button>
      </span>
    </span>
    <div v-else class="nav__right__wrapper">
    <span class="nav__right">
     <text-input
       class="nav__right-input"
       v-model="username"
       :placeholder="'Username'">
     </text-input>
        <text-input
          class="nav__right-input"
          v-model="password"
          :input-type="'password'"
          :placeholder="'Password'">
       </text-input>
      <g-button :disabled="loginAttempts === 3" @click="login"> Login </g-button>
    </span>
      <div v-if="this.loginAttempts === 3">3 invalid login attempts, You've been locked out</div>
    </div>
  </div>
  <router-view/>
</template>
<style src="./app.scss" lang="scss"></style>
<script src="./app.js"></script>
