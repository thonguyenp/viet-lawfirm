"use client";

import { Box, Container, Typography, Stack, Paper } from "@mui/material";

const data = [
  {
    name: "Nguyễn Văn H",
    content:
      "Dịch vụ rất chuyên nghiệp, hỗ trợ tận tâm và tư vấn rõ ràng. Tôi hoàn toàn yên tâm khi làm việc cùng Công Ty Luật Việt Minh."
  },
  {
    name: "Công ty ABC",
    content:
      "Công Ty Luật Việt Minh đã giúp chúng tôi xử lý các vấn đề pháp lý phức tạp nhanh chóng và hiệu quả."
  }
];

export default function Testimonials() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 10 }}>
      <Container>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 5, fontFamily: "Playfair Display" }}
        >
          Khách hàng nói gì về chúng tôi
        </Typography>

        <Stack spacing={4}>
          {data.map((t, i) => (
            <Paper key={i} sx={{ p: 4, borderRadius: 4 }}>
              <Typography sx={{ fontSize: 18, mb: 2 }}>{t.content}</Typography>
              <Typography sx={{ fontWeight: 700 }}>{t.name}</Typography>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
