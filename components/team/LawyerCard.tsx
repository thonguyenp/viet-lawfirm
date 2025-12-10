"use client";

import { Box, Typography, Paper, Stack } from "@mui/material";
import Image from "next/image";
import { Lawyer } from "@/types";

export default function LawyerCard({ lawyer }: { lawyer: Lawyer }) {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 4,
        textAlign: "center",
        transition: "0.3s",
        ":hover": { transform: "translateY(-3px)", boxShadow: 6 }
      }}
    >
      <Box
        sx={{
          width: 200,
          height: 240,
          margin: "0 auto",
          position: "relative",
          borderRadius: 4,
          overflow: "hidden"
        }}
      >
        <Image src={lawyer.image} alt={lawyer.name} fill style={{ objectFit: "cover" }} />
      </Box>

      <Stack spacing={1} sx={{ mt: 2 }}>
        <Typography variant="h5" sx={{ fontFamily: "Playfair Display" }}>
          {lawyer.name}
        </Typography>
        <Typography sx={{ opacity: 0.7 }}>{lawyer.role}</Typography>
      </Stack>
    </Paper>
  );
}
