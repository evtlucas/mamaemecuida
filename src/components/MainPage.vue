<template>
  <div>
    <Menu></Menu>
    <Billboard></Billboard>
    <ShowCase></ShowCase>
  </div>
</template>

<script>
import Billboard from './Billboard'
import ShowCase from './ShowCase'
import Menu from './Menu'

export default {
  components: {
    Billboard,
    ShowCase,
    Menu
  }
}
</script>
