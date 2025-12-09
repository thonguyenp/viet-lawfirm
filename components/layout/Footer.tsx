"use client";

import { Box, Stack, Container } from "@mui/material";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box sx={{ background: "#000", color: "#fff", padding: "60px 0", marginTop: 10 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          gap={6}
        >
          <Stack gap={1}>
            <Box sx={{ fontFamily: "Cinzel", fontSize: 24, color: "#d4af37", fontWeight: 700 }}>
              VIET LAWFIRM
            </Box>
            <Box fontFamily="Inter">
              Đồng hành pháp lý – Bảo vệ quyền lợi – Kiến tạo giá trị.
            </Box>
          </Stack>

          <Stack gap={1} fontFamily="Inter">
            <Box fontWeight={700} color="#d4af37">Danh mục</Box>
            <Link href="/gioi-thieu">Giới thiệu</Link>
            <Link href="/dich-vu">Dịch vụ</Link>
            <Link href="/doi-ngu">Đội ngũ</Link>
            <Link href="/lien-he">Liên hệ</Link>
          </Stack>

          <Stack gap={1} fontFamily="Inter">
            <Box fontWeight={700} color="#d4af37">Liên hệ</Box>
            <Box>Hotline: 0987 123 456</Box>
            <Box>Email: contact@vietlawfirm.vn</Box>
            <Box>Địa chỉ: Quận 1, TP.HCM</Box>
          </Stack>

          <Stack gap={1} fontFamily="Inter">
            <Box fontWeight={700} color="#d4af37">Kết nối</Box>
            <Stack direction="row" gap={2}>
              <InstagramIcon sx={{ color: "#d4af37" }} />
              <FacebookIcon sx={{ color: "#d4af37" }} />
              <LinkedInIcon sx={{ color: "#d4af37" }} />
            </Stack>
          </Stack>
        </Stack>

        <Box
          sx={{
            marginTop: 6,
            textAlign: "center",
            fontFamily: "Inter",
            color: "#fff",
            opacity: 0.7
          }}
        >
          © 2025 Viet LawFirm – Bản quyền thuộc về công ty.
        </Box>
      </Container>
    </Box>
  );
}
