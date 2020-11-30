<template>
  <div class="club-card">
    <div class="club-card__header">
      <img
        class="club-card__club-icon"
        :src="club.photo"
        />
    </div>
    <div class="club-card__body">
      <div class="club-card__name">
        {{ club.name }}
      </div>
      <div class="club-card__description">
        Facility: <span class="club-card__bold-text">{{ club.facility }}</span>
      </div>
      <div class="club-card__additional-information">
        <div class="club-card__additional-information__row">
          <div class="club-card__additional-information__item">
            Max Size: <span class="club-card__bold-text">{{ club.maxSize }}</span>
          </div>
          <div class="club-card__additional-information__item">
           Trainer: <span class="club-card__bold-text">{{ club.trainer }}</span>
          </div>
        </div>
        <div class="club-card__additional-information__row">
          <div class="club-card__additional-information__item">
            Duration: <span class="club-card__bold-text">{{ club.duration }}</span>
          </div>
          <div class="club-card__additional-information__item">
           Calories: <span class="club-card__bold-text">{{ club.calories }}</span>
          </div>
        </div>
        <div class="club-card__additional-information__button">
          <g-button>Join Club</g-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./clubCard.js"></script>
<style src="./clubCard.scss" lang="scss"></style>
