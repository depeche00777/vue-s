<template>
  <div class="app">
    <header>
      <h1>The <strong>Movie</strong> Database</h1>
      <form class="search-box" v-on:submit.prevent="handleSearch">
        <input 
          type="search"
          class="search-field"
          placeholder="search for a Movie..."
          required
          v-model="search_query"
          >          
      </form>
      {{ search_query }}
    </header>

    <main>
      <div class="cards">
        <Card />
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from './components/Card.vue';

const search_query = ref('')

const handleSearch = () => {
  console.log('입력값', search_query.value)
  search_query.value=""
}
</script>

<style lang="scss" scoped>
	$color:#313131;
	%box-shadow {
  box-shadow: 0px 4px 8px rgba(0,0,0,0.15);
}
/*
  플레이스 홀더(placeholder), 유령클라스 %
  @extend시 가져다 쓰는 용도로만 만들어짐
  css세트들을 변수처럼 선언해서 사용
*/

	* {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;

    font-family:  sans-serif;
  }
	header {
    padding-top: 50px;
    padding-bottom: 50px; 

		h1 {
      color: #888;
      font-size: 42px;
      font-weight:400;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 30px;

			strong {
        color: $color;
      }
		}
	}

	.search-box {
      display: flex;
      justify-content: center;
      padding-left: 30px;
      padding-right: 30px;

			.search-field {
        appearance: none;
        border: none;
        outline: none;
        background: none;

				background-color: #f3f3f3;
				display: block;
        width: 100%;
        max-width: 600px;
        padding: 15px;
        border-radius: 8px;

        @extend %box-shadow;
				color: $color;
        font-size: 20px;
        transition: 0.4s;

				&::placeholder {
          color: #aaa;          
        }
				&:focus {
            color: #fff;
            background-color: $color;
            @extend %box-shadow;
          }

					// &:valid {   //입력하는 중(&:focus 옆에 붙임)
          //   color: red;
          //   background-color: yellow;
          //   @extend %box-shadow;
          // }
			}
	}
</style>