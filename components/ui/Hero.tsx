"use client";

import { Box, Stack, Container } from "@mui/material";
import { motion } from "framer-motion";

export interface HeroProps {
  title: string;
  subtitle: string;
  backgroundUrl?: string;
  ctaPrimary: string;
  ctaSecondary: string;
  keyword: string;
}

export default function Hero({
  title,
  subtitle,
  backgroundUrl,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
        }}
      />

      <Container
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          spacing={3}
          sx={{ color: "#fff", maxWidth: "600px" }}
        >
          <Box sx={{ fontSize: "48px", fontFamily: "Cinzel", fontWeight: 700 }}>
            {title}
          </Box>

          <Box sx={{ fontSize: "20px", maxWidth: "500px" }}>{subtitle}</Box>

          <Stack direction="row" spacing={2}>
            <Box
              component="a"
              href="#lien-he"
              sx={{
                px: 4,
                py: 1.6,
                background: "#d4af37",
                color: "#000",
                fontWeight: 600,
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {ctaPrimary}
            </Box>

            <Box
              component="a"
              href="#dich-vu"
              sx={{
                px: 4,
                py: 1.6,
                border: "2px solid #d4af37",
                color: "#fff",
                fontWeight: 600,
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {ctaSecondary}
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
