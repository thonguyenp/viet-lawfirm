"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const logos = [
  "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80"
];

export default function ClientLogos() {
  return (
    <Container sx={{ py: 10 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mb: 5, fontFamily: "Playfair Display" }}
      >
        Đối tác tiêu biểu
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        {logos.map((src, i) => (
          <Box key={i} sx={{ position: "relative", width: 180, height: 80 }}>
            <Image src={src} alt="Client Logo" fill style={{ objectFit: "cover", borderRadius: 8 }} />
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
