import { useRouter } from 'next/router'

export default (req, res) => {
  res.setHeader('Set-Cookie', 'v=12');
  res.status(200).json("Hello");
}