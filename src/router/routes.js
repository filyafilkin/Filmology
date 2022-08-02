import HomePage from "@/components/pages/HomePage";
import SearchPage from "@/components/pages/SearchPage";
import MovieDetails from "@/components/pages/MovieDetails";
import TVDetails from "@/components/pages/TVDetails";
import DiscoverPage from "@/components/pages/DiscoverPage";
import FavouritesPage from "@/components/pages/FavouritesPage";

export default {
  mode: "history",
  base: "/Filkin_lessons/",

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
      name: "Movie Details",
      component: MovieDetails,
    },
    {
      path: "/tv/:id",
      name: "TVDetails",
      component: TVDetails,
    },
    {
      path: "/discover",
      name: "DiscoverPage",
      component: DiscoverPage,
    },
    {
      path: "/favourites",
      name: "FavouritesPage",
      component: FavouritesPage,
    },
  ],
};
