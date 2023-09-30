const fetchPhotos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await response.json();
  return photos;
};
export default fetchPhotos;
