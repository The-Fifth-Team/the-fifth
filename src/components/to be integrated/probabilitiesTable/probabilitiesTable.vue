<template>
<div id="app">
  <h3 class="title">Probability of Observations</h3>
  <!-- Datatable -->
  <DataTable :header-fields="headerFields" :sort-field="sortField" :sort="sort" :data="data || []" :is-loading="isLoading" :css="datatableCss" not-found-msg="Items not found" @on-update="dtUpdateSort" track-by="firstName">
    <!-- Pagination component as a slot, but could be drag out from Database element -->
    <Pagination slot="pagination" :page="currentPage" :total-items="totalItems" :items-per-page="itemsPerPage" :css="paginationCss" @on-update="changePage" @update-current-page="updateCurrentPage" />
    <!-- ItemsPerPage component as a slot, but could be drag out from Database element -->
    <div class="items-per-page" slot="ItemsPerPage">
      <label>Items per page</label>
      <ItemsPerPageDropdown :list-items-per-page="listItemsPerPage" :items-per-page="itemsPerPage" :css="itemsPerPageCss" @on-update="updateItemsPerPage" />
    </div>
  </DataTable>
</div>
</template>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app .title {
  margin-bottom: 30px;
}

#app .items-per-page {
  height: 100%;
  display: flex;
  align-items: center;
  color: #337ab7;
}

#app .items-per-page label {
  margin: 0 15px;
}

/* Datatable CSS */
.v-datatable-light .header-item {
  cursor: pointer;
  color: #337ab7;
  transition: color 0.15s ease-in-out;
}

.v-datatable-light .header-item:hover {
  color: #ed9b19;
}

.v-datatable-light .header-item.no-sortable {
  cursor: default;
}

.v-datatable-light .header-item.no-sortable:hover {
  color: #337ab7;
}

.v-datatable-light .header-item .th-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  font-weight: bold;
}

.v-datatable-light .header-item .th-wrapper.checkboxes {
  justify-content: center;
}

.v-datatable-light .header-item .th-wrapper .arrows-wrapper {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: space-between;
}

.v-datatable-light .header-item .th-wrapper .arrows-wrapper.centralized {
  justify-content: center;
}

.v-datatable-light .arrow {
  transition: color 0.15s ease-in-out;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}

.v-datatable-light .arrow.up {
  border-bottom: 8px solid #337ab7;
}

.v-datatable-light .arrow.up:hover {
  border-bottom: 8px solid #ed9b19;
}

.v-datatable-light .arrow.down {
  border-top: 8px solid #337ab7;
}

.v-datatable-light .arrow.down:hover {
  border-top: 8px solid #ed9b19;
}

.v-datatable-light .footer {
  display: flex;
  justify-content: space-between;
  width: 500px;
}

/* End Datatable CSS */

/* Pagination CSS */
.v-datatable-light-pagination {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  width: 300px;
  height: 30px;
}

.v-datatable-light-pagination .pagination-item {
  width: 30px;
  margin-right: 5px;
  font-size: 16px;
  transition: color 0.15s ease-in-out;
}

.v-datatable-light-pagination .pagination-item.selected {
  color: #ed9b19;
}

.v-datatable-light-pagination .pagination-item .page-btn {
  background-color: transparent;
  outline: none;
  border: none;
  color: #337ab7;
  transition: color 0.15s ease-in-out;
}

.v-datatable-light-pagination .pagination-item .page-btn:hover {
  color: #ed9b19;
}

.v-datatable-light-pagination .pagination-item .page-btn:disabled {
  cursor: not-allowed;
  box-shadow: none;
  opacity: .65;
}

/* END PAGINATION CSS */

/* ITEMS PER PAGE DROPDOWN CSS */
.item-per-page-dropdown {
  background-color: transparent;
  min-height: 30px;
  border: 1px solid #337ab7;
  border-radius: 5px;
  color: #337ab7;
}

.item-per-page-dropdown:hover {
  cursor: pointer;
}

/* END ITEMS PER PAGE DROPDOWN CSS */
</style>

<script>
import DataTable from './components/DataTable.vue'
import ItemsPerPageDropdown from './components/ItemsPerPageDropdown.vue'
import Pagination from './components/Pagination.vue'

