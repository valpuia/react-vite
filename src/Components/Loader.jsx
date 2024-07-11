import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";

export default function Loader({ loading = false }) {
  const override = {
    display: "block",
    margin: "100px auto",
  };

  return (
    <ClipLoader
      color="#0ea5e9"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

Loader.propTypes = {
  loading: PropTypes.bool,
};
