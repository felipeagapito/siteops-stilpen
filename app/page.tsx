'use client'

import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Droplets,
  Flame,
  Menu,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  X,
} from 'lucide-react'
import { useState } from 'react'

const whatsappUrl =
  'https://wa.me/5547997701642?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20um%20projeto'

const pageData = {
  google_reviews_section: {
    reviews_metadata: { rating_average: '5,0', total_reviews: 161 },
    reviews: [
      {
        author_name: 'Cliente',
        text: 'Ótimo profissional, serviço bem feito e com preço justo.',
      },
      {
        author_name: 'Cliente',
        text: 'Conheci o Anderson pelo google, pessoa muito honesta e gente boa.',
      },
      {
        author_name: 'Cliente',
        text: 'Super Recomendo, fez uma obra aqui ficou show de bola!!!',
      },
    ],
  },
  testimonials_section: [
    {
      author: 'Eng. Cláudia M.',
      role: 'Três rios/RJ',
      text: 'Contratamos a empresa do Anderson para a instalação completa do sistema de incêndio em nosso prédio comercial. Trabalho limpo, dentro do prazo e com muita responsabilidade técnica. Recomendo!',
      image_path: '/fotos/obra1.jpg',
    },
    {
      author: 'Rodrigo Tavares',
      role: 'Síndico residencial',
      text: 'Serviço excelente! Toda a parte hidráulica do nosso condomínio foi feita por eles e nunca tivemos problemas. Profissionalismo e experiência contam muito.',
      image_path: '/fotos/condominio.jpg',
    },
    {
      author: 'Debora Almeida',
      role: 'Arquiteta em Joinville/SC',
      text: 'Contratamos a equipe do Anderson para executar toda a instalação hidráulica do nosso prédio, com base no projeto fornecido pelo nosso engenheiro. Eles foram extremamente profissionais, seguiram todas as especificações técnicas e entregaram tudo dentro do prazo. Excelente parceria!',
      image_path: '/fotos/debora.jpg',
    },
  ],
}

