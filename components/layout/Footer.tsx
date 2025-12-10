"use client";

import { Box, Container, Typography, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#0d47a1", color: "#fff", py: 6, mt: 10 }}>
      <Container>
        <Stack spacing={2}>
          <Typography variant="h5" sx={{ fontFamily: "Playfair Display" }}>
            Công Ty Luật Việt Minh
          </Typography>

          <Typography>
            Công ty luật hàng đầu Việt Nam – đồng hành pháp lý cùng doanh nghiệp,
            tổ chức và cá nhân.
          </Typography>

          <Typography>Email: contact@vietlawfirm.vn</Typography>
          <Typography>Hotline: 0909 999 888</Typography>

          <Typography sx={{ mt: 3, opacity: 0.7 }}>
            © 2025 Công Ty Luật Việt Minh – All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
