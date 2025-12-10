"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Stack,
  IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Tầm nhìn", href: "/tam-nhin" },
    { label: "Dịch vụ", href: "/dich-vu" },
    { label: "Đội ngũ", href: "/doi-ngu" },
    { label: "Liên hệ", href: "/lien-he" }
  ];

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: "#0d47a1" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: 700,
              cursor: "pointer"
            }}
          >
            <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
              Công Ty Luật Việt Minh
            </Link>
          </Typography>

          <Stack
            direction="row"
            spacing={4}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "white",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "0.3s"
                }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
