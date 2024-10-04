import { useEffect, useState } from "react";

function SingleSerie(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjg4MDczYmU2MTY5YTE0Y2JmMjkxMTRiOGJkMzI3MCIsIm5iZiI6MTcyODA0MjY4Mi4zNjEsInN1YiI6IjY2NTcyYzkyYmZhYjg0OTg3ODU5OTcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5by33LdQ0QaT-ujUXAOCPD3BRVBRfrNF0sO4XLybJ1Y'
            }
          };
          
          fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    })


}
  
  export default SingleSerie;