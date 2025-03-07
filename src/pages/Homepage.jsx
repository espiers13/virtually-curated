function Homepage() {
  const buttonStyling =
    "rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2";

  return (
    <>
      <div className="bg-homepage p-4 w-full">
        <img src="src/imgs/explore_through_art.jpg" />

        <div class="m-5 grid grid-cols-3 gap-1 ...">
          <a className={buttonStyling} href="/search">
            <div className="relative text-center">
              <img
                src="https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg"
                alt="Van Gogh - Starry Night"
              />
              <div className="w-full absolute bottom-0 left-0 text-center mt-10">
                <h2 className="text-3xl text-textcolor1 text-center">
                  SEARCH COLLECTIONS
                </h2>
              </div>
            </div>
          </a>
          <a className={buttonStyling} href="/collections">
            <div className="relative text-center">
              <img
                src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/38000/38175-Manchester-Art-Gallery.jpg"
                alt="Manchester Art Gallery"
              />
              <div className="w-full absolute bottom-0 left-0 text-center mt-10">
                <h2 className="text-3xl text-textcolor1 text-center">
                  VIEW COLLECTIONS
                </h2>
              </div>
            </div>
          </a>
          <a className={buttonStyling} href="/mycollection/:user_id">
            <div className="relative text-center">
              <img
                src="https://www.ucl.ac.uk/museums-collections/sites/museums_collections/files/grant-museum-butterflies-shelves.jpg"
                alt="UCL Butterflies"
              />
              <div className="w-full absolute bottom-0 left-0 text-center mt-10">
                <h2 className="text-3xl text-textcolor1 text-center">
                  MY COLLECTIONS
                </h2>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Homepage;
