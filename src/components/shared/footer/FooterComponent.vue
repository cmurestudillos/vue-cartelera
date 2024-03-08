<template>
  <footer class="fixed-bottom bg-custom">
    <div class="footer-copyright text-white">
      <div class="float-left ml-2"><i>Copyright © - Carlos Mur</i></div>
      <div class="float-right mr-2"><i><b>Version: {{ appVersion }}</b></i></div>
    </div>
  </footer>
</template>

<script>
import { version } from '../../../../package.json';
export default {
  name: 'FooterComponent',
  data(){
    return{
      appVersion: version
    }
  }
}
</script>