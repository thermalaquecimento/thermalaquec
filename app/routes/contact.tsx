import { Email, WhatsApp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import type { MetaFunction } from "@remix-run/react";
import { Section, SectionContent, SectionTitle } from "~/components/utils/Section";

export const meta: MetaFunction = ({ matches }) => {
  const parentMeta = matches.flatMap(
    (match) => match.meta ?? []
  );
  return [...parentMeta, { title: "Entre em Contato - Thermal Aquecimento" }];
};

const contactOpts = [
  { icon: Email, text: "comercial@thermalaquecimento.com.br" },
  { icon: WhatsApp, text: "(54) 99653-8879" },
]

export default function ContactPage() {
  return (
    <Section>
      <SectionTitle title="Fale conosco" />

      <SectionContent description={
        "Ligue para nós agora mesmo - estamos prontos para encontrar a solução ideal para o aquecimento de sua casa ou piscina."
      }>
        <Typography variant={"h2"} className="py-8">contato:</Typography>
        {contactOpts.map((opt, i) => (
          <Box key={i} className="md:flex p-2">
            <opt.icon className="mr-4 text-gray-dark-300" fontSize="small" />
            <Typography variant="body2">{opt.text}</Typography>
          </Box>
        ))}
      </SectionContent>
    </Section>
  );
}