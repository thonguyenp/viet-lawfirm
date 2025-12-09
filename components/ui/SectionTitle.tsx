"use client";

import { Box, Stack } from "@mui/material";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  color?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  return (
    <Stack spacing={1} sx={{ textAlign: align, mb: 6 }}>
      <Box
        sx={{
          fontFamily: "Cinzel",
          fontSize: "36px",
          fontWeight: 700,
          color: "#000",
        }}
      >
        {title}
      </Box>

      {subtitle && (
        <Box sx={{ fontSize: "18px", color: "#444", maxWidth: "600px", mx: "auto" }}>
          {subtitle}
        </Box>
      )}
    </Stack>
  );
}
