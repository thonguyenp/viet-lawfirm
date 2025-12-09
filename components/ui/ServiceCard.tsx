"use client";

import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { ServiceItem } from "@/data/services";

export interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Box
      component={motion.div}
      whileHover={{ y: -6 }}
      sx={{
        width: {
            xs: "100%",   // mobile
            sm: "48%",    // tablet
            md: "31%",    // desktop: 3 cột
        },        border: "1px solid #e5e5e5",
        p: 3,
        borderRadius: "10px",
        background: "#fff",
        transition: "0.3s",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        "&:hover": {
          boxShadow: "0 0 20px rgba(212,175,55,0.4)",
        },
      }}
    >
      <Stack spacing={2}>
        <Box
          sx={{
            fontFamily: "Cinzel",
            fontSize: "24px",
            fontWeight: 600,
            maxWidth: "300px",
          }}
        >
          {service.title}
        </Box>

        <Box sx={{ fontSize: "16px", maxWidth: "320px", color: "#555" }}>
          {service.description}
        </Box>

        <Box
          component="a"
          href={`/dich-vu/${service.slug}`}
          sx={{
            color: "#d4af37",
            fontWeight: 600,
            mt: 1,
          }}
        >
          Xem chi tiết →
        </Box>
      </Stack>
    </Box>
  );
}
