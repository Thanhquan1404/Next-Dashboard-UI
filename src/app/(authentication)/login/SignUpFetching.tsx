import CircularProgress from "@mui/material/CircularProgress";

const SignUpFetching = ({ loading }: { loading: boolean }) => {
  if (!loading) return null;
  return (
    <div className="flex items-center justify-center py-3">
      <CircularProgress size="28px" />
      <span className="ml-2 text-white text-sm opacity-70">Processing...</span>
    </div>
  );
};

export default SignUpFetching;
