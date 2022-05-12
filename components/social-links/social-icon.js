import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaGoodreadsG,
  FaMediumM,
  FaInstagram,
  FaLinkedinIn,
  FaProductHunt,
  FaTwitter,
  FaYoutube,
  FaXing,
} from "react-icons/fa"

const SocialIcon = ({ name, ...params }) => {
  const icons = {
    behance: FaBehance,
    dribbble: FaDribbble,
    facebook: FaFacebook,
    github: FaGithub,
    goodreads: FaGoodreadsG,
    medium: FaMediumM,
    instagram: FaInstagram,
    linkedin: FaLinkedinIn,
    producthunt: FaProductHunt,
    twitter: FaTwitter,
    youtube: FaYoutube,
    xing: FaXing,
  }

  const Icon = icons[name]

  return Icon ? <Icon {...params} /> : null
}

export default SocialIcon
