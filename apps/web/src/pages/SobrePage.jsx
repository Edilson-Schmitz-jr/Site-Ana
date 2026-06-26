import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Heart, BookOpen } from 'lucide-react';
import Navigation from '@/components/Navigation.jsx';
import Footer from '@/components/Footer.jsx';
import ScheduleButton from '@/components/ScheduleButton.jsx';

const SobrePage = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'Formação Acadêmica',
      description: 'Graduação em Psicologia pela Universidade de São Paulo (USP)'
    },
    {
      icon: Award,
      title: 'Especialização',
      description: 'Pós-graduação em Terapia Cognitivo-Comportamental'
    },
    {
      icon: BookOpen,
      title: 'Formação Continuada',
      description: 'Cursos regulares de atualização e aperfeiçoamento profissional'
    },
    {
      icon: Heart,
      title: 'Experiência',
      description: 'Mais de 8 anos de experiência em atendimento clínico'
    }
  ];

  const specialties = [
    'Ansiedade e transtornos de ansiedade',
    'Depressão e transtornos de humor',
    'Relacionamentos e terapia de casais',
    'Autoestima e desenvolvimento pessoal',
    'Estresse e burnout',
    'Luto e perdas'
  ];

  return (
    <>
      <Helmet>
        <title>Sobre - Psicologia</title>
        <meta name="description" content="Conheça minha trajetória profissional, formação acadêmica e abordagem terapêutica. Psicóloga com mais de 8 anos de experiência." />
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
                Sobre mim
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dedicada a ajudar pessoas a encontrarem equilíbrio emocional e bem-estar
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1703763871387-65017a68c042"
                  alt="Retrato profissional da psicóloga"
                  className="w-full rounded-2xl shadow-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Minha trajetória</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Sou psicóloga clínica com mais de 8 anos de experiência no atendimento de adolescentes, adultos e casais. Minha jornada na psicologia começou com o desejo de compreender o comportamento humano e ajudar pessoas a superarem seus desafios emocionais.
                  </p>
                  <p>
                    Ao longo da minha carreira, tive a oportunidade de trabalhar com diferentes públicos e demandas, o que me permitiu desenvolver uma abordagem terapêutica humanizada e personalizada. Acredito que cada pessoa é única e merece um atendimento que respeite sua individualidade.
                  </p>
                  <p>
                    Meu compromisso é oferecer um espaço seguro, acolhedor e livre de julgamentos, onde você possa se expressar livremente e trabalhar em direção ao seu bem-estar emocional.
                  </p>
                </div>
                <div className="mt-8">
                  <ScheduleButton variant="default" size="lg" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-20 bg-muted">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Formação e credenciais</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Qualificação profissional e compromisso com a excelência
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-sm"
                >
                  <div className="bg-primary/10 rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                    <credential.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{credential.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{credential.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Abordagem terapêutica</h2>
                <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Trabalho com a abordagem Cognitivo-Comportamental (TCC), que se baseia na compreensão de como nossos pensamentos, emoções e comportamentos estão interligados. Através dessa abordagem, ajudo meus pacientes a identificarem padrões de pensamento disfuncionais e desenvolverem estratégias mais saudáveis para lidar com suas dificuldades.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Além da TCC, integro técnicas de outras abordagens quando necessário, sempre respeitando as necessidades individuais de cada paciente. Meu objetivo é proporcionar um tratamento eficaz e baseado em evidências científicas, sem perder de vista a importância do acolhimento e da empatia.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-12"
              >
                <h3 className="text-3xl font-bold mb-6 text-center">Áreas de especialidade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specialties.map((specialty, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-muted rounded-xl p-4"
                    >
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span className="text-muted-foreground">{specialty}</span>
                    </div>
                  ))}
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

export default SobrePage;