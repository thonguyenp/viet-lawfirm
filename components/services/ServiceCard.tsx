"use client";

import { Box, Typography, Paper, Button, Stack } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        transition: "0.3s",
        ":hover": { transform: "translateY(-3px)", boxShadow: 6 }
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: 200 }}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          style={{ objectFit: "cover", borderRadius: 8 }}
        />
      </Box>

      <Typography variant="h5" sx={{ fontFamily: "Playfair Display" }}>
        {service.title}
      </Typography>

      <Typography sx={{ opacity: 0.8 }}>{service.description}</Typography>

      <Stack direction="row" justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          LinkComponent={Link}
          href={`/dich-vu/${service.slug}`}
        >
          Xem chi tiết
        </Button>
      </Stack>
    </Paper>
  );
}
