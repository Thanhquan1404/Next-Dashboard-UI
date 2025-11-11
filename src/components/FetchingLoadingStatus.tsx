import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/system";

interface FetchingLoadingStatusProps {
  width?: string,
  height?: string,
  loading: boolean;
  text?: string;
  size?: number | string;
  color?: string;
  textOpacity?: number;
  className?: string;
  iconSx?: SxProps<Theme>;
  containerSx?: SxProps<Theme>;
}

const FetchingLoadingStatus = ({
  width = "auto",
  height = "auto",
  loading,
  text = "Processing...",
  size = 28,
  color = "white",
  textOpacity = 0.7,
  className = "",
  iconSx = {},
  containerSx = {},
}: FetchingLoadingStatusProps) => {
  if (!loading) return null;

  return (
    <Box
      className={`flex items-center justify-center ${className}`}
      sx={{
        width: width,
        height: height,
        ...containerSx, 
      }}
    >
      <CircularProgress
        size={size}
        sx={{
          color,
          ...iconSx, 
        }}
      />
      <span
        className="ml-2 text-sm"
        style={{ color, opacity: textOpacity }}
      >
        {text}
      </span>
    </Box>
  );
};

export default FetchingLoadingStatus;
