import Image from "next/image";

const ImageDivider = ({ img }) => {
  return (
    <Image
      src={img}
      alt=""
      width={100}
      height={100}
      className="image-divider__img"
      priority
    />
  );
};

export default ImageDivider;
