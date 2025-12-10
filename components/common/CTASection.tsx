"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";

export default function CTASection() {
  return (
    <Box sx={{ bgcolor: "#0d47a1", color: "#fff", py: 8, mt: 10 }}>
      <Container>
        <Stack spacing={3} sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontFamily: "Playfair Display" }}>
            Cần hỗ trợ pháp lý ngay hôm nay?
          </Typography>

          <Typography>
            Đội ngũ luật sư của chúng tôi luôn sẵn sàng đồng hành và giải quyết mọi vấn đề của bạn.
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            href="/lien-he"
            sx={{ mx: "auto", mt: 2 }}
          >
            Liên hệ ngay
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
