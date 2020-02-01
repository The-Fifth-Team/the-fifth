<template>
  <nav
    :class="{sidebar: true, sidebarStatic, sidebarOpened}"
    @mouseenter="sidebarMouseEnter"
    @mouseleave="sidebarMouseLeave"
  >
    <header class="logo">
      <router-link to="/app"><span class="text-warning">Sing</span> App</router-link>
    </header>
    <ul class="nav">
      <NavLink
        header="Home"
        link="/app/dashboard"
        iconName="flaticon-home"
        index="dashboard"
        isHeader
      />
      <NavLink
        header="Charts"
        link="/app/charts"
        iconName="flaticon-list"
        index="charts"
        isHeader
      />
      <NavLink
        header="Sec Charts"
        link="/app/seccharts"
        iconName="flaticon-star"
        index="notifications"
        isHeader
      />
      <NavLink
        header="Tables Basic"
        link="/app/tables"
        iconName="flaticon-equal-1"
        index="tables"
        isHeader
      />
      <NavLink
        :activeItem="activeItem"
        header="Components"
        link="/app/components"
        iconName="flaticon-network"
        index="components"
        :childrenLinks="[
          { header: 'Icons', link: '/app/components/icons' },
        ]"
      />
    </ul>

  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import isScreen from '../../core/screenHelper.js';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: 'Sales Report',
          value: 15,
          footer: 'Calculating x-axis bias... 65%',
          color: 'info',
        },
        {
          id: 1,
          title: 'Personal Responsibility',
          value: 20,
          footer: 'Provide required notes',
          color: 'danger',
        },
      ],
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
