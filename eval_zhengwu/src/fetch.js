var url =
  "https://itunes.apple.com/search?term=Jack%20Johnson&media=music&entity=album&attribute=artistTerm&limit=50";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.dir(data);
  });
