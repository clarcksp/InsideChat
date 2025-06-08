import React, { useState } from 'react'

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const whatsappLink = "https://wa.me/551129376455?text=Gostaria%20de%20conhecer%20o%20InsideChat"

  const features = [
    {
      title: "Multiatendimento",
      description: "Gerencie múltiplas conversas simultaneamente com eficiência total."
    },
    {
      title: "Dashboard em Tempo Real",
      description: "Monitore todas as conversas e métricas importantes em tempo real."
    },
    {
      title: "Chatbot Inteligente",
      description: "Automatize respostas e melhore a experiência do cliente."
    },
    {
      title: "Relatórios Detalhados",
      description: "Analise performance e tome decisões baseadas em dados."
    },
    {
      title: "Multi Departamentos",
      description: "Organize sua equipe em departamentos especializados."
    },
    {
      title: "Integração WhatsApp",
      description: "Conecte-se diretamente com o WhatsApp Business API."
    }
  ]

  const plans = [
    {
      name: "Basic",
      price: "R$ 165,00",
      description: "Para pequenas empresas",
      features: [
        "1 número de WhatsApp",
        "Até 5 atendentes",
        "Chat em tempo real",
        "Relatórios básicos",
        "Suporte por email"
      ]
    },
    {
      name: "Turbo",
      price: "R$ 325,00",
      description: "Mais popular",
      features: [
        "2 números de WhatsApp",
        "Até 10 atendentes",
        "Chat em tempo real",
        "Relatórios avançados",
        "API de integração",
        "Chatbot básico"
      ],
      featured: true
    },
    {
      name: "Pro",
      price: "R$ 725,00",
      description: "Para grandes equipes",
      features: [
        "4 números de WhatsApp",
        "Até 20 atendentes",
        "Chat em tempo real",
        "Relatórios completos",
        "API de integração",
        "Chatbot avançado",
        "Suporte prioritário"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-600">InsideChat</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">
                Recursos
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-orange-600 transition-colors">
                Preços
              </a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                Contato
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
              >
                <WhatsAppIcon />
                <span className="ml-2">Começar Agora</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-orange-600">
                  Recursos
                </a>
                <a href="#pricing" className="text-gray-600 hover:text-orange-600">
                  Preços
                </a>
                <a href="#contact" className="text-gray-600 hover:text-orange-600">
                  Contato
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <WhatsAppIcon />
                  <span className="ml-2">Começar Agora</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Gerencie todos seus atendimentos{' '}
              <span className="text-orange-600">via WhatsApp</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Centralize suas conversas, aumente a produtividade e melhore a satisfação dos seus clientes com nossa plataforma completa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-medium text-lg rounded-lg hover:bg-orange-700 transition-colors"
              >
                <WhatsAppIcon />
                <span className="ml-2">Começar Gratuitamente</span>
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-600 text-orange-600 font-medium text-lg rounded-lg hover:bg-orange-50 transition-colors"
              >
                Ver Recursos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Recursos Principais</h2>
            <p className="mt-4 text-xl text-gray-600">
              Descubra como o InsideChat pode transformar seu atendimento
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Planos e Preços</h2>
            <p className="mt-4 text-xl text-gray-600">Escolha o plano ideal para seu negócio</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-sm p-8 ${
                  plan.featured ? 'ring-2 ring-orange-600 scale-105' : ''
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mt-2">{plan.description}</p>
                <div className="mt-4 mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckIcon />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-colors ${
                    plan.featured
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'border-2 border-orange-600 text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  Começar Agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">Entre em Contato</h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">E-mail:</span>{' '}
                  <a href="mailto:atendimento@insidechat.com.br" className="hover:text-orange-400 transition-colors">
                    atendimento@insidechat.com.br
                  </a>
                </p>
                <p>
                  <span className="font-medium">Telefone:</span>{' '}
                  <a href="tel:1129376455" className="hover:text-orange-400 transition-colors">
                    (11) 2937-6455
                  </a>
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-400">&copy; 2023 InsideChat. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={() => setIsModalOpen(false)}
            />
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl">
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-semibold text-gray-900">
                  Os principais recursos do InsideChat
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-orange-600 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App