"use client";

import { Box, Typography, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";

export interface CTASectionProps {
  title: string;
  buttonText: string;
  onClick?: () => void;
}

export default function CTASection({
  title,
  buttonText,
  onClick,
}: CTASectionProps) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      sx={{
        background: "linear-gradient(90deg, #d4af37, #e46f00)",
        color: "#fff",
        py: 10,
        textAlign: "center",
      }}
    >
      <Stack spacing={3} sx={{ maxWidth: 800, mx: "auto" }}>
        <Typography
          variant="h3"
          sx={{ fontFamily: "Cinzel, serif", fontWeight: 700 }}
        >
          {title}
        </Typography>

        <Button
          onClick={onClick}
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            width: 200,
            mx: "auto",
            fontWeight: 700,
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        >
          {buttonText}
        </Button>
      </Stack>
    </Box>
  );
}
