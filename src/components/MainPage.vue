<template>
  <div>
    <link rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous">
    <div id="title-box">
      <h1 id="title">mamãe me cuida</h1>
      <div id="menu">
        <ul>
          <li>
            <a>Mamães</a>
            <ul class="submenu">
              <li v-for="cat in momCategories" v-bind:key="cat">
                <p>{{ cat }}</p>
              </li>
            </ul>
          </li>
          <li >
            <a>Bebês</a>
            <ul class="submenu">
              <li v-for="cat in babyCategories" v-bind:key="cat">
                <p>{{ cat }}</p>
              </li>
            </ul>
          </li>
          <li >
            <a>Kids</a>
            <ul class="submenu">
              <li v-for="cat in kidsCategories" v-bind:key="cat">
                <p>{{ cat }}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="search-box">
        <div id="search-box-group">
          <input type="text">
          <button><i class="fa fa-search"></i></button>
        </div>
      </div>
      <div id="social-network-box">
        <i class="fab fa-facebook fa-2x"></i>
        <i class="fab fa-instagram fa-2x"></i>
      </div>
    </div>
    <Billboard></Billboard>
  </div>
</template>

<script>
import Billboard from './Billboard'

const fb = require('../firebaseService')

export default {
  components: {
    Billboard
  },
  data () {
    return {
      momMenu: 'mamae',
      momCategories: [],
      babyMenu: 'bebe',
      babyCategories: [],
      kidsMenu: 'kids',
      kidsCategories: []
    }
  },
  methods: {
    async loadCategories () {
      this.momCategories = await this.loadCategory(this.momMenu)
      this.babyCategories = await this.loadCategory(this.babyMenu)
      this.kidsCategories = await this.loadCategory(this.kidsMenu)
    },
    async loadCategory (menu) {
      const categories = []
      await fb.categoriesCollection.where('menu', '==', menu).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const category = doc.data()
          categories.push(category.category)
        })
      })
      return categories
    }
  },
  mounted () {
    this.loadCategories()
  }
}
</script>

<style scoped>
#title-box {
  margin: 10px;
  width: 100%;
  float: left;
}

#title {
  font-family: 'Butterfly Kids', arial, sans-serif;
  font-size: 50px;
  text-align: left;
  float: left;
  margin: 0;
}

#menu {
  width: 30%;
  float: left;
  padding-top: 15px;
  padding-left: 20px;
}

#menu > ul {
  list-style: none;
  padding: 0;
  margin-left: 10px
}

#menu > ul > li {
  display: inline;
  margin-right: 50px;
  position: relative;
}

#menu > ul > li:hover .submenu, .submenu > li.over ul {
  display: block;
}

.submenu {
  position: absolute;
  top: 15px;
  left: 0px;
  padding: 0;
  background-color: white;
  display: none;
}

.submenu > li {
  display: block;
  position: relative;
  width: 100px;
  padding-left: 5px;
}

#search-box {
  width: 250px;
  height: 39px;
  padding-top: 20px;
  float: left;
}

#search-box-group {
  position: relative;
  height: 39px;
  width: 100%;
}

#search-box-group > input[type="text"] {
  width: 100%;
  height: 39px;
  padding-right: 10px;
  box-sizing: border-box;
}

#search-box-group > button {
  position: absolute;
  right: 5px;
  top: 1px;
  height: 37px;
  width: 37px;
  border: none;
  margin: 0px;
  padding: 0px;
  color: grey;
  background-color: white;
  font-size: 17px;
  cursor: pointer;
}

#search-box::after {
  content: "";
  clear: both;
  display: table;
}

#social-network-box {
  padding: 20px 20px 10px 20px;
  float: right;
}

#social-network-box > i {
  margin: 0px 10px;
}

</style>
