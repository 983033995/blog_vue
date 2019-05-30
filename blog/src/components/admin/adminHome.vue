<template>
  <div class="admin_home_content">
    <common-nav></common-nav>
  </div>
</template>

<script>
import commonNav from '@/components/admin/common/commonNav'
export default {
  name: 'adminHome',
  components: {
    commonNav
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.admin_home_content {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
