import axios from "axios";

const axiosWithConfig = axios.create();

axiosWithConfig.interceptors.request.use((axiosConfig: any) => {
  axiosConfig.baseURL = "https://api.themoviedb.org/3/";
  axiosConfig.headers.Authorization =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2Y3YzMxMmVhYzRjMTE4NzFmOGY0N2NmN2JjOWRmNSIsIm5iZiI6MTU3OTAwODU3MC41NTksInN1YiI6IjVlMWRjMjNhYTI0YzUwMDAxMzBiZTZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.23p3_LsFv9KwwKKgSvw0oGzJSTFrhSpgwtL6Q13U9P8";

  return axiosConfig;
});

export default axiosWithConfig;
