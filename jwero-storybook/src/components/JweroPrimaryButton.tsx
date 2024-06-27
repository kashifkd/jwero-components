import { CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";

const START_POSITION = "start";
const END_POSITION = "end";

type PrimaryButtonProps = {
  title: string;
  onClickFunction?: () => void;
  iconProps?: {
    icon: React.ReactNode;
    position: string;
  };
  boxSx?: object;
  textSx?: object;
  loadingProps?: {
    loading: boolean;
    position: string;
  };
  disabled?: boolean;
};

const JweroPrimaryButton = ({
  title,
  onClickFunction,
  iconProps,
  boxSx,
  textSx,
  loadingProps,
  disabled,
}: PrimaryButtonProps) => {
  return (
    <Stack
      onClick={onClickFunction}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        gap: iconProps?.position === START_POSITION ? "0.35rem" : "0.2rem",
        padding:
          iconProps?.position === START_POSITION
            ? "0.5rem 0.65rem 0.5rem 0.5rem"
            : iconProps?.position === END_POSITION
              ? "0.5rem 0.6rem 0.5rem 0.65rem"
              : "0.5rem 0.75rem",
        cursor: disabled ? "not-allowed" : "pointer",
        backgroundColor: "blue",
        borderRadius: "0.625rem",
        width: "fit-content",
        "&:hover": {
          boxShadow: `0px 2px 4px 0px (0,0,0,0.40)`,
        },
        ...boxSx,
      }}
    >
      {/* Icon/Loading at start */}
      {loadingProps?.loading && loadingProps.position === START_POSITION ? (
        <CircularProgress size={24} />
      ) : !loadingProps?.loading &&
        iconProps?.icon &&
        iconProps?.position === START_POSITION ? (
        iconProps.icon
      ) : null}
      <Typography
        sx={{
          fontSize: "0.875rem",
          fontWeight: 600,
          letterSpacing: "0.025rem",
          lineHeight: "normal",
          color: "white",
          userSelect: "none",
          ...textSx,
        }}
      >
        {title}
      </Typography>

      {/* Icon/Loading at end */}
      {loadingProps?.loading && loadingProps.position === END_POSITION ? (
        <CircularProgress size={24} />
      ) : !loadingProps?.loading &&
        iconProps?.icon &&
        iconProps?.position === END_POSITION ? (
        iconProps.icon
      ) : null}
    </Stack>
  );
};

export default JweroPrimaryButton;
