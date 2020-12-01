<template>
  <main class="browse-clubs">
    <club-model v-if="showModel"/>
    <section class="browse-clubs__header">
      <div class="browse-clubs__header__left">
        <select name="filterBy" v-model="multiselect">
          <option value="name">Club name</option>
          <option value="date">Date</option>
          <option value="trainer">Trainer</option>
        </select>
        <TextInput v-model="searchTerm" placeholder="search term"/>
        <div class="browse-clubs__header__left__checkbox">
          <input type="checkbox" id="sortByCalories" v-model="sortByCalories">
          <label for="sortByCalories">Sort By Calories</label>
        </div>
      </div>
      <div class="browse-clubs__header__right-side">
        <div class="browse-clubs__header__right-side__addClub">
          <g-button
            v-if="!isTrainer"
            @click="setShowModel(!showModel)">
            Add Club
          </g-button>
        </div>
      </div>
    </section>
    <section class="browse-clubs__body">
      <div class="browse-clubs__list-wrapper">
        <div
          class="browse-clubs__content"
          v-if="getClubs.length > 0">
          <article v-for="club in getClubs" :key="club.name">
            <club-card
              class="club-card"
              :club="club"
              @join-club="addUserClub(club.name)"
              @create-appointment="addUserAppointment(club.name)"
            />
          </article>
        </div>
      </div>
    </section>
  </main>

</template>
<script src="./clubs.js"></script>
<style src="./clubs.scss" lang="scss"></style>
