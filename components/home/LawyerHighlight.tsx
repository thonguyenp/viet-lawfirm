"use client";

import { Box, Container, Typography, Stack } from "@mui/material";
import Image from "next/image";

export default function LawyerHighlight() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 10 }}>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={5}
          alignItems="center"
        >
          <Box sx={{ position: "relative", width: 350, height: 450 }}>
            <Image
              src="https://images.unsplash.com/photo-1593113598332-cd6f9f3c9281?q=80"
              alt="Luật sư trưởng"
              fill
              style={{ objectFit: "cover", borderRadius: 12 }}
            />
          </Box>

          <Stack spacing={2}>
            <Typography variant="h3" sx={{ fontFamily: "Playfair Display" }}>
              Luật sư trưởng – Nguyễn Minh Khôi
            </Typography>

            <Typography>
              Với hơn 15 năm kinh nghiệm xử lý các vụ kiện lớn trong lĩnh vực
              doanh nghiệp, tài chính và đầu tư, luật sư Khôi là chuyên gia đầu
              ngành, mang lại niềm tin tuyệt đối cho khách hàng.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
