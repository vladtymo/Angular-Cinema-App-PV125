import { IMovie } from "./movie";

export const MOVIES: IMovie[] = [
    { id: 1, title: "Wrath of Man", genres: ["Action", "Crime"], year: 2021, duration: "1:58", isCurrent: false, cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ydyAFZAMYSBM2JzptcwDomPl_ZsO35KsxkX2YqXT_BeiienwWjEv8gLJRncsVJTZSb8&usqp=CAU" },
    { id: 2, title: "Sniper", genres: ["Action", "War"], year: 2022, duration: "1:40", isCurrent: true, cover: "https://m.media-amazon.com/images/M/MV5BNWMwOTgyNmMtYWNlYS00NGIyLTllOWYtZTVlNzU3N2ViZWQ5XkEyXkFqcGdeQXVyMzk3OTUyMDY@._V1_FMjpg_UX1000_.jpg" },
    { id: 3, title: "Fall", genres: ["Thriller", "Survival"], year: 2022, duration: "1:47", isCurrent: true, cover: "https://m.media-amazon.com/images/M/MV5BNGI3MWYwYjItNzZhYi00ZWIzLTkyMzYtN2JmNjg3ODg1NTg4XkEyXkFqcGdeQXVyMTMwMDA5ODU3._V1_.jpg" },
    { id: 4, title: "The Fast and the Furious", genres: ["Crime", "Adventure"], year: 2001, duration: "1:46", isCurrent: false, cover: "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" }
];