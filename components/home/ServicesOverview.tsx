"use client";

import { Box, Container, Typography, Stack } from "@mui/material";
import ServiceCard from "../services/ServiceCard";
import { services } from "@/lib/mockData";

export default function ServicesOverview() {
  return (
    <Container sx={{ py: 10 }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Playfair Display",
          textAlign: "center",
          mb: 5
        }}
      >
        Dịch vụ pháp lý nổi bật
      </Typography>

      <Stack direction="row" spacing={4}>
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </Stack>
    </Container>
  );
}
