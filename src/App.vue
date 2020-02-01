<template>
  <router-view />
  <!-- <div>
    <UploadImage></UploadImage>
  </div> -->
</template>

<script>
  // import UploadImage from './components/UploadImage';

export default {
  name: 'app',
  components: {
    // UploadImage
  },
  created() {
    const currentPath = this.$router.history.current.path;

    if (window.localStorage.getItem('authenticated') === 'false') {
      this.$router.push('/login');
    }

    if (currentPath === '/' || currentPath === '/app') {
      this.$router.push('/app/dashboard');
    }
  },
}
</script>

<style src="./styles/theme.scss" lang="scss">

</style>
