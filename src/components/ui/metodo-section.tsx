"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { MessageCircle, Ruler, Hammer, Truck, ShieldCheck } from "lucide-react"
import { TextRotate, TextRotateRef } from "@/components/ui/text-rotate"
import { Badge } from "@/components/ui/badge"

// ─── Dados do método ─────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Conversa",
    icon: MessageCircle,
    tagline: "Gratuita. Sem compromisso.",
    description:
      "Agendamos uma visita técnica gratuita. Ouvimos o que você imagina, medimos cada detalhe do espaço e entendemos seu estilo de vida — tudo antes de qualquer proposta ou cobrança.",
  },
  {
    number: "02",
    title: "Projeto 3D",
    icon: Ruler,
    tagline: "Você vê antes de pagar.",
    description:
      "Nossos designers criam uma visualização realista do seu ambiente com cores, texturas e medidas exatas. Ajustamos quantas vezes for necessário até você estar 100% satisfeito.",
  },
  {
    number: "03",
    title: "Produção",
    icon: Hammer,
    tagline: "Qualidade que você pode tocar.",
    description:
      "Fabricamos com MDF de alta qualidade, ferragens importadas e acabamentos premium. Cada peça é produzida sob medida e inspecionada individualmente antes de sair da fábrica.",
  },
  {
    number: "04",
    title: "Instalação",
    icon: Truck,
    tagline: "Na data combinada. Sempre.",
    description:
      "Nossa equipe chega pontualmente, protege seu piso e paredes durante toda a montagem e entrega o ambiente limpo, organizado e 100% funcional — sem surpresas no valor final.",
  },
  {
    number: "05",
    title: "Garantia",
    icon: ShieldCheck,
    tagline: "5 anos. Sem burocracia.",
    description:
      "Qualquer problema dentro do período de garantia, resolvemos sem questionamento e sem custo. Nossa reputação é construída projeto a projeto — e isso não tem preço.",
  },
]

// ─── Item que dispara inView ──────────────────────────────────────────────────

function StepItem({
  step,
  index,
  activeIndex,
  onInView,
}: {
  step: (typeof steps)[number]
  index: number
  activeIndex: number
  onInView: (index: number, inView: boolean) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" })
  const Icon = step.icon
  const isActive = activeIndex === index

  useEffect(() => {
    onInView(index, isInView)
  }, [isInView, index, onInView])

  return (
    <div
      ref={ref}
      className="h-screen flex items-center justify-center md:justify-start md:pl-16 lg:pl-24"
    >
      <motion.div
        animate={{ opacity: isActive ? 1 : 0.3, x: isActive ? 0 : -12 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-4 max-w-xs"
      >
        {/* Número */}
        <span className="text-7xl font-black text-primary/20 leading-none select-none">
          {step.number}
        </span>

        {/* Ícone + título */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-bold text-xl">{step.title}</p>
            <p className="text-sm text-muted-foreground">{step.tagline}</p>
          </div>
        </div>

        {/* Barra de progresso */}
        <div className="h-0.5 w-24 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            animate={{ width: isActive ? "100%" : "0%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </div>
  )
}

// ─── Seção completa ───────────────────────────────────────────────────────────

export function MetodoSection() {
  const titleRef = useRef<TextRotateRef>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleInView = useCallback((index: number, inView: boolean) => {
    if (inView) {
      setActiveIndex(index)
      titleRef.current?.jumpTo(index)
    }
  }, [])

  const active = steps[activeIndex]

  return (
    <section id="metodo" className="w-full">
      {/* Header fora do scroll */}
      <div className="container px-4 md:px-6 pt-16 pb-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4" variant="secondary">
            Como Trabalhamos
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Do sonho à realidade
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Um processo simples, transparente e sem surpresas — do primeiro contato até a entrega.
          </p>
        </motion.div>
      </div>

      {/* Scroll section */}
      <div className="relative flex">
        {/* ── Left: scrollable step items ── */}
        <div className="w-full md:w-1/2">
          {steps.map((step, i) => (
            <StepItem
              key={i}
              step={step}
              index={i}
              activeIndex={activeIndex}
              onInView={handleInView}
            />
          ))}
        </div>

        {/* ── Right: sticky text panel ── */}
        <div className="hidden md:flex w-1/2 sticky top-0 h-screen items-center justify-center">
          <div className="max-w-sm space-y-6 px-8">
            {/* Número grande animado */}
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex + "-num"}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
                className="block text-8xl font-black text-primary/15 leading-none select-none"
              >
                {active.number}
              </motion.span>
            </AnimatePresence>

            {/* Título com TextRotate */}
            <div className="text-4xl font-bold overflow-hidden h-12">
              <TextRotate
                ref={titleRef}
                texts={steps.map((s) => s.title)}
                auto={false}
                loop={false}
                splitBy="characters"
                staggerFrom="first"
                staggerDuration={0.03}
                animatePresenceMode="wait"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                mainClassName="text-4xl font-bold"
                splitLevelClassName="overflow-hidden"
              />
            </div>

            {/* Tagline */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex + "-tag"}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-sm font-semibold text-primary uppercase tracking-widest"
              >
                {active.tagline}
              </motion.p>
            </AnimatePresence>

            {/* Descrição completa */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex + "-desc"}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-muted-foreground leading-relaxed text-base"
              >
                {active.description}
              </motion.p>
            </AnimatePresence>

            {/* Indicadores de passo */}
            <div className="flex gap-2 pt-2">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
