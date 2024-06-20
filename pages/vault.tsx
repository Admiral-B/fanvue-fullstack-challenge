import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { getPhotos } from "../server/images";
import { Photo } from "../server/images";
import ImageCard from "../components/ImageCard";

const Vault: NextPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [open, setOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    getPhotos({ albumId: 1, limit: 10 }).then((photos) => {
      setPhotos(photos);
    });
  }, []);

  const handleOpen = (photo: Photo) => {
    setCurrentPhoto(photo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentPhoto(null);
  };

  return (
    <Grid container spacing={2}>
      {photos.map((photo) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
          <ImageCard
            photo={photo}
            open={open && currentPhoto?.id === photo.id}
            handleClose={handleClose}
            handleOpen={() => handleOpen(photo)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Vault;

