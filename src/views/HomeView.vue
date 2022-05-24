<template>
  <div>
    <VerticalHeader />
    <FirstScreen />
    <AboutMe />
    <ProjectList />
    <LastScreen />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from '@/components/AboutMe.vue'
import FirstScreen from '@/components/FirstScreen.vue'
import ProjectList from '@/components/ProjectList2.vue'
import LastScreen from '@/components/LastScreen.vue'
import VerticalHeader from '@/components/VerticalHeader.vue'

export default {
  name: 'HomeView',
  components: {
    AboutMe,
    FirstScreen,
    ProjectList,
    LastScreen,
    VerticalHeader
  }
}
</script>
<style>  

</style>
