"use client";

import { Box, Stack, Container, Button } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => setOpen(true);
  const handleCloseMenu = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 999,
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.4)"
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ height: 70 }}
          >
            <Link href="/">
              <Box
                sx={{
                  fontFamily: "Cinzel",
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#d4af37"
                }}
              >
                VIET LAWFIRM
              </Box>
            </Link>

            <Stack
              direction="row"
              gap={4}
              sx={{
                display: { xs: "none", md: "flex" },
                color: "#fff",
                fontFamily: "Inter"
              }}
            >
              <Link href="/gioi-thieu">Giới thiệu</Link>
              <Link href="/dich-vu">Dịch vụ</Link>
              <Link href="/du-an">Dự án</Link>
              <Link href="/doi-ngu">Đội ngũ</Link>
              <Link href="/tam-nhin">Tầm nhìn</Link>
              <Link href="/lien-he">Liên hệ</Link>
            </Stack>

            <Stack direction="row" gap={2} alignItems="center">
              <Button
                variant="contained"
                sx={{
                  background: "#d4af37",
                  color: "#000",
                  fontWeight: 700,
                  display: { xs: "none", md: "flex" },
                  ":hover": { background: "#c19d32" }
                }}
                href="/lien-he"
              >
                Tư vấn miễn phí
              </Button>

              <MenuIcon
                onClick={handleOpenMenu}
                sx={{ display: { xs: "block", md: "none" }, color: "#fff", cursor: "pointer" }}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>

      <MobileMenu open={open} onClose={handleCloseMenu} />
    </>
  );
}
