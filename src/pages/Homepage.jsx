function Homepage() {
  const imgStyling =
    "rounded-md bg-buttoncolor p-2 text-center text-sm text-white transition-all ml-2 xl:h-80 md: sm:h-48 object-cover ...";

  const textStyling =
    "xl:text-3xl md:text-2xl sm:text-xs text-textcolor1 text-center mb-4";

  const style = "ml-2 rounded-lg h-48 w-96 object-cover ...";

  return (
    <main className="bg-homepage p-4 h-screen">
      <img
        src="src/imgs/explore_through_art.jpg"
        alt="Explore the world through art"
      />

      <div className="m-5 grid grid-cols-3 gap-1 ...">
        <a href="/search">
          <div className="relative text-center">
            <img
              src="https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg"
              alt="Van Gogh - Starry Night"
              class={imgStyling}
            />
            <div className="w-full absolute bottom-0 left-0 text-center mt-10">
              <h2 className={textStyling}>SEARCH COLLECTIONS</h2>
            </div>
          </div>
        </a>
        <a href="/collections">
          <div className="relative text-center">
            <img
              src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/38000/38175-Manchester-Art-Gallery.jpg"
              alt="Manchester Art Gallery"
              class={imgStyling}
            />
            <div className="w-full absolute bottom-0 left-0 text-center mt-10">
              <h2 className={textStyling}>VIEW COLLECTIONS</h2>
            </div>
          </div>
        </a>
        <a href="/mycollection/:user_id">
          <div className="relative text-center">
            <img
              src="https://www.ucl.ac.uk/museums-collections/sites/museums_collections/files/grant-museum-butterflies-shelves.jpg"
              alt="UCL Butterflies"
              class={imgStyling}
            />
            <div className="w-full absolute bottom-0 left-0 text-center mt-10">
              <h2 className={textStyling}>MY COLLECTIONS</h2>
            </div>
          </div>
        </a>
      </div>
    </main>
  );
}

export default Homepage;
