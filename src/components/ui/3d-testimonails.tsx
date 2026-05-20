"use client";
import React, { ComponentPropsWithoutRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

// ─── Marquee ────────────────────────────────────────────────────────────────

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  ariaLabel?: string;
  ariaLive?: "off" | "polite" | "assertive";
  ariaRole?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ariaLabel,
  ariaLive = "off",
  ariaRole = "marquee",
  ...props
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      {...props}
      ref={marqueeRef}
      data-slot="marquee"
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        { "flex-row": !vertical, "flex-col": vertical },
        className
      )}
      aria-label={ariaLabel}
      aria-live={ariaLive}
      role={ariaRole}
      tabIndex={0}
    >
      {React.useMemo(
        () => (
          <>
            {Array.from({ length: repeat }, (_, i) => (
              <div
                key={i}
                className={cn(
                  !vertical ? "flex-row [gap:var(--gap)]" : "flex-col [gap:var(--gap)]",
                  "flex shrink-0 justify-around",
                  !vertical && "animate-marquee flex-row",
                  vertical && "animate-marquee-vertical flex-col",
                  pauseOnHover && "group-hover:[animation-play-state:paused]",
                  reverse && "[animation-direction:reverse]"
                )}
              >
                {children}
              </div>
            ))}
          </>
        ),
        [repeat, children, vertical, pauseOnHover, reverse]
      )}
    </div>
  );
}

// ─── Dados dos depoimentos ───────────────────────────────────────────────────

const testimonials = [
  {
    name: "Fernanda Lima",
    city: "São Paulo, SP",
    body: "A cozinha planejada superou todas as minhas expectativas. Atendimento impecável do começo ao fim!",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    stars: 5,
  },
  {
    name: "Rodrigo Mendes",
    city: "Campinas, SP",
    body: "Finalmente um closet que aproveita cada cantinho do quarto. O projeto em 3D me encantou antes mesmo da execução.",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
    stars: 5,
  },
  {
    name: "Patrícia Costa",
    city: "Santos, SP",
    body: "Contratei para home office e escritório. Qualidade do material é impressionante e o prazo foi cumprido rigorosamente.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 5,
  },
  {
    name: "Marcos Oliveira",
    city: "Guarulhos, SP",
    body: "Já é o terceiro apartamento que faço com eles. Seriedade, qualidade e bom preço. Não existe outro fornecedor para mim.",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    stars: 5,
  },
  {
    name: "Juliana Ferreira",
    city: "São Bernardo, SP",
    body: "Os móveis do quarto ficaram lindos! A equipe foi super atenciosa, entendeu tudo que eu queria sem enrolação.",
    img: "https://randomuser.me/api/portraits/women/53.jpg",
    stars: 5,
  },
  {
    name: "André Souza",
    city: "Osasco, SP",
    body: "Visita técnica gratuita e projeto em 3D foram decisivos. Entregaram antes do prazo e sem nenhuma surpresa no valor.",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    stars: 5,
  },
  {
    name: "Camila Rocha",
    city: "Santo André, SP",
    body: "A sala ficou completamente transformada. Painel de TV e estante planejada deram uma cara nova e muito mais organizada ao ambiente.",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    stars: 5,
  },
  {
    name: "Felipe Nunes",
    city: "Mogi das Cruzes, SP",
    body: "Recomendo para todo mundo. Desde a primeira visita até a entrega final, nada saiu do combinado. Profissionalismo total.",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
    stars: 5,
  },
  {
    name: "Beatriz Alves",
    city: "Barueri, SP",
    body: "A cozinha em L ficou perfeita para o espaço que tínhamos. Aproveitaram até o cantinho que eu achava impossível de usar.",
    img: "https://randomuser.me/api/portraits/women/72.jpg",
    stars: 5,
  },
];

// ─── Card de depoimento ──────────────────────────────────────────────────────

function TestimonialCard({ img, name, city, body, stars }: (typeof testimonials)[number]) {
  return (
    <Card className="w-64 shrink-0 shadow-sm">
      <CardContent className="pt-5">
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: stars }).map((_, i) => (
            <svg key={i} className="h-4 w-4 text-amber-500 fill-amber-500" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <blockquote className="text-sm text-foreground leading-relaxed mb-4">
          "{body}"
        </blockquote>
        <div className="flex items-center gap-2.5">
          <Avatar className="size-8">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{city}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Seção completa ──────────────────────────────────────────────────────────

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="w-full py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4" variant="secondary">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Mais de 500 famílias que confiaram na Marcenaria Silva para transformar seus lares.
          </p>
        </motion.div>
      </div>

      {/* 3-D marquee container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex h-[480px] w-full flex-row items-center justify-center overflow-hidden gap-3 [perspective:300px]"
      >
        <div
          className="flex flex-row items-center gap-4"
          style={{
            transform:
              "translateX(-80px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
          }}
        >
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:38s]">
            {testimonials.map((r) => <TestimonialCard key={r.name + "a"} {...r} />)}
          </Marquee>
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:42s]">
            {testimonials.map((r) => <TestimonialCard key={r.name + "b"} {...r} />)}
          </Marquee>
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:36s]">
            {testimonials.map((r) => <TestimonialCard key={r.name + "c"} {...r} />)}
          </Marquee>
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:44s]">
            {testimonials.map((r) => <TestimonialCard key={r.name + "d"} {...r} />)}
          </Marquee>

          {/* fades */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
        </div>
      </motion.div>
    </section>
  );
}
