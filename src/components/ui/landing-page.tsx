"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Share2,
  MessageCircle,
  Home,
  BedDouble,
  UtensilsCrossed,
  Briefcase,
  Bath,
  Tv,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { HeroParallax } from "@/components/ui/hero-parallax"
import { GalleryGridBlock } from "@/components/ui/gallery-grid-block-shadcnui"
import { TestimonialsSection } from "@/components/ui/3d-testimonails"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

// Unsplash images — furniture / interior design
const SHOWROOM_PRODUCTS = [
  { title: "Cozinha Contemporânea",     link: "#portfolio", thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
  { title: "Quarto Master com Closet",  link: "#portfolio", thumbnail: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80" },
  { title: "Sala de Estar Integrada",   link: "#portfolio", thumbnail: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" },
  { title: "Quarto Planejado Casal",    link: "#portfolio", thumbnail: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80" },
  { title: "Home Office Completo",      link: "#portfolio", thumbnail: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80" },
  { title: "Cozinha em L Americana",    link: "#portfolio", thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80" },
  { title: "Closet Feminino",           link: "#portfolio", thumbnail: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80" },
  { title: "Sala de Jantar Planejada",  link: "#portfolio", thumbnail: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=600&q=80" },
  { title: "Banheiro com Gabinete",     link: "#portfolio", thumbnail: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80" },
  { title: "Escritório Corporativo",    link: "#portfolio", thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { title: "Quarto Infantil",           link: "#portfolio", thumbnail: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80" },
  { title: "Lavanderia Planejada",      link: "#portfolio", thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { title: "Varanda Gourmet",           link: "#portfolio", thumbnail: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80" },
  { title: "Painel de TV Moderno",      link: "#portfolio", thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" },
  { title: "Closet Masculino",          link: "#portfolio", thumbnail: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80" },
]

const PORTFOLIO_IMAGES = [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
  "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=1200&q=80",
]

const ABOUT_IMAGE = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80"

const TEAM_IMAGES = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
]

export function MoveisPlanejados() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${scrollY > 50 ? "shadow-md" : ""}`}
      >
        <div className="container flex h-16 items-center justify-between border-x border-muted">
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="h-10 w-10 rounded-2xl bg-primary flex items-center justify-center"
            >
              <Home className="h-5 w-5 text-primary-foreground" />
            </motion.div>
            <span className="font-bold text-xl tracking-tight">Marcenaria Silva</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            {["Ambientes", "Portfólio", "Sobre", "Depoimentos", "Contato"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace("ó", "o").replace("é", "e")}`}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button size="sm" className="rounded-full">
              Solicitar Orçamento
            </Button>
          </div>

          <button className="flex md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menu</span>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background md:hidden"
        >
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-2xl bg-primary flex items-center justify-center">
                <Home className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Marcenaria Silva</span>
            </Link>
            <button onClick={toggleMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Fechar menu</span>
            </button>
          </div>
          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="container grid gap-3 pb-8 pt-6"
          >
            {["Ambientes", "Portfólio", "Sobre", "Depoimentos", "Contato"].map((item, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <Link
                  href={`#${item.toLowerCase().replace("ó", "o").replace("é", "e")}`}
                  className="flex items-center justify-between rounded-2xl px-3 py-2 text-lg font-medium hover:bg-accent"
                  onClick={toggleMenu}
                >
                  {item}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemFadeIn} className="pt-4">
              <Button className="w-full rounded-full">Solicitar Orçamento</Button>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}

      <main className="flex-1">
        {/* Hero Parallax Showroom */}
        <HeroParallax products={SHOWROOM_PRODUCTS} />

        {/* Ambientes / Services */}
        <section id="ambientes" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium"
                >
                  Especialidades
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  Ambientes que Criamos
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed"
                >
                  Cada projeto é desenvolvido sob medida para o seu espaço e estilo de vida
                </motion.p>
              </div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid max-w-5xl gap-4 py-12 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  icon: <UtensilsCrossed className="h-10 w-10 text-primary" />,
                  title: "Cozinhas Planejadas",
                  description: "Armários, gabinetes e bancadas personalizados para maximizar funcionalidade e beleza no ambiente mais importante da casa.",
                },
                {
                  icon: <BedDouble className="h-10 w-10 text-primary" />,
                  title: "Quartos e Closets",
                  description: "Guarda-roupas, cabeceiras e closets sob medida que aproveitam cada centímetro do seu espaço com elegância.",
                },
                {
                  icon: <Tv className="h-10 w-10 text-primary" />,
                  title: "Salas de Estar e TV",
                  description: "Estantes, painéis de TV e módulos decorativos que transformam sua sala em um ambiente sofisticado.",
                },
                {
                  icon: <Briefcase className="h-10 w-10 text-primary" />,
                  title: "Home Office",
                  description: "Escritórios planejados para aumentar sua produtividade com conforto e organização sem abrir mão do estilo.",
                },
                {
                  icon: <Bath className="h-10 w-10 text-primary" />,
                  title: "Banheiros",
                  description: "Gabinetes e nichos planejados que combinam praticidade e design para seu banheiro ou lavabo.",
                },
                {
                  icon: <Home className="h-10 w-10 text-primary" />,
                  title: "Ambientes Comerciais",
                  description: "Lojas, escritórios e consultórios com móveis exclusivos que reforçam a identidade da sua marca.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all hover:shadow-md bg-background/80"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300" />
                  <div className="relative space-y-3">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <Link href="#portfolio" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                      Ver projetos
                    </Link>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Portfolio */}
        <section id="portfolio">
          <GalleryGridBlock />
        </section>

        {/* Sobre / About */}
        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl"
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-5 p-6"
              >
                <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium">Nossa História</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre a Marcenaria Silva</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Fundada em 2014 na cidade de São Paulo, a Marcenaria Silva nasceu do sonho de criar móveis que combinassem funcionalidade, durabilidade e design. Com mais de 500 projetos entregues, hoje somos referência em móveis planejados na região.
                </p>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Utilizamos matérias-primas selecionadas, tecnologia de ponta e o talento de uma equipe apaixonada pelo que faz. Cada projeto é tratado como único — do briefing à instalação final.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { label: "Garantia do produto", value: "5 anos" },
                    { label: "Prazo de entrega", value: "45 dias" },
                    { label: "Visita técnica", value: "Gratuita" },
                    { label: "Projetos em 3D", value: "Inclusos" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-2xl border p-4 bg-muted/30">
                      <p className="text-xl font-bold text-primary">{item.value}</p>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center p-6"
              >
                <div className="relative h-[400px] w-full overflow-hidden rounded-3xl">
                  <Image
                    src={ABOUT_IMAGE}
                    alt="Equipe trabalhando em projeto de móveis"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-12 px-6 pb-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold tracking-tighter sm:text-3xl"
              >
                Nossa Equipe
              </motion.h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3"
              >
                {[
                  { name: "Carlos Silva", role: "Fundador & Marceneiro Chefe", img: TEAM_IMAGES[0] },
                  { name: "Ana Souza", role: "Designer de Interiores", img: TEAM_IMAGES[1] },
                  { name: "Ricardo Alves", role: "Gerente de Projetos", img: TEAM_IMAGES[2] },
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    variants={itemFadeIn}
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden rounded-3xl"
                  >
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="h-[280px] w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                      <h4 className="font-bold text-lg">{member.name}</h4>
                      <p className="text-sm opacity-90">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Contact */}
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 border border-muted rounded-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5 p-6"
            >
              <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium">Contato</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Vamos criar algo incrível juntos?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed">
                Entre em contato para agendar uma visita técnica gratuita. Nossos especialistas vão ao seu espaço, tiram medidas e apresentam o projeto em 3D sem custo.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <MapPin className="h-5 w-5 text-primary" />, title: "Showroom", desc: "Av. Paulista, 1000 — São Paulo, SP" },
                  { icon: <Phone className="h-5 w-5 text-primary" />, title: "WhatsApp", desc: "(11) 99999-0000" },
                  { icon: <Mail className="h-5 w-5 text-primary" />, title: "E-mail", desc: "contato@marcenariasilva.com.br" },
                ].map((item, i) => (
                  <motion.div key={i} whileHover={{ x: 5 }} className="flex items-start gap-3">
                    <div className="rounded-2xl bg-muted p-2">{item.icon}</div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex space-x-3 pt-2">
                {[
                  { icon: <Share2 className="h-5 w-5" />, label: "Instagram" },
                  { icon: <MessageCircle className="h-5 w-5" />, label: "Facebook" },
                ].map((social, index) => (
                  <motion.div key={index} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      href="#"
                      className="rounded-2xl border p-2 text-muted-foreground hover:text-foreground hover:border-primary transition-colors flex"
                    >
                      {social.icon}
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border bg-background p-6 shadow-sm m-6"
            >
              <h3 className="text-xl font-bold">Solicite um Orçamento</h3>
              <p className="text-sm text-muted-foreground mt-1">Responderemos em até 24 horas.</p>
              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Nome completo</label>
                    <Input id="name" placeholder="Seu nome" className="rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">WhatsApp</label>
                    <Input id="phone" placeholder="(00) 00000-0000" className="rounded-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="ambiente" className="text-sm font-medium">Ambiente desejado</label>
                  <Input id="ambiente" placeholder="Ex: Cozinha, Quarto, Closet..." className="rounded-full" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Conte-nos sobre o projeto</label>
                  <Textarea id="message" placeholder="Descreva o ambiente, tamanho aproximado, estilo..." className="min-h-[120px] rounded-2xl" />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full rounded-full">
                    Solicitar Orçamento Grátis
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container grid gap-6 px-4 py-10 md:px-6 lg:grid-cols-4 border-x border-muted"
        >
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-2xl bg-primary flex items-center justify-center">
                <Home className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Marcenaria Silva</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Móveis planejados sob medida com qualidade premium e atendimento personalizado desde 2014.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <Share2 className="h-5 w-5" />, label: "Instagram" },
                { icon: <MessageCircle className="h-5 w-5" />, label: "Facebook" },
              ].map((social, index) => (
                <motion.div key={index} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold">Ambientes</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              {["Cozinhas Planejadas", "Quartos e Closets", "Salas de Estar", "Home Office", "Banheiros"].map((item) => (
                <Link key={item} href="#ambientes" className="text-muted-foreground hover:text-foreground">{item}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-base font-semibold">Empresa</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              {["Sobre Nós", "Portfólio", "Depoimentos", "Nosso Processo", "Contato"].map((item) => (
                <Link key={item} href="#" className="text-muted-foreground hover:text-foreground">{item}</Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold">Receba novidades</h3>
            <p className="text-sm text-muted-foreground">
              Dicas de decoração e inspirações de projetos direto no seu e-mail.
            </p>
            <form className="flex gap-2">
              <Input type="email" placeholder="seu@email.com" className="flex-1 rounded-full" />
              <Button type="submit" className="rounded-full">Assinar</Button>
            </form>
          </div>
        </motion.div>

        <div className="border-t">
          <div className="container flex flex-col items-center justify-between gap-3 py-6 md:h-14 md:flex-row md:py-0">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Marcenaria Silva. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">Feito com carinho em São Paulo, SP</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
