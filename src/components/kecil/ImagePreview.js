import * as React from "react";
import { Box, Modal, Fade, Backdrop, Skeleton } from "@mui/material";
import Carousel from "react-multi-carousel";
import { styled } from "@mui/material/styles";
import { mobile } from "../../utils";

const ContainerBox = styled(Box)`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  box-shadow: 24;
  ${mobile({ width: "90%" })}
`;

const ProductImage = styled("img")`
  object-fit: cover;
  height: 80vh;
  margin: auto;
  width: 100%;
  ${mobile({ height: "50vh" })}
`;

const ImagePreview = ({ handleClose, open, product, loading }) => {

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ContainerBox>
            <Carousel
              additionalTransfrom={1}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 1,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 1,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {Array.isArray(product.images)
                ? product.images.map((item, index) => (
                    <Box component="li" sx={{ flex: 1 }} key={index}>
                      {loading ? (
                        <ProductImage src={`https://res.cloudinary.com/eundangdotcom/image/upload/${item.image_id}`} alt={item.image_id} />
                      ) : (
                        <Skeleton
                          variant="rectangular"
                          animation="wave"
                          sx={{
                            width: { md: 200, xs: 65 },
                            height: { md: 220, xs: 90 },
                          }}
                        />
                      )}
                    </Box>
                  ))
                : null}
            </Carousel>
          </ContainerBox>
        </Fade>
      </Modal>
    </div>
  );
};

export default ImagePreview;
