<template>
  <base-card>
    <section>
      <section class="inline">
        <h2 class="filterHeading">Filter coach:</h2>
        <section class="checkboxes">
          <span class="filter-option">
            <input
              class="checkboxColor"
              type="checkbox"
              id="frontend"
              checked
              @change="setFilter"
            />
            <label for="frontend">frontend</label>
          </span>
          <span class="filter-option">
            <input
              class="checkboxColor"
              type="checkbox"
              id="backend"
              checked
              @change="setFilter"
            />
            <label for="backend">backend</label>
          </span>
          <span class="filter-option">
            <input
              class="checkboxColor"
              type="checkbox"
              id="career"
              checked
              @change="setFilter"
            />
            <label for="career">career</label>
          </span>
          <span class="filter-option">
            <input
              class="checkboxColor"
              type="checkbox"
              id="graphics"
              checked
              @change="setFilter"
            />
            <label for="graphics">ux/ui</label>
          </span>
        </section>
      </section>
    </section>
  </base-card>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue';

export default {
  components: { BaseCard },
  emits: ['change-filter'],
  setup(props, context) {
    let filters = {
      frontend: true,
      backend: true,
      career: true,
      graphics: true,
    };

    function setFilter(event) {
      const inputId = event.target.id; //is the id of the input in the template, such as 'frontend', 'backend', etc.
      const isActive = event.target.checked;
      const updatedFilters = {
        ...filters,
        [inputId]: isActive,
      };
      filters = updatedFilters;
      context.emit('change-filter', updatedFilters);
    }

    return { setFilter };
  },
};
</script>

<style scoped>
@media only screen and (max-width: 450px) {
  .checkboxes {
    max-width: 200px;
  }
}

@media only screen and (min-width: 450px) {
  .checkboxes {
    max-width: 280px;
  }
}

@media only screen and (min-width: 540px) {
  .checkboxes {
    max-width: 500px;
  }
}

label {
  font-size: 15px;
  margin-right: 15px;
  font-style: italic;
  color: #219ebc;
}

.inline {
  display: flex;
  flex-wrap: nowrap;
  margin-right: 5px;
}

.checkboxes {
  margin-top: 14px;
  margin-left: 24px;
}
.checkboxColor {
  accent-color: #176477;
}
</style>
