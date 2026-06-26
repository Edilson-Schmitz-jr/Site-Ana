import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sprout, Hand as Hands, Network } from 'lucide-react';
import Navigation from '@/components/Navigation.jsx';
import Footer from '@/components/Footer.jsx';
import ScheduleButton from '@/components/ScheduleButton.jsx';

const HomePage = () => {
  const features = [
    {
      icon: Sprout,
      title: 'Infância e Adolescência',
      description: 'Compreensão atenta do mundo emocional na juventude. Auxílio nas demandas escolares, emocionais e de socialização, promovendo o desenvolvimento saudável e a orientação parental estruturada.'
    },
    {
      icon: Hands,
      title: 'Adultos e Idosos',
      description: 'Suporte para momentos de estresse, crises existenciais e aposentadoria. Ofereço um espaço seguro para o acompanhamento do luto, auxiliando na travessia de perdas e na reconstrução de projetos.'
    },
    {
      icon: Network,
      title: 'Saúde e Relacionamentos',
      description: 'Um olhar atento a contextos identitários e à saúde mental. Acolhimento de conflitos familiares, transições de carreira e práticas que integram o bem-estar físico e emocional integral.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Psicologia - Acompanhamento Psicológico Profissional</title>
        <meta name="description" content="Acompanhamento psicológico com abordagem humanizada. Atendimento individual, casais e grupos. Agende sua sessão." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Minimalist Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-background">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1 max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground" style={{ letterSpacing: '-0.02em' }}>
                  Acolhimento profundo da sua história.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-prose mx-auto lg:mx-0">
                  Psicoterapia e Acompanhamento do Luto fundamentados na perspectiva Histórico-Cultural. Um espaço ético para o desenvolvimento humano em todas as fases da vida.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <ScheduleButton variant="default" size="lg" />
                  <a
                    href="/sobre"
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 transition-all duration-200 active:scale-[0.98]"
                  >
                    Conheça mais
                  </a>
                </div>
              </motion.div>

              {/* Image Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="order-1 lg:order-2 flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-[360px] md:max-w-[420px] lg:max-w-[480px]">
                  {/* Subtle decorative accent behind the image */}
                  <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -z-10 transform rotate-3"></div>
                  
                  <img
                    src="https://horizons-cdn.hostinger.com/ec837054-8f97-480f-978b-cfeecb1485f1/psicologa-ana-beatriz-tratamento-do-luto-joinville-yWQ2J.jpg"
                    alt="Retrato da psicóloga Ana Beatriz em ambiente profissional"
                    className="w-full h-auto aspect-[4/5] object-cover rounded-3xl shadow-2xl shadow-slate-900/10"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-muted/40">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Por que escolher nosso atendimento?</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                "Atuo na psicologia buscando compreender o sujeito a partir do contexto em que está inserido. Ofereço um espaço seguro para o seu desenvolvimento e para o acompanhamento do luto de forma digna e sensível."
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="bg-primary/10 rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary rounded-3xl p-10 md:p-16 text-center text-primary-foreground shadow-lg"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Como acontecem os encontros?</h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
                Se você busca suporte para o seu autoconhecimento ou um acompanhamento do luto conduzido com respeito, a psicoterapia é o lugar ideal. Priorizo uma relação terapêutica baseada no diálogo, transparência e sigilo absoluto.
              </p>
              <ScheduleButton
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-sm"
              />
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;