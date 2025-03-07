function ItemCard(item) {
  const currentItem = item.item;
  let thumbnail =
    "https://t4.ftcdn.net/jpg/07/91/22/59/360_F_791225927_caRPPH99D6D1iFonkCRmCGzkJPf36QDw.jpg";
  const {
    _primaryTitle,
    _images,
    _currentLocation,
    _primaryDate,
    _primaryMaker,
    systemNumber,
  } = currentItem;
  const itemLink = `/item/${systemNumber}`;
  if (Object.keys(_images).length > 0) {
    thumbnail = thumbnail = _images._primary_thumbnail;
  }
  const headerStyling = "mb-2 text-2xl tracking-tight text-white";
  const textStyling = "mb-3 font-normal text-gray-100 dark:text-gray-400";
  const imageStyling =
    "rounded-md mt-3 bg-buttoncolor p-2 text-center text-sm text-white transition-all sm:h-48 object-cover ...";

  return (
    <div className="bg-hovercolor p-3 rounded-lg grid grid-cols-1 justify-items-center m-5">
      <img className={imageStyling} src={thumbnail} alt={_primaryTitle} />
      <div className="p-5">
        <h5 className={headerStyling}>{_primaryTitle}</h5>

        <p className={textStyling}>{_primaryMaker.name}</p>
        <p className={textStyling}>{_primaryDate}</p>
        <p className={textStyling}>{_currentLocation.site}</p>
        <a
          href={itemLink}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default ItemCard;
