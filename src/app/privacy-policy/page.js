import "../../styles/privacy-policy.css";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="page">
      <h1>Privacy Policy</h1>

      <p>
        Your privacy is important to us. This website does not collect personal
        information unless you voluntarily provide it.
      </p>

      <p>
        We may collect non-personal information such as browser type, device
        type, and usage data to improve our service.
      </p>

      <p>
        Third-party services like ads may use cookies. By using this website,
        you agree to this policy.
      </p>
    </div>
  );
}
