import "../../styles/terms-and-conditions.css";

export const metadata = {
  title: "Terms and Conditions",
};

export default function Terms() {
  return (
    <div className="page">
      <h1>Terms and Conditions</h1>

      <p>
        By accessing this website, you agree to be bound by these terms and
        conditions.
      </p>

      <p>
        The content provided is for informational purposes only. We are not
        responsible for accuracy or completeness.
      </p>

      <p>
        We reserve the right to modify these terms at any time without notice.
      </p>
    </div>
  );
}
