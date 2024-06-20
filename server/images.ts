export type Photo = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export type GetPhotoProps = {
  albumId?: number,
  limit?: number
}

async function getPhotos({ albumId, limit }: GetPhotoProps) {
  const queryParams = new URLSearchParams();
  if (albumId !== undefined) {
    queryParams.append('albumId', albumId.toString());
  }
  if (limit !== undefined) {
    queryParams.append('_limit', limit.toString());
  }
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?${queryParams.toString()}`);
  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }
  const photos: Photo[] = await res.json();

  const limited_photos = photos.slice(0, limit);
  return limited_photos;
}


export {
  getPhotos
}