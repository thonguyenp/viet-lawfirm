"use client";

import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";

export interface PartnerLogosProps {
  logos: string[];
}

export default function PartnerLogos({ logos }: PartnerLogosProps) {
  return (
    <Stack
      direction="row"
      spacing={4}
      justifyContent="center"
      flexWrap="wrap"
      sx={{ py: 6 }}
    >
      {logos.map((url: string, i: number) => (
        <Box
          key={i}
          component={motion.div}
          whileHover={{ scale: 1.1 }}
          sx={{
            width: 120,
            height: 60,
            backgroundImage: `url(${url})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.7,
            cursor: "pointer",
          }}
        />
      ))}
    </Stack>
  );
}
