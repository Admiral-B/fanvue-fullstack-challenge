import { Box, Card, CardMedia, CircularProgress, Modal } from "@mui/material";
import { Photo } from "../server/images";
import Image from "next/image";

interface ImageProps {
  photo: Photo;
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

const ImageCard = ({ photo, open, handleClose, handleOpen }: ImageProps) => {
  return (
    <>
      <Card
        sx={{
          position: "relative",
          width: "100%",
          borderRadius: 1,
          margin: 1,
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        <Box
          sx={{
            position: "relative",
            height: "200px",
          }}
        >
          {!photo.thumbnailUrl ? (
            <CircularProgress
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ) : (
            <Image
              src={photo.thumbnailUrl}
              alt={photo.title}
              layout="fill"
              objectFit="cover"
            />
          )}
        </Box>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: '95%',
            height: '95%',
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={photo.url}
            alt={photo.title}
            loading="lazy"
          />
        </Box>
      </Modal>
    </>
  );
};

export default ImageCard