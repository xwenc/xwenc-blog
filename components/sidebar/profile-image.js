import Image from "next/image";

const ProfileImage = ({ image, name }) => (
  <div className="relative inline-block leading-none">
    <Image
      alt={name}
      src={image}
      layout="fixed"
      width={144}
      height={144}
      alt={name}
      className="rounded-full relative z-10"
    />
    <div className="absolute inset-0 rounded-full bg-lead z-0 transform translate-x-12"></div>
  </div>
)

export default ProfileImage