// import DataTable from './probabilitiesTableCompo/DataTable.vue'
// import ItemsPerPageDropdown from './probabilitiesTableCompo/ItemsPerPageDropdown.vue'
// import Pagination from './probabilitiesTableCompo/Pagination.vue'
//

import orderBy from 'lodash.orderby'


const addZero = value => ("0" + value).slice(-2);

const formatDate = value => {
  if (value) {
    const dt = new Date(value);
    return `${addZero(dt.getDate())}/${addZero(
      dt.getMonth() + 1
    )}/${dt.getFullYear()}`;
  }
  return "";
};



var initialData = [{
    neutral: 0,
    happy: 1,
    sad: 2,
    angry: 3,
    fearful: 4,
    disgusted: 5,
    surprised: 6,
    userId: "Ahmed",
    createdAt: "125500"
  },
  {
    neutral: 0,
    happy: 2,
    sad: 3,
    angry: 4,
    fearful: 5,
    disgusted: 6,
    surprised: 7,
    userId: "ahmed2",
    createdAt: "125500"
  },
  {
    neutral: 0,
    happy: 8,
    sad: 8,
    angry: 9,
    fearful: 9,
    disgusted: 11,
    surprised: 16,
    userId: "ahmed3",
    createdAt: "125500"
  },
  {
    neutral: 10,
    happy: 11,
    sad: 12,
    angry: 13,
    fearful: 14,
    disgusted: 15,
    surprised: 16,
    userId: "ahmed4",
    createdAt: "125500"
  },

];

export default {
  name: "app",
  components: {
    DataTable,
    ItemsPerPageDropdown,
    Pagination,
    // Spinner
  },
  data: function() {
    return {
      headerFields: [{
          name: "neutral",
          label: "Probability of Neutral",
          sortable: true
        },
        {
          name: "happy",
          label: "Probability Of Happy",
          sortable: true
        },
        {
          name: "sad",
          label: "Probability of Sad",
          sortable: true,
        },
        {
          name: "angry",
          label: "Probability of Angry",
          sortable: true
        },
        {
          name: "fearful",
          label: "Probability of Fearful",
          sortable: true
        },
        {
          name: "disgusted",
          label: "Probability of Disgusted",
          sortable: true
        },
        {
          name: "surprised",
          label: "Probability of Surprised",
          sortable: true
        },
        {
          name: "userId",
          label: "User ID",
          sortable: true
        },
        {
          name: "createdAt",
          label: "Time Stamp",
          sortable: true
        },
      ],
      data: initialData.slice(0, 10),
      datatableCss: {
        table: 'table table-bordered table-hover table-striped table-center',
        th: 'header-item',
        thWrapper: 'th-wrapper',
        thWrapperCheckboxes: 'th-wrapper checkboxes',
        arrowsWrapper: 'arrows-wrapper',
        arrowUp: 'arrow up',
        arrowDown: 'arrow down',
        footer: 'footer'
      },
      paginationCss: {
        paginationItem: 'pagination-item',
        moveFirstPage: 'move-first-page',
        movePreviousPage: 'move-previous-page',
        moveNextPage: 'move-next-page',
        moveLastPage: 'move-last-page',
        pageBtn: 'page-btn',
      },
      itemsPerPageCss: {
        select: 'item-per-page-dropdown'
      },
      isLoading: false,
      sort: "asc",
      sortField: "firstName",
      listItemsPerPage: [5, 10, 20, 50, 100],
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 16,
      hometown: null
    };
  },
  methods: {
    dtUpdateSort: function({
      sortField,
      sort
    }) {
      const sortedData = orderBy(initialData, [sortField], [sort]);
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      this.data = sortedData.slice(start, end)
    },

    updateItemsPerPage: function(itemsPerPage) {
      this.itemsPerPage = itemsPerPage
      if (itemsPerPage >= initialData.length) {
        this.data = initialData
      } else {
        this.data = initialData.slice(0, itemsPerPage)
      }
    },

    changePage: function(currentPage) {
      this.currentPage = currentPage
      const start = (currentPage - 1) * this.itemsPerPage;
      const end = currentPage * this.itemsPerPage;
      this.data = initialData.slice(start, end)
    },

    updateCurrentPage: function(currentPage) {
      this.currentPage = currentPage
    }
  }
}
</script>
