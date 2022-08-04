import HomePage from "@/components/pages/HomePage";
import SearchPage from "@/components/pages/SearchPage";
import MovieDetails from "@/components/pages/MovieDetails";
import TVDetails from "@/components/pages/TVDetails";
import DiscoverMovies from "@/components/pages/DiscoverMovies";
import DiscoverTV from "@/components/pages/DiscoverTV";

export default {
  mode: "hash",
  base: "/Filmology/",

  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/search/:searchPhrase?",
      name: "SearchPage",
      component: SearchPage,
    },
    {
      path: "/movie/:id",
      name: "MovieDetails",
      component: MovieDetails,
    },
    {
      path: "/tv/:id",
      name: "TVDetails",
      component: TVDetails,
    },
    {
      path: "/movies",
      name: "DiscoverMovies",
      component: DiscoverMovies,
    },
    {
      path: "/tv",
      name: "DiscoverTV",
      component: DiscoverTV,
    },
  ],
};
