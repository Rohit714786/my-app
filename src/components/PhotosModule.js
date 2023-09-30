import React, { useState, useEffect } from "react";
import fetchPhotos from "../api/Photos";

const PhotosModule = () => {
  const [photos, setPhotos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos().then((photos) => {
      setPhotos(photos);
      setFilteredPhotos(photos); // Initialize filteredPhotos with all photos
    });
  }, []);

  const handleFilterChange = (event) => {
    const searchText = event.target.value.toLowerCase();
    setSearchText(searchText);

    // Filter photos based on the search text
    const filtered = photos.filter((photo) =>
      photo.title.toLowerCase().includes(searchText)
    );
    setFilteredPhotos(filtered);
  };

  return (
    <div className="photos-module">
      <div className="container">
        <h1>Photos</h1>

        <input
          type="text"
          placeholder="Filter photos..."
          value={searchText}
          onChange={handleFilterChange}
        />

        <ul className="row">
          {filteredPhotos.map((photo) => (
            <li key={photo.id} className="col-md-4">
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <h3>{photo.title}</h3>
              <a href={photo.url}>View</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhotosModule;
