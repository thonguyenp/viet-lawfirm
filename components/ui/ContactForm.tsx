"use client";

import { Stack, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";

export interface ContactFormProps {
  onSubmitSuccess?: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const submit = (data: FormData) => {
    console.log("FORM:", data);
    reset();
    if (onSubmitSuccess) onSubmitSuccess();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Stack spacing={2}>
        <TextField label="Họ và tên" {...register("name")} required />
        <TextField label="Email" {...register("email")} required />
        <TextField
          label="Nội dung"
          {...register("message")}
          multiline
          rows={4}
          required
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#d4af37",
            color: "#000",
            "&:hover": { backgroundColor: "#b8932e" },
          }}
        >
          Gửi yêu cầu
        </Button>
      </Stack>
    </form>
  );
}
