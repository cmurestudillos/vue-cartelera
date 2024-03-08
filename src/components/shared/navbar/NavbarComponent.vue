<template>
  <div>
    <b-navbar toggleable="lg" class="bg-custom fixed-top">
        <b-navbar-brand>
            <img src="../../../assets/img/logo.png" alt="Graficos" title="Graficos" height="38" class="mx-2">
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link to="/home" active-class="active" class="mx-2">Inicio</router-link></b-nav-item>
            <b-nav-item><router-link to="/buscar" active-class="active" class="mx-2">Buscar</router-link></b-nav-item>
          </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'NavbarComponent'
}
</script>
