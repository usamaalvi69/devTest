export const dummyVideoUrl =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
export const matchGenre = (genres, ids) => {
  const matchingGenre = genres.find((genre) => ids?.includes(genre?.id));
  return matchingGenre ? matchingGenre?.name : "";
};
