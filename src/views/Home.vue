<template>
  <div class="home">
    <OfflineHandle
      offlineTitle="网络已断开"
      desc="请联系管理员"
      onlineTitle="网络已连接"
      @hook:mounted="hookMounted"
    >
    </OfflineHandle>
  </div>
</template>

<script>
// @ is an alias to /src
import OfflineHandle from '@/components/OfflineHandle'
export default {
  name: 'Home',
  components: {OfflineHandle},
  methods: {
    hookMounted() {
      console.log('loading')
    }
  }
}
</script>
