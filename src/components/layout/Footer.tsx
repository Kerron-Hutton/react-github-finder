import { FaSlackHash } from "react-icons/fa"

export default function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <FaSlackHash size={30} />
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}
