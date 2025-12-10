"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 500, md: 650 },
        width: "100%",
        overflow: "hidden"
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80"
        alt="Law Firm Hero"
        fill
        priority
        style={{ objectFit: "cover", filter: "brightness(0.5)" }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Stack spacing={3} sx={{ color: "#fff", maxWidth: 650 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            Dẫn đầu trong lĩnh vực pháp lý & tư vấn doanh nghiệp
          </Typography>

          <Typography sx={{ fontSize: 18 }}>
            Công Ty Luật Việt Minh giúp khách hàng giải quyết các vấn đề pháp lý phức tạp
            với sự tận tâm và chính xác tuyệt đối.
          </Typography>

          <Box>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/lien-he"
            >
              Liên hệ ngay
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
