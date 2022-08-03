<template>
  <section class="movie-details container">
    <button @click="$router.go(-1)" class="movie-details__btn">Back</button>
    <h2 class="movie-details__title">{{ movieInfo.title }}</h2>
    <div class="movie-details__content">
      <div class="movie-details__img">
         <img
          v-if="!movieInfo.poster_path"
          src="@/assets/404.jpg"
          :alt="movieInfo.name"
          class="movie-details__img"/>
        <img
          v-else
          :src="'https://image.tmdb.org/t/p/w300' + movieInfo.poster_path"
          :alt="movieInfo.name"
          class="movie-details__img"/>
      </div>
      <div class="movie-details__description">
        <p class="movie-details__text">
          <span class="movie-details__headers">
            Genre:
          </span>
          <ul class="movie-details__genre--list">
            <li
              class="movie-details__genre--item"
              v-for="genre in movieInfo.genres"
              :key="genre.id">
                {{ genre.name }}
            </li>
          </ul>
        </p>
        <p class="movie-details__text">
          <span class="movie-details__headers">
            Release Date:
          </span>
            {{
              movieInfo.release_date | TransformDate
            }}
        </p>
        <p class="movie-details__text">
          <span class="movie-details__headers">
            Vote Avarage:
          </span>
            {{
              movieInfo.vote_average
            }}
        </p>
        <p class="movie-details__text">
          <span class="movie-details__headers">
            Runtime:
          </span>
            {{ movieInfo.runtime }} min
        </p>
        <p class="movie-details__text">
          <span class="movie-details__headers">
            Overview:
          </span>
            {{ movieInfo.overview }}
        </p>
        <p class="movie-details__text">
          <span class="movie-details__headers">
            Links:
          </span>
          <ul class="movie-details__links--list">
            <li class="movie-details__links--item">
              <a
              :href="movieInfo.homepage"
              class="movie-details__link"
              target="_blank">
              Official Website</a>
            </li> |
            <li class="movie-details__links--item">
          <a
            :href="'https://www.imdb.com/title/' + movieInfo.imdb_id"
            class="movie-details__link"
            target="_blank">
            IMDb</a>
            </li>
            </ul>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MovieDetails",
  data() {
    return {
      show: "movie/",
      apikey: "4608236be3c999836b08e6b342e284d8",
      id: this.$route.params.id,
      movieInfo: {},
    };
  },
  methods: {
    getMovieDetails() {
      this.axios
        .get(
          `https://api.themoviedb.org/3/${this.show}${this.id}?api_key=${this.apikey}`
        )
        .then((response) => {
          this.movieInfo = response.data;
        });
    },
  },
   filters: {
    TransformDate(string) {
      if (string == undefined) {
        return "Date not found";
      } else {
        let options = { year: "numeric", month: "long", day: "numeric" };
        const [year, month, day] = string.split("-");
        return new Date(year, month - 1, day).toLocaleDateString(
          "en-US",
          options
        );
      }
    }
  },
  created() {
    this.getMovieDetails();
  },
};
</script>

<style lang="scss" scoped>
.movie-details {
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 90vh;
  position: relative;
  &__title {
    font-size: 60px;
    margin-bottom: 50px;
    padding-top: 20px;
  }
  &__btn {
    text-transform: uppercase;
    background-color: transparent;
    border: 1px solid #fff;
    font-family: "Londrina Outline";
    padding: 5px 10px;
    transition: all 0.5s ease-in-out;
    border-radius: 5px;
    max-width: 150px;
    position: absolute;
    right: 0;
    top: 50px;
    &:hover {
      font-family: "Londrina Solid";
      color: #fff;
    }
  }
  &__content {
    display: flex;
    flex-direction: row;
    gap: 80px;
  }
  &__img {
    width: 350px;
    height: 500px;
  }
  &__description {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__genre--list {
    display: flex;
    flex-direction: row;
    padding-left: 0;
  }
  &__headers {
    font-family: "Londrina Outline", cursive;
    min-width: 150px;
  }
  &__text {
    font-family: "Londrina Solid", cursive;
    display: flex;
    flex-direction: row;
    text-align: start;
  }
  &__subtext {
    font-family: "Londrina Solid", cursive;
  }
  &__links--list {
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding-left: 0 !important;
  }
  &__genre--item:after {
    content: ",";
  }
  &__genre--item:last-child:after {
    content: "";
  }
}

@media (max-width: 1094px) {
  .movie-details {
    height: 100vh;
    &__title {
      font-size: 30px;
      text-align: center;
      padding-top: 80px;
      margin-bottom: 10px;
    }
    &__btn {
      display: none;
    }
    &__content {
      align-items: center;
      gap: 20px; 
      }
    &__img {
      width: 300px;
      height: auto;
    }
    &__description {
      gap: 15px;
    }
    &__headers {
      min-width: 120px;
    }
    &__text {
      font-size: 18px;
      text-align: start;
    }
  }
}

@media (max-width: 641px) {
  .movie-details {
    height: auto;
    margin-bottom: 0px;
    &__title {
      font-size: 30px;
      text-align: center;
      padding-top: 80px;
      margin-bottom: 10px;
    }
    &__btn {
      display: none;
    }
    &__content {
      flex-direction: column;
      align-items: center;
      gap: 20px; 
      }
    &__img {
      width: 300px;
      height: auto;
    }
    &__description {
      gap: 15px;
      margin-bottom: 20px;
    }
    &__headers {
      min-width: 120px;
    }
    &__text {
      font-size: 18px;
      text-align: start;
    }
  }
}

</style>