function Logo() {
  return (
    <a
      href="#inicio"
      className="flex items-center gap-3"
      aria-label="Stilpen Hidráulica e Combate a Incêndio"
    >
      <span className="flex size-10 items-center justify-center rounded-sm bg-primary text-primary-foreground">
        <span className="font-mono text-sm font-bold tracking-tighter">SH</span>
      </span>
      <span className="font-mono text-[11px] font-bold uppercase leading-tight tracking-[0.16em] text-foreground">
        Stilpen
        <br />
        <span className="text-muted-foreground">Engenharia</span>
      </span>
    </a>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
      <span className="h-px w-7 bg-accent" />
      {children}
    </p>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main
      id="inicio"
      className="min-h-screen overflow-hidden bg-background text-foreground"
    >
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Logo />

          <nav
            className="hidden items-center gap-9 md:flex"
            aria-label="Navegação principal"
          >
            <a
              href="#servicos"
              className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Serviços
            </a>
            <a
              href="#parceiros"
              className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Experiência
            </a>
            <a
              href="#contato"
              className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Contato
            </a>
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 border border-accent/50 px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground md:flex"
          >
            Fale com um especialista
            <ArrowUpRight size={14} />
          </a>

          <button
            className="text-foreground md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-white/10 bg-background px-6 py-6 md:hidden">
            <a
              href="#servicos"
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
            >
              Serviços
            </a>
            <a
              href="#parceiros"
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
            >
              Experiência
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-accent"
            >
              Falar no WhatsApp
            </a>
          </nav>
        )}
      </header>

      <section className="relative isolate flex min-h-[720px] items-end pb-20 pt-36 lg:min-h-[820px] lg:pb-28">
        <div className="absolute inset-0 -z-20 bg-[url('/images/hero-industrial.png')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,18,35,.98)_5%,rgba(4,18,35,.82)_45%,rgba(4,18,35,.18)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(4,18,35,.9),transparent_58%)]" />

        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1.25fr_.75fr] lg:px-10">
          <div className="max-w-3xl">
            <SectionLabel>Engenharia que protege o futuro</SectionLabel>

            <h1 className="max-w-3xl text-balance font-sans text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
              Soluções Hidráulicas e de Combate a Incêndio para Grandes Obras
            </h1>

            <p className="mt-8 max-w-xl text-pretty text-base leading-7 text-white/70 lg:text-lg">
              Projetamos, executamos e entregamos sistemas essenciais com
              precisão técnica, segurança e o compromisso que obras de alta
              complexidade exigem.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-4 bg-accent px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-accent-foreground transition-transform hover:-translate-y-1"
              >
                Solicitar orçamento
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center gap-2 px-3 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-white/75 hover:text-white"
              >
                Conheça nossas soluções
                <ChevronRight size={16} />
              </a>
            </div>
          </div>

          <div className="hidden items-end justify-end lg:flex">
            <div className="border-l border-white/25 pl-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                Atuação desde
              </p>
              <p className="mt-2 font-sans text-5xl font-semibold tracking-tight text-white">
                2008
              </p>
              <p className="mt-2 max-w-[160px] text-sm leading-5 text-white/60">
                Experiência que se traduz em tranquilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="parceiros"
        className="border-y border-slate-700 bg-slate-800"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-100">
            Parceiros de confiança
          </p>

          <div className="grid grid-cols-3 items-center gap-6 sm:gap-10">
            <div className="flex h-16 w-28 items-center justify-center sm:w-40">
              <img
                src="/whirlpool.png"
                alt="Whirlpool"
                className="h-12 w-full object-contain"
              />
            </div>
            <div className="flex h-16 w-28 items-center justify-center sm:w-40">
              <img
                src="/garten.png"
                alt="Garten Shopping"
                className="h-12 w-full object-contain"
              />
            </div>
            <div className="flex h-16 w-28 items-center justify-center sm:w-40">
              <img
                src="/mueller.png"
                alt="Mueller"
                className="h-12 w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <div>
            <SectionLabel>O que fazemos</SectionLabel>

            <h2 className="max-w-md text-balance font-sans text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Infraestrutura invisível. Impacto essencial.
            </h2>

            <p className="mt-7 max-w-sm text-pretty leading-7 text-muted-foreground">
              Cada detalhe importa quando a segurança e a continuidade da sua
              operação estão em jogo.
            </p>

            <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <ShieldCheck size={18} className="text-accent" />
              Engenharia com responsabilidade
            </div>
          </div>

          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            <article className="bg-background p-8 transition-colors hover:bg-card sm:p-10">
              <div className="mb-20 flex items-start justify-between">
                <Droplets
                  className="text-accent"
                  size={30}
                  strokeWidth={1.5}
                />
                <span className="font-mono text-xs text-muted-foreground">
                  01
                </span>
              </div>

              <h3 className="font-sans text-2xl font-semibold tracking-tight">
                Hidráulica Predial
              </h3>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Sistemas hidráulicos completos, dimensionados para performance,
                durabilidade e eficiência operacional.
              </p>

              <ul className="mt-7 space-y-3 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <Check size={16} className="shrink-0 text-accent" />
                  Água fria e quente
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="shrink-0 text-accent" />
                  Drenagem e esgoto
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="shrink-0 text-accent" />
                  Redes de utilidades
                </li>
              </ul>
            </article>

            <article className="bg-background p-8 transition-colors hover:bg-card sm:p-10">
              <div className="mb-20 flex items-start justify-between">
                <Flame
                  className="text-accent"
                  size={30}
                  strokeWidth={1.5}
                />
                <span className="font-mono text-xs text-muted-foreground">
                  02
                </span>
              </div>

              <h3 className="font-sans text-2xl font-semibold tracking-tight">
                Prevenção de Incêndio
              </h3>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Proteção projetada para antecipar riscos e responder com
                precisão quando cada segundo importa.
              </p>

              <ul className="mt-7 space-y-3 text-sm text-foreground/80">
                <li className="flex gap-2">
                  <Check size={16} className="shrink-0 text-accent" />
                  Sprinklers e hidrantes
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="shrink-0 text-accent" />
                  Alarme e detecção
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="shrink-0 text-accent" />
                  Aprovação de projetos
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12 max-w-xl">
            <SectionLabel>Quem confia</SectionLabel>
            <h2 className="max-w-sm text-balance font-sans text-4xl font-semibold leading-tight tracking-[-0.04em]">
              Excelência que se comprova em campo.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pageData.testimonials_section.map((testimonial) => (
              <figure
                key={testimonial.author}
                className="flex h-full flex-col overflow-hidden rounded-md border border-slate-700 bg-slate-800 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={testimonial.image_path}
                  alt=""
                  className="h-48 w-full rounded-t-md grayscale contrast-125 object-cover"
                />

                <div className="flex flex-grow flex-col p-7 sm:p-8">
                  <Sparkles className="mb-6 text-accent" size={20} />

                  <blockquote className="flex-grow text-pretty font-sans text-base font-medium leading-7 text-white">
                    “{testimonial.text}”
                  </blockquote>

                  <figcaption className="mt-auto flex items-center gap-3 border-t border-slate-700 pt-4 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-slate-300">
                    <span>
                      {testimonial.author}
                      <span className="mx-2 text-accent">/</span>
                      {testimonial.role}
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-8 border-b border-border pb-10 md:flex-row md:items-end">
            <div>
              <SectionLabel>O que dizem no Google</SectionLabel>

              <div className="flex flex-wrap items-center gap-5">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X7AZhuwCBGWw4F3Y6cQ3rtlOZqmgJc.png"
                  alt="Google"
                  className="size-14 rounded-full object-cover shadow-sm"
                />

                <div>
                  <p className="font-sans text-2xl font-semibold tracking-tight">
                    Classificação{' '}
                    {
                      pageData.google_reviews_section.reviews_metadata
                        .rating_average
                    }
                  </p>
                  <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {
                      pageData.google_reviews_section.reviews_metadata
                        .total_reviews
                    }{' '}
                    avaliações verificadas
                  </p>
                </div>
              </div>
            </div>

            <div
              className="flex gap-1"
              aria-label="5 estrelas de avaliação"
            >
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pageData.google_reviews_section.reviews.map((review, index) => (
              <article
                key={`${review.author_name}-${index}`}
                className="flex min-h-[250px] flex-col rounded-sm border border-slate-700 bg-slate-800 p-7 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                      [
                        'bg-[#4285F4]',
                        'bg-[#EA4335]',
                        'bg-[#FBBC05]',
                        'bg-[#34A853]',
                      ][index % 4]
                    }`}
                    aria-label="Avatar de usuário"
                  >
                    <UserRound
                      className="size-6 text-white"
                      strokeWidth={2.2}
                    />
                  </div>

                  <div>
                    <p className="font-sans text-sm font-semibold">
                      {review.author_name}
                    </p>
                    <div className="mt-1 flex gap-0.5" aria-label="5 estrelas">
                      <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
                      <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
                      <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
                      <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
                      <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>

                  <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                    Google
                  </span>
                </div>

                <p className="mt-8 text-pretty text-sm leading-7 text-muted-foreground">
                  {review.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="relative overflow-hidden bg-primary px-6 py-24 text-primary-foreground lg:px-10 lg:py-32"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>Vamos construir juntos</SectionLabel>
            <h2 className="max-w-3xl text-balance font-sans text-5xl font-semibold leading-[1.05] tracking-[-0.05em] text-primary-foreground sm:text-6xl">
              Seu próximo projeto começa com uma conversa.
            </h2>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-4 bg-accent px-7 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-accent-foreground transition-transform hover:-translate-y-1"
          >
            Falar pelo WhatsApp
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </section>

      <footer className="bg-primary px-6 pb-8 text-primary-foreground lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 border-t border-primary-foreground/15 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/50">
              Engenharia hidráulica e proteção contra incêndio para obras que
              movem o Brasil.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-left sm:text-right">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-accent"
            >
              +55 47 99770-1642
            </a>
            <a
              href="mailto:Stilpen.hidraulica.sc@gmail.com"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground"
            >
              Stilpen.hidraulica.sc@gmail.com
            </a>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-primary-foreground/35">
              © 2026 Stilpen Engenharia
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
