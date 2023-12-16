<template>
  <div class="card">
    <a :href="'https://www.themoviedb.org/movie/' + aa.id">
      <figure>
        <img :src="'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' + aa.poster_path" alt="aa.title">
        <!-- <img src="https://placehold.it/200x300/ddd/333?text=MoviePoster" alt=""> -->
      </figure>
      <div class="text">
        <h3>{{ aa.title }}</h3>
      </div>      
    </a>
  </div>
</template>

<script>
export default {
  props:['aa']
}
</script>

<style lang="scss" scoped>
  $tablet: '(max-width:860px)';
  $mobile: '(max-width:600px)';

  .card {
    width:25%;
    padding:16px;     

    @media #{$tablet}{
      width:33.33%;
    }
    @media #{$mobile}{
      width:50%;
    }

    

    a { display: block; 
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0,0,0,0.5);
      
      figure {
        width:100%;
        height:360px;
        overflow: hidden;

          img {
            width:100%;
            height:100%;
            object-fit: cover;
            transition: 0.3s;
          }        
        }
        .text {
          height: 80px;
          padding:16px;

          h3 {
            color:#313131;
            font-size:16px;
        }      
      }
        
        
    }
    &:hover img {
          transform: scale(1.1)
        }
    &:hover h3 {
      color:forestgreen
    }
    
  }
</style>