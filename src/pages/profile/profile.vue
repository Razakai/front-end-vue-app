<template>
  <main class="p-profile">
    <section class="profile-container">
      <article class="profileContainer-inputLabel">
        <label>First Name</label>
        <label>Last Name</label>
      </article>
      <article class="profileContainer-row">
        <TextInput class="profileInput" v-model="firstName" placeholder="First Name">
          <span test/>
        </TextInput>
        <TextInput class="profileInput" v-model="lastName" placeholder="Last Name"/>
      </article>
      <article class="profileContainer-inputLabel">
        <label>Weight</label>
        <label>Height</label>
      </article>
      <article class="profileContainer-row">
        <TextInput class="profileInput" v-model="weight" placeholder="Weight"/>
        <TextInput class="profileInput" v-model="height" placeholder="Height"/>
      </article>
      <article class="profileContainer-inputLabel">
        <label>Address</label>
        <label>Email</label>
      </article>
      <article class="profileContainer-row">
        <TextInput class="profileInput" v-model="address" placeholder="Address"/>
        <TextInput class="profileInput" v-model="email" placeholder="Email"/>
      </article>
      <article class="profileContainer-inputLabel">
        <label>Phone Number</label>
        <label>Age</label>
      </article>
      <article class="profileContainer-row">
        <TextInput class="profileInput" v-model="phoneNumber" placeholder="Phone Number"/>
        <TextInput class="profileInput" v-model="age" placeholder="Age"/>
      </article>
      <article class="profileContainer-inputLabel">
        <label>Username</label>
        <label>Password</label>
      </article>
      <article class="profileContainer-row">
        <TextInput class="profileInput" v-model="username" placeholder="Username"/>
        <TextInput class="profileInput" v-model="password" :input-type="'password'" placeholder="Password"/>
      </article>
      <article class="profileContainer-row-radio">
        <input type="radio" id="male" value="male" v-model="gender">
        <label for="male">Male</label>
        <input type="radio" id="female" value="female" v-model="gender">
        <label for="male">Female</label>
      </article>
      <article class="profileContainer-row-radio">
        <input type="radio" id="student" value="student" v-model="status">
        <label for="male">Student</label>
        <input type="radio" id="staff" value="staff" v-model="status">
        <label for="male">Staff</label>
        <input type="radio" id="neither" value="neither" v-model="status">
        <label for="male">Neither</label>
      </article>
      <article class="profileContainer-row-radio">
        <input type="radio" id="oneYear" value="oneYear" v-model="membership">
        <label for="male">One Year</label>
        <input type="radio" id="openEnded" value="openEnded" v-model="membership">
        <label for="male">Open Ended</label>
      </article>
      <section class="profileContainer-btn">
        <g-button @click="updateProfile">Update Profile</g-button>
      </section>
      <span v-if="profileUpdated && passwordUpdated">Profile Updated, password changed</span>
      <span v-else-if="profileUpdated">Profile Updated</span>

    </section>
  </main>
</template>
<script src="./profile.js"></script>
<style src="./profile.scss" lang="scss"></style>
