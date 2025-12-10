"use client";

import { useState, useEffect } from "react";
import { Box, TextField, Button, Stack, Typography } from "@mui/material";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const prev = JSON.parse(localStorage.getItem("contact_submissions") || "[]");
    const updated = [...prev, { ...form, date: new Date().toISOString() }];

    localStorage.setItem("contact_submissions", JSON.stringify(updated));
    alert("Gửi liên hệ thành công!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Stack spacing={3}>
        <TextField
          label="Họ và tên"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Nội dung"
          name="message"
          value={form.message}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
        />

        <Button
          variant="contained"
          color="primary"
          sx={{ width: 180 }}
          onClick={handleSubmit}
        >
          Gửi ngay
        </Button>
      </Stack>
    </Box>
  );
}
