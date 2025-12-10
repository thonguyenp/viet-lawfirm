"use client";

import {
  Drawer,
  Box,
  Stack,
  Typography,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

export default function MobileMenu({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const navItems = [
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Tầm nhìn", href: "/tam-nhin" },
    { label: "Dịch vụ", href: "/dich-vu" },
    { label: "Đội ngũ", href: "/doi-ngu" },
    { label: "Liên hệ", href: "/lien-he" }
  ];

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 260, p: 3 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="h6"
            sx={{ fontFamily: "Playfair Display", fontWeight: 700 }}
          >
            Menu
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Stack spacing={2} sx={{ mt: 4 }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              style={{
                fontSize: 18,
                color: "#0d47a1",
                textDecoration: "none",
                fontWeight: 600
              }}
            >
              {item.label}
            </Link>
          ))}
        </Stack>
      </Box>
    </Drawer>
  );
}
