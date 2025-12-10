"use client";

import { Box, Container, Typography, Stack } from "@mui/material";

export default function WhyChooseUs() {
  const reasons = [
    "Đội ngũ luật sư giàu kinh nghiệm",
    "Tư vấn chính xác – giải pháp hiệu quả",
    "Bảo mật tuyệt đối thông tin khách hàng",
    "Quy trình minh bạch – chi phí rõ ràng"
  ];

  return (
    <Container sx={{ py: 10 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mb: 5, fontFamily: "Playfair Display" }}
      >
        Vì sao chọn Công Ty Luật Việt Minh?
      </Typography>

      <Stack spacing={3}>
        {reasons.map((r, i) => (
          <Typography key={i} sx={{ fontSize: 18, textAlign: "center" }}>
            • {r}
          </Typography>
        ))}
      </Stack>
    </Container>
  );
}
