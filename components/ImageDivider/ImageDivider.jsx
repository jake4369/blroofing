import Image from "next/image";

// const ImageDivider = ({ img }) => {
//   return (
//     <Image
//       src={img}
//       alt=""
//       width={100}
//       height={100}
//       className="image-divider__img"
//       priority
//     />
//   );
// };

const ImageDivider = ({ dividerClassname }) => {
  return <div className={`img-divider ${dividerClassname}`}></div>;
};

export default ImageDivider;
