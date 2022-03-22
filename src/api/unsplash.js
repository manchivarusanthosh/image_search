import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID fo_AFdDGmMe6EBemKJKhgjvnOlJe0W-ZfJGbzA49ONI",
  },
});
