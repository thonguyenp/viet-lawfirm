"use client";

import { Box, Stack } from "@mui/material";
import Link from "next/link";

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: open ? 0 : "-100%",
        width: "75%",
        height: "100vh",
        background: "#000",
        color: "#fff",
        zIndex: 9999,
        transition: "0.3s ease",
        padding: 4
      }}
    >
      <Stack gap={3} fontFamily="Inter" fontSize={20}>
        <Box onClick={onClose}>
          <Link href="/gioi-thieu">Giới thiệu</Link>
        </Box>
        <Box onClick={onClose}>
          <Link href="/dich-vu">Dịch vụ</Link>
        </Box>
        <Box onClick={onClose}>
          <Link href="/du-an">Dự án</Link>
        </Box>
        <Box onClick={onClose}>
          <Link href="/doi-ngu">Đội ngũ</Link>
        </Box>
        <Box onClick={onClose}>
          <Link href="/tam-nhin">Tầm nhìn</Link>
        </Box>
        <Box onClick={onClose}>
          <Link href="/lien-he">Liên hệ</Link>
        </Box>
      </Stack>
    </Box>
  );
}
