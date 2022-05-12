import Image from "next/image";

const ProfileImage = ({ image, name }) => (
  <div className="relative inline-block leading-none">
    <Image
      alt={name}
      src="/profile.jpg"
      layout="fixed"
      width={144}
      height={144}
      alt={name}
    />
    <div className="absolute inset-0 rounded-full bg-lead z-0 transform translate-x-12"></div>
  </div>
)

export default ProfileImage
