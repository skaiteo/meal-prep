<template>
    <v-app>
        <app-navigation></app-navigation>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',

    components: {
        AppNavigation
    }
};
</script>

<style scoped>
.fade-enter-active{
  animation: fadeIn 20s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.fade-leave-active{
  animation: popOut 20s ease-in;
}
@keyframes popOut{
  0%{
    opacity: 1;
    transform: translateX(-100px);
  }
  100%{
    opacity: 0;
    transform: translateX(100px);
  }
}
</style>
