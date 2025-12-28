import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        © {new Date().getFullYear()} protoncave.com | All rights reserved
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-and-conditions">Terms & Conditions</a>
        <a href="/aboutus">About Us</a>
        <a href="/contactus">Contact Us</a>
      </div>
    </footer>
  );
}
