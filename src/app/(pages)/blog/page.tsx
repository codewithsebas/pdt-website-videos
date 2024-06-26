'use client'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CardBlog from '../../components/cards/CardBlog'
import Pagination from '../../components/Pagination'
import Slider from '@/app/components/Slider'
import Banner from "../../assets/blog/banner/1.png"


import New1 from "../../assets/blog/news/1.png"
import New2 from "../../assets/blog/news/2.png"
import New3 from "../../assets/blog/news/3.png"
import New4 from "../../assets/blog/news/4.png"
import New5 from "../../assets/blog/news/5.png"
import New6 from "../../assets/blog/news/6.png"
import New7 from "../../assets/blog/news/7.png"
import New8 from "../../assets/blog/news/8.png"
import New9 from "../../assets/blog/news/9.png"

import LogoDark from "../../assets/logos/1.png"

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const images = [
    { src: Banner, width: 3020, height: 3000, alt: 'Aiop' },
    { src: Banner, width: 3020, height: 3000, alt: 'DC' },
    { src: Banner, width: 3020, height: 3000, alt: 'Finan' },
    { src: Banner, width: 3020, height: 3000, alt: 'Inmave' },
    { src: Banner, width: 3020, height: 3000, alt: 'Union' },
    { src: Banner, width: 3020, height: 3000, alt: 'Aiop' }
  ];

  const blogCards = [
    {
      title: '5 campos que Inteligencia Artificial tendrá gran desarrollo en 2024',
      description: 'Tras el boom que significó en 2023 la llamada IA generativa, los expertos coinciden en que este es solo el principio de grandes cambios. Cinco son los grandes desarrollos que IA tendrá este año. La inteligencia artificial ha demostrado su capacidad para transformar industrias enteras, desde la atención médica hasta la producción industrial. En 2024, se espera que la IA continúe su evolución, abordando problemas cada vez más complejos y proporcionando soluciones innovadoras. Las aplicaciones de la IA generativa, en particular, se expandirán a nuevos campos, creando oportunidades para el crecimiento y la eficiencia. A medida que las empresas inviertan más en tecnología de IA, veremos un aumento en la automatización de tareas rutinarias, liberando recursos para trabajos más estratégicos. La educación también se beneficiará de estas tecnologías, con herramientas de aprendizaje personalizadas que pueden adaptarse a las necesidades individuales de los estudiantes. La inteligencia artificial en el sector financiero proporcionará análisis más precisos y predicciones más fiables, ayudando a las instituciones a gestionar riesgos y maximizar rendimientos. En el ámbito de la salud, la IA asistirá a los médicos en diagnósticos y tratamientos, mejorando los resultados para los pacientes. Además, las innovaciones en el transporte, como los vehículos autónomos, seguirán avanzando gracias a la IA. La sostenibilidad también será un área clave, con IA optimizando el uso de recursos y reduciendo el impacto ambiental. En resumen, 2024 será un año crucial para la inteligencia artificial, con desarrollos significativos que cambiarán la forma en que vivimos y trabajamos.',
      image: New1,
      url: '/news/1'
    },
    {
      title: 'Un nuevo botón cambiará los teclados de Microsoft: incluirá a la inteligencia artificial',
      description: 'Luego de tres décadas, Microsoft agregará un nuevo botón a sus teclados. Esto con el fin de integrar a la inteligencia artificial en sus equipos. Esta innovación representa un paso importante hacia la modernización de las herramientas de trabajo, facilitando el acceso a funciones avanzadas de IA. El nuevo botón permitirá a los usuarios interactuar de manera más intuitiva con asistentes virtuales y aplicaciones inteligentes. Además, se espera que esta adición mejore la productividad, al simplificar tareas complejas y automatizar procesos repetitivos. Con la creciente demanda de soluciones de IA, Microsoft busca mantenerse a la vanguardia de la tecnología. La compañía ha estado invirtiendo en investigación y desarrollo de IA durante años, y este nuevo botón es solo una de las muchas iniciativas que planean implementar. Los usuarios podrán aprovechar las capacidades avanzadas de IA para realizar búsquedas más rápidas, gestionar correos electrónicos de manera eficiente y obtener recomendaciones personalizadas. Este cambio también refleja la tendencia más amplia en la industria tecnológica hacia la integración de IA en dispositivos cotidianos. Al facilitar el acceso a estas herramientas, Microsoft está allanando el camino para un futuro en el que la inteligencia artificial se convierta en una parte integral de nuestras vidas diarias. En resumen, la introducción de este nuevo botón es un indicio de cómo la tecnología seguirá evolucionando para satisfacer las necesidades cambiantes de los usuarios.',
      image: New2,
      url: '/news/2'
    },
    {
      title: 'El desarrollo cloud y FinOps destacan entre las tendencias tecnológicas clave en 2024',
      description: 'Junto con la modernización de las aplicaciones en la cloud, gestionar los costes de la nube con FinOps o la tecnología sostenible, a lo largo de este año también se espera que la IA generativa avanzará, para brindar soluciones sofisticadas. Las empresas están reconociendo cada vez más los beneficios de trasladar sus operaciones a la nube, donde pueden aprovechar la escalabilidad y la flexibilidad. FinOps, una práctica emergente, se centra en optimizar los gastos en la nube, asegurando que las organizaciones obtengan el máximo valor por su inversión. Además, la tecnología sostenible está ganando terreno, con iniciativas para reducir el consumo de energía y minimizar el impacto ambiental de las operaciones tecnológicas. A medida que la adopción de la nube se expande, las herramientas de gestión de costos se vuelven cruciales para mantener la eficiencia financiera. La IA generativa también jugará un papel importante en este ecosistema, ofreciendo capacidades avanzadas de análisis de datos y automatización. Las empresas podrán desarrollar aplicaciones más robustas y personalizadas, mejorando la experiencia del usuario. La integración de estas tecnologías permitirá a las organizaciones responder de manera más ágil a los cambios del mercado y las demandas de los clientes. En resumen, las tendencias tecnológicas de 2024 estarán marcadas por una mayor adopción de la nube, prácticas de FinOps y el avance continuo de la IA generativa, transformando la forma en que operamos y gestionamos los recursos tecnológicos.',
      image: New3,
      url: '/news/3'
    },
    {
      title: 'Cómo enfrentar los desafíos que vienen con la irrupción de la tecnología en la educación',
      description: 'La revolución digital ha traído nuevas dinámicas de aprendizaje, las cuales plantean una serie de retos que debemos considerar en la educación. La integración de la tecnología en las aulas ha transformado la forma en que los estudiantes acceden y procesan la información. Sin embargo, también presenta desafíos significativos, como la necesidad de infraestructura adecuada y la capacitación de los docentes. A medida que las herramientas digitales se convierten en una parte integral del entorno educativo, es crucial abordar la brecha digital que aún existe en muchas regiones. Los estudiantes deben tener acceso equitativo a dispositivos y conectividad para aprovechar plenamente las oportunidades que ofrece la tecnología. Además, los educadores deben adaptarse a nuevos métodos de enseñanza que incorporen estas herramientas de manera efectiva. La personalización del aprendizaje es uno de los beneficios clave de la tecnología educativa, permitiendo a los estudiantes avanzar a su propio ritmo y según sus necesidades individuales. Sin embargo, esto requiere un cambio de mentalidad y la disposición para experimentar con nuevas estrategias pedagógicas. La evaluación también se está transformando, con herramientas digitales que permiten un seguimiento más preciso del progreso del estudiante. En resumen, aunque la irrupción de la tecnología en la educación presenta desafíos, también ofrece oportunidades significativas para mejorar la enseñanza y el aprendizaje. Es esencial que los sistemas educativos adapten y evolucionen para aprovechar al máximo estas innovaciones.',
      image: New4,
      url: '/news/4'
    },
    {
      title: 'CES 2024: cuándo y dónde es la feria de tecnología más importante del año',
      description: 'El Consumer Electronic Show (CES) es uno de los eventos tecnológicos más importantes del mundo. Vea aquí cuando, dónde es y qué puede encontrar. El CES 2024 promete ser una plataforma de lanzamiento para las innovaciones más recientes en el ámbito de la tecnología de consumo. Desde dispositivos de última generación hasta soluciones innovadoras para el hogar inteligente, el evento reúne a los principales actores de la industria. Los asistentes tendrán la oportunidad de ver demostraciones en vivo de productos que marcarán tendencia en los próximos años. Además, el CES es un punto de encuentro para profesionales de la tecnología, inversores y entusiastas, facilitando el networking y la colaboración. Las conferencias y paneles de discusión proporcionarán una visión profunda de las tendencias actuales y futuras del mercado tecnológico. Entre los temas destacados se incluirán la inteligencia artificial, el internet de las cosas, la realidad virtual y aumentada, y la tecnología sostenible. El CES también es conocido por sus anuncios sorpresa y lanzamientos exclusivos, por lo que se espera que las principales compañías tecnológicas presenten sus novedades más esperadas. En resumen, el CES 2024 será una cita ineludible para todos aquellos interesados en el futuro de la tecnología, ofreciendo una mirada privilegiada a las innovaciones que definirán el próximo año y más allá.',
      image: New5,
      url: '/news/5'
    },
    {
      title: 'Estos serán los trabajos con más demanda para el 2024',
      description: 'El 2024 se vislumbra como un año donde la tecnología y la inteligencia artificial continúan su ascenso en el ámbito laboral. Las empresas están buscando activamente profesionales con habilidades en áreas como la ciberseguridad, el análisis de datos y la inteligencia artificial. La demanda de desarrolladores de software sigue siendo alta, impulsada por la necesidad de crear y mantener aplicaciones innovadoras. Además, los expertos en ciberseguridad son cada vez más esenciales para proteger la información sensible de las organizaciones contra las crecientes amenazas digitales. Los analistas de datos también están en demanda, ya que las empresas buscan aprovechar grandes volúmenes de datos para tomar decisiones informadas. La inteligencia artificial y el aprendizaje automático están creando nuevas oportunidades en el mercado laboral, con roles como ingenieros de aprendizaje automático y científicos de datos siendo altamente valorados. Además, la tecnología de blockchain y las finanzas descentralizadas están generando nuevos puestos de trabajo en el sector financiero. En resumen, los trabajos con más demanda en 2024 estarán dominados por la tecnología y la inteligencia artificial, ofreciendo oportunidades emocionantes para aquellos con las habilidades adecuadas.',
      image: New6,
      url: '/news/6'
    },
    {
      title: 'Cinco habilidades de tecnología para mejorar su perfil profesional en 2024',
      description: 'Para el inicio del año, la compañía IBM reveló una lista de habilidades tecnologías que pueden ayudarle gratis a mejorar su perfil profesional. Las habilidades tecnológicas se están volviendo cada vez más cruciales en el mercado laboral actual, y mantenerse al día con las últimas tendencias puede proporcionar una ventaja competitiva. Entre las habilidades destacadas se encuentran el aprendizaje automático, la ciberseguridad, el análisis de datos, la computación en la nube y el desarrollo de software. El aprendizaje automático permite a los profesionales desarrollar modelos predictivos y automatizar procesos complejos, mientras que la ciberseguridad es esencial para proteger los datos y sistemas de las organizaciones. El análisis de datos ayuda a las empresas a tomar decisiones informadas basadas en grandes volúmenes de información, y la computación en la nube ofrece flexibilidad y escalabilidad para diversas aplicaciones. El desarrollo de software sigue siendo una habilidad fundamental, ya que la demanda de aplicaciones innovadoras continúa creciendo. IBM ofrece recursos y cursos gratuitos para ayudar a los profesionales a adquirir estas habilidades, facilitando el acceso a las herramientas y conocimientos necesarios. En resumen, mejorar su perfil profesional en 2024 implica adquirir habilidades tecnológicas clave que están en alta demanda, lo que puede abrir nuevas oportunidades en el mercado laboral.',
      image: New7,
      url: '/news/7'
    },
    {
      title: 'Tecnología ayuda a las mipymes a ser rentables en menos tiempo',
      description: 'Inteligencia Artificial, herramientas de atención al cliente y softwares de gestión de empresas son las tecnologías que más usan las micro. Las pequeñas y medianas empresas (mipymes) están adoptando rápidamente tecnologías avanzadas para mejorar su eficiencia y rentabilidad. La inteligencia artificial permite automatizar tareas rutinarias, liberando tiempo para que los empleados se centren en actividades estratégicas. Las herramientas de atención al cliente, como chatbots y sistemas de gestión de relaciones con clientes (CRM), ayudan a mejorar la satisfacción del cliente y a aumentar las ventas. Los softwares de gestión empresarial permiten a las mipymes optimizar sus procesos internos, desde la contabilidad hasta la gestión de inventarios. Estas tecnologías no solo aumentan la productividad, sino que también proporcionan una ventaja competitiva al permitir a las mipymes responder rápidamente a las necesidades del mercado. Además, la adopción de soluciones tecnológicas puede reducir los costos operativos y mejorar la toma de decisiones al proporcionar datos en tiempo real. En resumen, la tecnología está desempeñando un papel crucial en ayudar a las mipymes a ser más rentables en menos tiempo, ofreciendo herramientas que mejoran la eficiencia y la competitividad.',
      image: New8,
      url: '/news/8'
    },
    {
      title: 'Samsung hizo anuncio que pondrá a celebrar a muchos: compañía prepara algo muy grande',
      description: 'La gigante de la tecnología anunció que el próximo 17 de enero llevará a cabo su Galaxy Unpacked, lugar en el que mostrará sus grandes lanzamientos del año. Este evento es uno de los más esperados en el calendario tecnológico, y Samsung ha prometido revelar productos que establecerán nuevos estándares en la industria. Entre las novedades se esperan nuevos modelos de teléfonos inteligentes, tablets y dispositivos portátiles, todos ellos equipados con las últimas innovaciones tecnológicas. Samsung ha sido un líder en el mercado de la tecnología durante décadas, y sus eventos de lanzamiento son conocidos por generar una gran expectación. Los asistentes al Galaxy Unpacked tendrán la oportunidad de ver de cerca los nuevos productos y conocer las características avanzadas que ofrecen. Además, Samsung suele utilizar estos eventos para presentar avances en áreas como la inteligencia artificial, la conectividad 5G y la tecnología de pantallas. En resumen, el Galaxy Unpacked del 17 de enero será un evento clave para los entusiastas de la tecnología, ofreciendo una mirada anticipada a los productos que definirán el próximo año.',
      image: New9,
      url: '/news/9'
    }
  ];


  return (
    <div>
      <Header textColor="text-black" logo={LogoDark} textColorMenu='#000' />
      <section className='w-full h-full pt-40 pb-20 flex flex-col items-center justify-center'>
        <div className='w-full max-w-[1440px] flex flex-col gap-10 px-5 md:px-10'>

          <div className='w-full min-h-[26rem] max-h-[26rem] relative'>

            {/* <Image src="https://res.cloudinary.com/ddeo6txjh/image/upload/v1716242290/banner_ykk8pp.png" width={3000} height={3000} loading='lazy' alt='Banner' /> */}
            <Slider numberImage={1} images={images} />
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl font-extrabold'>PDT BLOG</h2>
            <p className='font-extralight'>Sumérgete en el fascinante mundo de la tecnología con nosotros. En nuestro blog, reunimos las noticias en tendencias más innovadoras de los principales portales, para que estés siempre un paso adelante en el universo tecnológico. Desde los últimos avances en inteligencia artificial hasta los dispositivos más punteros del mercado, aquí encontrarás la información que necesitas para mantenerte actualizado. Únete a nuestra comunidad y déjate inspirar por el futuro que nos espera. ¡Explora, aprende y descubre el mañana hoy en PDT!</p>
          </div>


          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
            {blogCards.map((card, index) => (
              <CardBlog
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                url={card.url}
              />
            ))}
          </div>

          {/* <Pagination currentPage={currentPage} totalPages={6} onPageChange={handlePageChange} /> */}
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default Blog