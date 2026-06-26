import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { User, Users, KeyRound as UsersRound, Video, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import ScheduleButton from '@/components/ScheduleButton.jsx';

const ServicosPage = () => {
  const services = [
    {
      icon: User,
      title: 'Terapia Individual',
      description: 'Atendimento personalizado para trabalhar questões emocionais, comportamentais e de desenvolvimento pessoal.',
      features: [
        'Sessões de 50 minutos',
        'Frequência semanal ou quinzenal',
        'Abordagem Cognitivo-Comportamental',
        'Plano terapêutico individualizado'
      ]
    },
    {
      icon: Users,
      title: 'Terapia de Casais',
      description: 'Espaço para casais trabalharem conflitos, melhorarem a comunicação e fortalecerem o relacionamento.',
      features: [
        'Sessões de 60 minutos',
        'Trabalho com comunicação e conflitos',
        'Fortalecimento do vínculo',
        'Técnicas baseadas em evidências'
      ]
    },
    {
      icon: UsersRound,
      title: 'Terapia em Grupo',
      description: 'Grupos terapêuticos para compartilhar experiências e desenvolver habilidades socioemocionais.',
      features: [
        'Grupos de até 8 participantes',
        'Temas específicos (ansiedade, autoestima)',
        'Encontros semanais',
        'Ambiente acolhedor e seguro'
      ]
    }
  ];

  const modalities = [
    {
      icon: MapPin,
      title: 'Atendimento Presencial',
      description: 'Consultório localizado em São Paulo, com ambiente acolhedor e privativo.',
      details: 'Rua Exemplo, 123 - Jardins, São Paulo - SP'
    },
    {
      icon: Video,
      title: 'Atendimento Online',
      description: 'Sessões por videochamada com a mesma qualidade do atendimento presencial.',
      details: 'Plataforma segura e confidencial'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serviços - Psicologia</title>
        <meta name="description" content="Conheça nossos serviços de psicoterapia: atendimento individual, terapia de casais, grupos terapêuticos. Modalidades presencial e online." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-muted">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                Serviços
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Atendimento psicológico personalizado para suas necessidades
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Tipos de atendimento</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Escolha o formato que melhor atende suas necessidades
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary rounded-3xl p-12 text-center text-primary-foreground"
            >
              <h3 className="text-3xl font-bold mb-4">Primeira sessão</h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Na primeira sessão, faremos uma avaliação inicial para compreender suas necessidades e definir os objetivos terapêuticos. É um momento para você conhecer meu trabalho e tirar suas dúvidas.
              </p>
              <ScheduleButton
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              />
            </motion.div>
          </div>
        </section>

        {/* Modalities Section */}
        <section className="py-20 bg-muted">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Modalidades de atendimento</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Flexibilidade para atender você da melhor forma
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {modalities.map((modality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-sm"
                >
                  <div className="bg-primary/10 rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                    <modality.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{modality.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{modality.description}</p>
                  <p className="text-sm text-muted-foreground">{modality.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 md:p-12 shadow-sm text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Investimento</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Os valores das sessões variam de acordo com o tipo de atendimento e modalidade escolhida. Entre em contato para conhecer os valores atualizados e opções de pagamento.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ScheduleButton variant="default" size="lg" />
                  <a
                    href="/contato"
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-200 active:scale-[0.98]"
                  >
                    Solicitar informações
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicosPage;