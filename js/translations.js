const translations = {
  es: {
    nav: {
      inicio: "Inicio",
      trayectoria: "Trayectoria",
      servicios: "Servicios",
      clientes: "Clientes",
      empresa: "Empresa",
      casos: "Casos de Éxito",
      blog: "Blog",
      multimedia: "Multimedia",
      contacto: "Contacto"
    },
    servicios: {
      tag: "Servicios",
      title: "Soluciones en ",
      titleHighlight: "logística global",
      subtitle: "Ofrecemos servicios integrales de logística internacional, comercio exterior y consultoría estratégica para empresas que quieren expandir sus horizontes.",
      items: [
        { title: "Transporte Multimodal", desc: "Gestión integrada de transporte marítimo, aéreo y terrestre. Optimizamos rutas, costos y tiempos para garantizar que tu carga llegue a destino de forma eficiente y segura." },
        { title: "Despacho Aduanero", desc: "Tramitación integral de despachos de importación y exportación. Gestionamos toda la documentación necesaria ante las autoridades aduaneras de cada país." },
        { title: "Consultoría en Supply Chain", desc: "Análisis y optimización de cadenas de suministro. Identificamos cuellos de botella, reducimos costos operativos y mejoramos la eficiencia logística de tu empresa." },
        { title: "Búsqueda de Proveedores", desc: "Identificación y selección de proveedores internacionales. Evaluamos calidad, confiabilidad y costos para conectar tu negocio con los mejores partners globales." },
        { title: "Trading con China", desc: "Servicio integral de comercio con China. Coordinación aduanera origen-destino, gestión de calidades y logística puerta a puerta para pymes latinoamericanas." },
        { title: "Logística de Almacenamiento", desc: "Soluciones de almacenamiento y distribución en ubicaciones estratégicas (Argentina, USA, Brasil). Inventarios, picking y despacho integrados con seguimiento en tiempo real." },
        { title: "Operativa Bancaria", desc: "Gestión de cartas de crédito, transferencias internacionales y confirmaciones bancarias. Optimizamos los procesos financieros integrados al comercio exterior." },
        { title: "Asesoría Legal", desc: "Protección integral de intereses en comercio exterior y regulaciones aduaneras. Abogados especializados en contratos internacionales y cumplimiento normativo." },
        { title: "Mudanzas Internacionales", desc: "Mudanzas corporativas y familiares con alcance global. Gestión aduanera completa, documentación integral y seguimiento personalizado en cada etapa." },
        { title: "División de Perecederos", desc: "Especialistas en cargas perecederas multi-temperatura. Infraestructura de frío, cumplimiento FDA/SENASA/INVIMA y coordinación para flores, frutas, carnes y mariscos." }
      ]
    },
    clientes: {
      tag: "Clientes",
      title: "Confían en ",
      titleHighlight: "nosotros",
      subtitle: "Empresas de diversos sectores confían en CargoNet Group para sus operaciones de comercio internacional. Nuestra experiencia es su mejor garantía.",
      items: [
        { text: "Empresas de logística y distribución en Argentina, Brasil y USA que tercerizan sus operaciones internacionales." },
        { text: "Pymes exportadoras de Latinoamérica que buscan expandir su alcance a mercados de Europa, Asia y Norteamérica." },
        { text: "Corporaciones multinacionales que requieren soluciones integradas de supply chain con presencia regional." },
        { text: "Empresas del sector agroindustrial que necesitan transporte especializado y gestión aduanera eficiente." },
        { text: "Startups y scaleups tecnológicas con operaciones de comercio exterior que requieren agilidad y confiabilidad." },
        { text: "Asociaciones y cámaras de comercio que confían en nuestra experiencia para asesorar a sus miembros." }
      ]
    },
    casos: {
      tag: "Casos de Éxito",
      title: "Historias de ",
      titleHighlight: "éxito",
      subtitle: "Conocé algunos casos donde nuestra experiencia en logística internacional marcó la diferencia para nuestros clientes.",
      items: [
        { title: "Expansión a EE.UU. para un fabricante argentino", desc: "Acompañamos a una pyme metalúrgica argentina en su proceso de exportación a Estados Unidos. Gestionamos todo el despacho aduanero, logística multimodal y certificaciones requeridas. Hoy exportan 3 contenedores mensuales." },
        { title: "Optimización de supply chain para retail brasileño", desc: "Rediseñamos la cadena de suministro de una cadena de retail brasileña con operaciones en Argentina. Redujimos un 30% los tiempos de tránsito y un 22% los costos logísticos totales." },
        { title: "Corredor logístico Argentina-China", desc: "Implementamos un servicio puerta a puerta para una cooperativa agrícola que buscaba exportar a China. Coordinamos controles de calidad, documentación fitosanitaria y logística oceánica con seguimiento en tiempo real." },
        { title: "Consultoría estratégica para expansión regional", desc: "Asesoramos a una empresa de tecnología uruguaya en su plan de expansión a Brasil y México. Diseñamos su red logística, identificamos socios estratégicos y optimizamos sus procesos aduaneros." },
        { title: "Logística de perecederos para exportador de flores", desc: "Implementamos una cadena de frío integral para un exportador de flores ecuatoriano hacia Estados Unidos y Europa. Coordinamos transporte refrigerado, certificaciones fitosanitarias y despacho aduanero. Redujimos pérdidas por temperatura en un 95%." },
        { title: "Operativa bancaria para importador de maquinaria", desc: "Gestionamos cartas de crédito y financiamiento internacional para un importador argentino de maquinaria pesada alemana. Coordinamos con bancos en ambos países, optimizando plazos y reduciendo costos financieros en un 18%." }
      ]
    },
    hero: {
      badge: "CEO & Fundador de CargoNet Group",
      title: "Germán",
      titleHighlight: "Muchico",
      subtitle: "Logística Internacional · Comercio Exterior · Supply Chain",
      desc: "Más de 35 años transformando el comercio internacional con visión estratégica, presencia global y un compromiso inquebrantable con la excelencia.",
      btnPrimary: "Mi Trayectoria",
      btnOutline: "Contactarme"
    },
    homeAbout: {
      tag: "Acerca de Mí",
      title: "Una trayectoria de ",
      titleHighlight: "35+ años",
      titleEnd: " en el comercio global",
      subtitle: "Desde mis inicios en 1990 hasta liderar CargoNet Group, cada paso ha sido una apuesta por la excelencia y la innovación en logística internacional.",
      p1: 'Ingresé formalmente al mundo del comercio exterior el 1 de febrero de 1990. En enero de 1999 fundé mi propia empresa, <strong>Connexion Transportes Internacionales S.A.</strong>, en Argentina. El 20 de marzo de 2002 activé <strong>CargoNet</strong>, expandiendo a Estados Unidos en 2005 y a Brasil en 2009.',
      p2: 'Viví en Miami por 5 años desarrollando la oficina local, y luego en Palma de Mallorca por 3 años fortaleciendo la presencia europea. Hoy dirijo CargoNet Group y soy Director de Logística en el Comité Argentina de la CCM.',
      btn: "Conocer más"
    },
    about: {
      tag: "Acerca de Mí",
      title: "Una trayectoria de ",
      titleHighlight: "35+ años",
      titleEnd: " en el comercio global",
      subtitle: "Desde mis inicios en 1990 hasta liderar CargoNet Group, cada paso ha sido una apuesta por la excelencia y la innovación en logística internacional.",
      p1: 'Ingresé formalmente al mundo del comercio exterior el 1 de febrero de 1990. Desde entonces, he dedicado mi vida a entender y optimizar cada eslabón de la cadena logística global. En enero de 1999 di un paso audaz: fundé mi propia empresa, <strong>Connexion Transportes Internacionales S.A.</strong>, en Argentina.',
      p2: 'El 20 de marzo de 2002, detectando el creciente flujo comercial entre Estados Unidos y Argentina, activé <strong>CargoNet</strong>. La visión era clara: construir un puente logístico sólido entre América Latina y el mundo. En 2005 expandimos a Estados Unidos, y en 2009 dimos el salto a Brasil.',
      p3: 'Mi filosofía siempre ha sido la misma: la confianza se construye con presencia. Viajé incansablemente para conocer personalmente a cada agente, en América Latina, Europa, Asia y Norteamérica. Viví en Miami por 5 años desarrollando la oficina local, y luego en Palma de Mallorca por 3 años para fortalecer la presencia europea.',
      p4: 'Hoy, además de dirigir CargoNet Group, me desempeño como Director de Logística y Comercio Exterior en el Comité Argentina de la Cámara de Comercio del Mercosur (CCM), y soy una voz activa en medios como Infobae y Radio Rivadavia, analizando la coyuntura económica y aduanera del país.',
      p5: 'Me capacito constantemente en Logística, Distribución, Oratoria, Inteligencia Emocional y Coaching. Porque creo que la excelencia no es un destino, sino un camino de mejora continua.',
      h1: { num: "35+", label: "Años de experiencia" },
      h2: { num: "4", label: "Países con oficinas propias" },
      h3: { num: "1990", label: "Inicio en comercio exterior" },
      h4: { num: "2002", label: "Fundación de CargoNet" }
    },
    trajectory: {
      tag: "Mi Trayectoria",
      title: "Línea de tiempo ",
      titleHighlight: "profesional",
      subtitle: "Cada hito en este viaje ha sido construido con dedicación, visión global y pasión por la logística internacional.",
      items: [
        { year: "1 de Febrero, 1990", title: "Inicio en Comercio Exterior", desc: "Di mis primeros pasos formales en el mundo del comercio internacional. El inicio de una vocación que definiría mi vida profesional." },
        { year: "Enero, 1999", title: "Fundación de Connexion Transportes Internacionales S.A.", desc: "Di el gran salto emprendedor creando mi propia empresa de transportes internacionales en Argentina, sentando las bases de lo que sería mi carrera como empresario." },
        { year: "20 de Marzo, 2002", title: "Activación de CargoNet Argentina", desc: "En plena crisis argentina, detecté una oportunidad: el tráfico entre USA y Argentina estaba en pleno crecimiento. Así nació CargoNet, inicialmente enfocada en la ruta comercial con Estados Unidos." },
        { year: "2005", title: "Apertura de CargoNet USA", desc: "Expandí operaciones abriendo la oficina oficial en Estados Unidos. Un paso estratégico para gestionar directamente el creciente volumen de cargas entre ambos países." },
        { year: "2009", title: "CargoNet Brasil", desc: "Inauguré la filial brasileña, completando el triángulo logístico Argentina-USA-Brasil. Además realicé campañas comerciales en Colombia y Perú para desarrollar la exportación regional." },
        { year: "2011 - 2016", title: "Viviendo en Miami", desc: "Me mudé a Miami para desarrollar la oficina local. En 5 años no solo consolidé las operaciones existentes, sino que busqué nuevos agentes en América Latina, Centroamérica, Europa y Asia. En 2016 nos mudamos a una oficina y depósito con estructura de primer nivel." },
        { year: "2016 - 2019", title: "Palma de Mallorca, España", desc: "Acepté un desafío logístico en la isla. Lo que sería un año se convirtieron en tres, donde profundicé mi conocimiento de la logística europea y fortalecí la red de agentes en Europa y Asia." },
        { year: "2012 - 2015", title: "Expansión Global: Singapore & USA Trading", desc: "Abrí una trading company en Singapore (2015) y otra en USA (2012), diversificando las operaciones y creando nuevas rutas comerciales. También inicié un proyecto en África." },
        { year: "Actualidad", title: "CargoNet Group & Presencia en Medios", desc: "Hoy CargoNet Group ofrece servicios integrales: transporte multimodal, consultoría estratégica de cadenas de suministro, búsqueda de proveedores y despacho aduanero. Soy columnista en Infobae y Radio Rivadavia, defendiendo la simplificación aduanera y la competitividad de las economías regionales." }
      ]
    },
    blog: {
      tag: "Blog",
      title: "Análisis y ",
      titleHighlight: "opinión",
      subtitle: "Reflexiones sobre logística internacional, comercio exterior, la economía argentina y el futuro del supply chain global.",
      readMore: "Leer más →",
      backToBlog: "← Volver al Blog",
      posts: [
        { date: "15 de Junio, 2026", title: "El costo logístico argentino: un obstáculo para la competitividad regional", desc: "Análisis profundo sobre cómo los altos costos logísticos locales afectan a las economías regionales argentinas y por qué la desregulación aduanera es urgente para competir en mercados internacionales.",
          slug: "costo-logistico-argentino",
          content: [
            "Argentina enfrenta una paradoja: posee recursos naturales extraordinarios y un capital humano de primer nivel, pero sus costos logísticos internos le restan competitividad en los mercados globales. Según estudios del sector, el costo logístico en Argentina representa entre el 12% y el 15% del valor final del producto, mientras que en países de la OCDE este porcentaje oscila entre el 6% y el 8%.",
            "Esta brecha no es un dato menor. Para una pyme exportadora de Mendoza que quiere vender sus vinos en Shanghái, o para un productor de aceite de oliva de San Juan que busca llegar a Nueva York, cada punto porcentual cuenta. La pregunta que debemos hacernos es: por qué logísticamente somos más caros y, sobre todo, qué podemos hacer para cambiar esta realidad.",
            "<h2>Los factores del sobrecosto logístico</h2>",
            "Son múltiples los factores que inciden en esta ecuación. En primer lugar, está la infraestructura. Rutas que necesitan mantenimiento, puertos con capacidad limitada y una red ferroviaria subutilizada. Pero hay un factor aún más determinante: la complejidad burocrática y aduanera.",
            "Los tiempos de espera en fronteras, los procesos de documentación redundantes y la falta de digitalización integral generan demoras que se traducen en costos. Un contenedor que pasa tres días adicionales en la aduana no solo acumula cargas por almacenamiento, sino que retrasa toda la cadena de suministro, afectando compromisos con compradores internacionales.",
            "<h2>La urgencia de la desregulación</h2>",
            "En los últimos años hemos visto avances, pero insuficientes. La desregulación aduanera no es un tema ideológico, es una necesidad competitiva. Países como Chile, Uruguay y Perú han simplificado sus procesos y hoy son más ágiles en el comercio internacional. Argentina no puede darse el lujo de quedar rezagada.",
            "Desde CargoNet Group hemos impulsado activamente la simplificación de procesos. Hemos visto de primera mano cómo la eliminación de requisitos duplicados y la implementación de ventanillas únicas de comercio exterior pueden reducir tiempos hasta en un 40%.",
            "<h2>El impacto en las economías regionales</h2>",
            "Las economías regionales son las más perjudicadas. Un productor de peras de Río Negro o un fabricante de muebles de la provincia de Buenos Aires no compite solo con su producto, sino contra todo un sistema logístico. Cuando ese sistema es ineficiente, el producto pierde competitividad antes siquiera de salir al mercado.",
            "La solución pasa por una agenda integral que incluya inversión en infraestructura, digitalización de procesos aduaneros, simplificación normativa y, fundamentalmente, un diálogo público-privado permanente. El sector privado conoce los problemas; necesita ser escuchado y tener reglas claras y estables.",
            "Argentina tiene todo para ser un actor logístico relevante en el mundo. Solo necesita despejar los obstáculos que la frenan."
          ]
        },
        { date: "28 de Mayo, 2026", title: "La confianza como moneda de cambio en el comercio internacional", desc: "Los mercados internacionales confían en las personas y su trayectoria, no en los gobiernos de turno. Una reflexión sobre el factor humano en los negocios globales y la construcción de relaciones duraderas.",
          slug: "confianza-comercio-internacional",
          content: [
            "En mis más de 35 años de carrera en el comercio internacional, hay una lección que se ha repetido una y otra vez: los negocios los hacen las personas, no los países ni los gobiernos. Esta afirmación, que puede sonar a lugar común, es en realidad la clave que explica por qué ciertas relaciones comerciales perduran décadas, mientras otras se desvanecen con el primer cambio político.",
            "Cuando viajé a Italia cada enero durante diez años, no iba solo a cerrar contratos. Iba a construir relaciones. A compartir un café, a conocer las familias de mis agentes, a entender sus culturas y sus formas de hacer negocios. Esa inversión en capital humano fue la que sostuvo nuestras operaciones a través de crisis económicas, cambios de gobierno y fluctuaciones del mercado.",
            "<h2>La trayectoria como garantía</h2>",
            "En el mundo del comercio internacional, tu trayectoria es tu mejor carta de presentación. Cuando un agente en Singapur decide confiar en ti para manejar una carga de alto valor, no está evaluando el gobierno argentino de turno. Está evaluando tu historial, tu reputación, tu capacidad de cumplir. Las personas confían en otras personas.",
            "He visto empresas perder negocios millonarios no por falta de capacidad técnica, sino por no haber invertido en construir relaciones personales sólidas. Al mismo tiempo, he visto acuerdos sostenerse en las peores crisis porque había confianza real entre las partes.",
            "<h2>El factor humano en la era digital</h2>",
            "Vivimos en una era de digitalización, inteligencia artificial y automatización. Sin embargo, el factor humano sigue siendo insustituible en el comercio internacional. Un algoritmo puede optimizar una ruta logística, pero no puede reemplazar la confianza construida en años de relación.",
            "La tecnología nos da herramientas extraordinarias para ser más eficientes, pero el núcleo del comercio internacional sigue siendo humano. Por eso en CargoNet Group priorizamos la atención personalizada, el seguimiento cercano y, sobre todo, la palabra empeñada.",
            "<h2>Consejos para construir confianza global</h2>",
            "Para las empresas que quieren expandirse internacionalmente, recomiendo: primero, invertir tiempo en conocer personalmente a sus socios comerciales; segundo, ser consistentes en la calidad del servicio; tercero, cumplir siempre lo prometido, incluso cuando sea difícil; y cuarto, mantener una comunicación transparente, especialmente cuando las cosas no salen como se planearon.",
            "La confianza es la moneda más valiosa del comercio internacional. Y como toda moneda, hay que ganarla día a día."
          ]
        },
        { date: "10 de Mayo, 2026", title: "Transporte multimodal: la clave para optimizar la cadena de suministro", desc: "Cómo la integración de distintos modos de transporte (marítimo, aéreo, terrestre) puede reducir costos, tiempos y riesgos en la logística internacional. Estrategias para pymes que quieren exportar.",
          slug: "transporte-multimodal",
          content: [
            "Una de las preguntas que más recibo de empresarios que quieren comenzar a exportar es: cuál es la mejor forma de enviar mi producto? La respuesta, como casi todo en logística, es: depende. Y lo que funciona para una empresa puede no ser óptimo para otra. Por eso el transporte multimodal se ha convertido en una de las herramientas más poderosas para optimizar cadenas de suministro.",
            "El transporte multimodal consiste en utilizar dos o más modos de transporte (marítimo, aéreo, ferroviario, terrestre) bajo un mismo conocimiento de embarque o contrato de transporte. Esto permite aprovechar las ventajas de cada modo y minimizar sus desventajas.",
            "<h2>Las ventajas del enfoque multimodal</h2>",
            "La principal ventaja es la optimización de costos. El transporte marítimo es económico pero lento; el aéreo es rápido pero caro; el terrestre ofrece flexibilidad pero tiene limitaciones de distancia. Al combinarlos, podemos diseñar una solución que equilibre costo, tiempo y seguridad para cada carga específica.",
            "Por ejemplo, para una exportación de alimentos perecederos desde Argentina a Europa, podemos utilizar camión refrigerado hasta el puerto de Buenos Aires, luego barco hasta Rotterdam, y finalmente tren o camión hasta el destino final. Esta combinación puede reducir costos significativamente frente a la opción aérea, manteniendo la cadena de frío intacta.",
            "<h2>Estrategias para pymes exportadoras</h2>",
            "Para las pymes que están dando sus primeros pasos en la exportación, recomiendo comenzar con operaciones multimodales simples y trabajar con operadores logísticos con experiencia comprobada. Algunos consejos prácticos:",
            "Primero, conocer bien las características de tu producto. Peso, volumen, perecibilidad, valor unitario y requisitos regulatorios determinan qué modos de transporte son viables.",
            "Segundo, no subestimar los costos de inventario en tránsito. Un envío más lento puede ser más barato en flete, pero puede generar costos de capital inmovilizado y almacenamiento.",
            "Tercero, diversificar rutas y modos. Depender de un solo modo o ruta es riesgoso. Tener alternativas te da poder de negociación y resiliencia ante imprevistos.",
            "<h2>El futuro es multimodal</h2>",
            "La tendencia global es hacia cadenas de suministro cada vez más integradas y flexibles. El transporte multimodal no es solo una opción técnica, es una ventaja competitiva. Las empresas que logren dominar esta complejidad estarán mejor posicionadas para competir en el mercado global.",
            "En CargoNet Group hemos desarrollado soluciones multimodales a medida para cada cliente, porque sabemos que en logística, la fórmula perfecta no existe: se construye para cada caso."
          ]
        },
        { date: "22 de Abril, 2026", title: "La ruta del dragón: cómo las pymes latinoamericanas pueden comerciar con China", desc: "Guía práctica sobre el servicio de trading con China. Coordinación aduanera origen-destino, búsqueda de proveedores y claves para aprovechar las oportunidades del gigante asiático.",
          slug: "ruta-del-dragon-china",
          content: [
            "China no es solo el taller del mundo, es el socio comercial más importante de América Latina. En 2025, el intercambio comercial entre China y América Latina superó los 500 mil millones de dólares. Sin embargo, para muchas pymes latinoamericanas, el mercado chino sigue siendo un gigante inaccesible, lleno de barreras idiomáticas, culturales y burocráticas.",
            "En este artículo quiero compartir las claves que hemos desarrollado en CargoNet Group para ayudar a las pymes de la región a navegar con éxito el comercio con China. Porque sí, es posible, y los resultados pueden transformar un negocio.",
            "<h2>Primer paso: entender el mercado</h2>",
            "China no es un mercado homogéneo. Lo que funciona en Shanghai puede no funcionar en Chengdu. Las diferencias regionales, las preferencias de consumo y las regulaciones locales varían enormemente. Antes de pensar en exportar a China, hay que entender a qué China queremos llegar.",
            "Recomiendo comenzar con un análisis sectorial: existe demanda para mi producto? Cómo es la competencia local? Cuáles son los requisitos fitosanitarios, de etiquetado y certificación? Muchas pymes fracasan en su primer intento por no haber hecho esta tarea previa.",
            "<h2>La importancia del socio local</h2>",
            "En China, las relaciones personales (guanxi) son fundamentales. Tener un socio local confiable no es un lujo, es una necesidad. Este socio puede ayudar con la traducción, la navegación burocrática, la identificación de ferias comerciales relevantes y, sobre todo, la construcción de confianza con compradores potenciales.",
            "Desde CargoNet Group hemos construido una red de socios en las principales ciudades chinas, lo que nos permite ofrecer un servicio integral que va desde la búsqueda de proveedores hasta la coordinación aduanera origen-destino.",
            "<h2>Logística puerta a puerta</h2>",
            "Uno de los servicios que más valoran nuestros clientes es la coordinación logística integral. Desde que la mercadería sale de la fábrica en Shenzhen hasta que llega al depósito en Buenos Aires, manejamos cada eslabón de la cadena: transporte interno en China, despacho de exportación, flete oceánico, despacho de importación en destino y entrega final.",
            "La clave está en la gestión de la documentación. Un error en un certificado de origen o en una declaración aduanera puede significar días o semanas de demora. Por eso trabajamos con equipos especializados tanto en China como en cada país de destino.",
            "<h2>Oportunidades para pymes</h2>",
            "Las oportunidades son enormes. Productos alimenticios premium (vinos, aceites, carnes), servicios turísticos, tecnología aplicada al agro y diseño industrial son sectores donde las pymes latinoamericanas tienen mucho que ofrecer. El dragón chino no es un devorador de oportunidades; es un socio dispuesto a negociar. Solo hay que saber cómo acercarse."
          ]
        },
        { date: "5 de Abril, 2026", title: "Desregulación aduanera: una deuda pendiente de Argentina", desc: "Análisis de las barreras burocráticas que frenan el comercio exterior argentino. Propuestas concretas para simplificar procesos y ganar competitividad en el mercado global.",
          slug: "desregulacion-aduanera",
          content: [
            "Argentina tiene una de las legislaciones aduaneras más complejas del mundo. Con más de 30.000 posiciones arancelarias, múltiples organismos intervinientes y procesos que requieren decenas de documentos, hacer comercio exterior en Argentina es, francamente, una odisea. Y esto no es una exageración: es la realidad que enfrentamos cada día quienes trabajamos en el sector.",
            "La desregulación aduanera no es un capricho ideológico. Es una necesidad económica urgente. Cada día que un contenedor pasa detenido en la aduana por trámites burocráticos innecesarios, alguien está perdiendo dinero: el exportador que no puede cumplir con su cliente, el importador que tiene su producción detenida, y en última instancia, el país que pierde competitividad.",
            "<h2>Los nudos del sistema</h2>",
            "Identifico al menos tres grandes nudos que necesitan ser desatados. El primero es la multiplicidad de organismos intervinientes. No es raro que una misma operación requiera la intervención de AFIP, SENASA, INAL, Secretaría de Comercio y Aduana, cada uno con sus propios sistemas, requisitos y tiempos.",
            "El segundo nudo es la falta de digitalización integral. Si bien se han dado pasos importantes con el sistema Malvina y la Ventanilla Única, todavía hay procesos que requieren papel, firmas presenciales y trámites que podrían resolverse en minutos y toman días.",
            "El tercero es la incertidumbre normativa. Las reglas cambian con frecuencia, a veces sin la debida difusión o período de transición. Esto hace que planificar una operación de comercio exterior sea un ejercicio de alta complejidad.",
            "<h2>Propuestas concretas</h2>",
            "Propongo tres medidas concretas que podrían transformar el comercio exterior argentino en el corto plazo:",
            "Primero, implementar un sistema de ventanilla única efectiva que integre a todos los organismos intervinientes en una sola plataforma digital con tiempos de respuesta máximos.",
            "Segundo, establecer un régimen de silencio positivo para autorizaciones aduaneras: si la administración no responde en el plazo establecido, la solicitud se considera aprobada.",
            "Tercero, crear mesas de diálogo público-privado permanentes para que el sector pueda alertar sobre problemas y proponer soluciones en tiempo real.",
            "<h2>Un llamado a la acción</h2>",
            "La desregulación aduanera no es un tema técnico menor. Es una política de desarrollo productivo. Es la herramienta más poderosa que tenemos para que las economías regionales argentinas puedan competir en igualdad de condiciones en el mercado global. Como he dicho en Infobae y Radio Rivadavia: simplificar no es menos control, es más inteligencia. Es hora de pasar de la cultura del control a la cultura de la facilitación."
          ]
        },
        { date: "18 de Marzo, 2026", title: "Networks de agentes de carga: el poder de las conexiones globales", desc: "Desde el año 2000 participamos en diferentes networks internacionales de agentes de carga. Cómo estas alianzas estratégicas potencian el alcance global y generan oportunidades de negocio.",
          slug: "networks-agentes-carga",
          content: [
            "Desde el año 2000, CargoNet Group participa en diferentes networks internacionales de agentes de carga. Estos networks son, en esencia, comunidades globales de operadores logísticos que colaboran entre sí para ofrecer cobertura mundial. Y han sido, sin duda, uno de los pilares de nuestro crecimiento internacional.",
            "Cada año, estos networks organizan encuentros internacionales. No son simples conferencias; son oportunidades únicas para conocer personalmente a los agentes con quienes trabajamos durante todo el año. En estas reuniones se fortalecen vínculos, se negocian acuerdos y se construye la confianza que mencionaba en artículos anteriores.",
            "<h2>Cómo funcionan los networks</h2>",
            "Imaginemos que un cliente en Argentina necesita enviar una carga a Kazajistán. No tenemos oficina propia allí, pero a través del network tenemos un agente certificado en Almaty que conoce las regulaciones locales, tiene la infraestructura necesaria y responde por la calidad del servicio. El network nos garantiza que ese agente cumple con estándares de calidad y solvencia.",
            "Esta red de confianza es invaluable. Nos permite ofrecer cobertura global sin necesidad de tener oficinas propias en cada país, manteniendo al mismo tiempo altos estándares de calidad. Es una muestra de cómo la colaboración puede multiplicar las capacidades individuales.",
            "<h2>El valor de los viajes y encuentros</h2>",
            "Como mencioné en mi trayectoria, he viajado incansablemente para conocer a mis agentes en persona. Estos viajes no son gastos; son inversiones. Conocer a un agente cara a cara, compartir una cena, entender su cultura y su forma de trabajar, construye un nivel de confianza que ningún contrato puede reemplazar.",
            "Los networks también ofrecen beneficios tangibles: sistemas de pago garantizados, resolución de conflictos, capacitación continua y, cada vez más, plataformas digitales que facilitan la gestión de operaciones entre miembros.",
            "<h2>Consejos para elegir un network</h2>",
            "Para las empresas que estén considerando unirse a un network de agentes de carga, recomiendo evaluar: la cobertura geográfica (que tenga presencia en los mercados que te interesan), la calidad de sus miembros (procesos de selección rigurosos), el tamaño y la relevancia (networks demasiado grandes pueden ser impersonales; demasiado pequeños, limitados) y el tipo de encuentros y capacitaciones que ofrecen.",
            "En un mundo cada vez más interconectado, pertenecer a una red global de confianza no es una opción. Es una necesidad competitiva."
          ]
        }
      ]
    },
    social: {
      tag: "Redes Sociales",
      title: "Seguime en mis ",
      titleHighlight: "redes",
      subtitle: "Conectemos y sigamos construyendo juntos el futuro del comercio internacional."
    },
    contact: {
      tag: "Contacto",
      title: "Hablemos sobre ",
      titleHighlight: "logística global",
      desc: "¿Querés conectar conmigo? Estoy abierto a conversar sobre comercio internacional, alianzas estratégicas, consultoría o simplemente compartir experiencias sobre el fascinante mundo de la logística global.",
      btn: "Conectar en LinkedIn"
    },
    vision: {
      tag: "La Visión",
      title: "Una visión que ",
      titleHighlight: "transformó una industria",
      p1: 'Después de décadas acumulando experiencia en el corazón del comercio internacional, Germán Muchico llegó a una conclusión fundamental: el mercado de logística y comercio exterior estaba fragmentado, ineficiente y no servía adecuadamente a sus clientes. Los proveedores tradicionales ofrecían servicios desarticulados: un transportista que movía carga sin entender estrategia, un despachante aduanal que procesaba documentos sin visión integral, un operador portuario que optimizaba solo sus márgenes, un banco que mediaba transacciones sin asesoría comercial.',
      p2: 'El resultado: clientes desmembrados, costos ocultos, riesgos no identificados, oportunidades perdidas. Germán vio la oportunidad donde otros solo veían mercado. Comprendió que lo que faltaba era un socio verdaderamente consultivo—alguien que integrara toda la cadena logística bajo una lógica estratégica única. Fue entonces cuando decidió fundar CargoNet Group, no como un transportista más, sino como un acto de rebelión contra la ineficiencia sistémica del sector.'
    },
    pilares: {
      tag: "Los Pilares",
      title: "Los pilares de ",
      titleHighlight: "CargoNet Group",
      subtitle: "Tres principios fundamentales que guían cada operación, cada decisión y cada relación comercial.",
      pilar1: { title: "Confianza como Moneda de Cambio", desc: 'Después de ver cómo la corrupción plagaba el sector, Germán estableció desde el día uno que CargoNet Group operaría con transparencia absoluta. Esto no fue debilidad competitiva—fue fortaleza. Los clientes serios querían trabajar con un socio confiable. Certificación ISO 37001, Código de Ética explícito y línea de denuncias confidencial (+54 11 5638-4944).' },
      pilar2: { title: "Innovación como Brújula", desc: 'Germán sabía que el sector evolucionaba constantemente. CargoNet Group se construyó sobre la premisa de que la innovación no era un lujo, sino una obligación. Desde monitoreo en tiempo real hasta análisis predictivo, la tecnología es parte del ADN operativo. La complacencia mata a las organizaciones; la innovación constante las mantiene vivas.' },
      pilar3: { title: "Excelencia Operativa", desc: 'Después de décadas viendo mediocridad, Germán simplemente no la toleraba. Cada empleado de CargoNet Group hereda este principio: no hay "suficientemente bueno"—solo hay excelencia o fracaso. La excelencia no es meta, es punto de partida. Se ve en cada detalle: puntualidad de entregas, precisión de documentación, calidad del asesoramiento.' }
    },
    modelo: {
      tag: "Modelo de Trabajo",
      title: "Modelo ",
      titleHighlight: "consultivo",
      subtitle: "Un enfoque radical que separó a CargoNet Group de la competencia: cuatro fases que transforman la logística en una verdadera ventaja competitiva.",
      phases: [
        { title: "Diagnóstico Profundo", desc: 'La conversación comienza con análisis profundo, no con propuestas de transporte. ¿Dónde se pierden costos? ¿Cuáles son tus riesgos regulatorios? ¿Qué oportunidades de optimización existen? Este enfoque—radical para la industria—marca la diferencia.' },
        { title: "Diseño Estratégico", desc: 'Soluciones personalizadas para cada cliente. No hay plantillas ni soluciones genéricas. Cada organización recibe una arquitectura logística diseñada específicamente para sus realidades, desafíos y objetivos comerciales.' },
        { title: "Ejecución de Calidad", desc: 'Coordinación perfecta, monitoreo riguroso y responsabilidad absoluta. Cuando CargoNet Group se compromete con un resultado, es una promesa. Cada eslabón de la cadena es gestionado con precisión quirúrgica.' },
        { title: "Optimización Continua", desc: 'Cada proyecto es un proceso de mejora constante. Datos, resultados, métricas: se analizan continuamente para optimización incremental. En logística no hay destino final, solo evolución permanente.' }
      ]
    },
    infra: {
      tag: "Presencia Global",
      title: "Infraestructura y ",
      titleHighlight: "posicionamiento global",
      subtitle: "CargoNet Group se construyó como una red logística multicontinental estratégicamente posicionada en los corredores de comercio más importantes del mundo.",
      oficinas: [
        { title: "Argentina — Base Operativa", desc: 'Oficina Central en Puerto Madero, CABA (Olga Cossettini 1545). Oficina en Aeropuerto Ezeiza para coordinación aduanera en tiempo real. Oficinas regionales en Mar del Plata y Mendoza para cobertura nacional completa.' },
        { title: "Estados Unidos — El Puente con Norteamérica", desc: 'Cargo Net USA LLC en Miami, Florida (6735 NW 36th Street, STE 390). El principal hub logístico de América Latina hacia Estados Unidos. Coordinación directa con reguladores estadounidenses y servicio al corredor Latinoamérica-EE.UU.-Caribe.' },
        { title: "Brasil — El Mayor Mercado Regional", desc: 'CargoNet Logistic Brasil en São Paulo (Iraí 438 CJ 71, Indianópolis). Presencia estratégica en el mayor mercado de América del Sur, capturando flujos comerciales bilaterales cruciales para la región.' }
      ]
    },
    especializacion: {
      tag: "Especialización",
      title: "Especialización en ",
      titleHighlight: "cargas complejas",
      p1: 'Uno de los diferenciales más claros de CargoNet Group bajo la dirección de Germán Muchico es su especialización en cargas complejas—particularmente la División de Perecederos. Transportar mercancías perecederas a múltiples temperaturas (fresco, congelado, ambiente) requiere: infraestructura especializada (almacenes de temperatura controlada), expertise regulatoria (INVIMA, FDA, SENASA), coordinación perfecta (una cadena rota = mercancía perdida) y conocimiento de mercados específicos como flores, frutas, carnes, lácteos y mariscos.',
      p2: 'Muchos competidores evitan estas cargas por su complejidad. Germán Muchico y CargoNet Group las abrazaron. ¿Por qué? Porque precisamente donde hay complejidad hay diferenciación. Y porque los clientes dispuestos a pagar por soluciones verdaderamente especializadas existen. Hoy, la División de Perecederos maneja volúmenes importantes desde toda la región hacia mercados globales, posicionando a CargoNet Group como el socio logístico de confianza para operadores premium que no pueden fallar.'
    },
    diferenciadores: {
      tag: "Diferenciadores",
      title: "Por qué ",
      titleHighlight: "CargoNet Group destaca",
      subtitle: "En un sector lleno de competidores, estas son las razones claras que nos diferencian y nos posicionan como líderes.",
      items: [
        { title: "Consultoría Verdadera", desc: "Somos consultores que ejecutamos soluciones logísticas. No solo movemos carga, transformamos cadenas de suministro. La diferencia es fundamental." },
        { title: "Reputación Acumulada", desc: "La reputación de Germán Muchico abre puertas, genera confianza y atrae clientes premium. Es el activo más valioso de CargoNet Group, construido durante décadas." },
        { title: "Infraestructura Multicontinental", desc: "Posicionamiento estratégico en Argentina, Estados Unidos y Brasil para servir los corredores comerciales más dinámicos de América con presencia local real." },
        { title: "Especialización en Complejidad", desc: "La División de Perecederos maneja cargas que competidores no pueden aceptar. Donde hay complejidad, hay diferenciación y valor agregado." },
        { title: "Innovación Tecnológica", desc: "Monitoreo en tiempo real, análisis predictivo y automatización de procesos. La tecnología no es un accesorio, es parte del core operativo de CargoNet Group." },
        { title: "Ética Inquebrantable", desc: "ISO 37001, Código de Ética explícito, línea de denuncias confidencial. CargoNet Group opera con absoluta transparencia en un sector donde la corrupción es común." }
      ]
    },
    quote: {
      text: "Transformamos desafíos en oportunidades. Juntos, construimos éxito global.",
      author: "— Germán Muchico, Fundador y CEO de CargoNet Group"
    },
    multimedia: {
      title: "Galería ",
      titleHighlight: "Multimedia",
      subtitle: "Videos, entrevistas y contenido visual sobre logística internacional, comercio exterior y la trayectoria de Germán Muchico.",
      videosTag: "Videos",
      videosTitle: "Mis ",
      videosTitleHighlight: "videos",
      videosSubtitle: "Entrevistas, charlas y análisis sobre logística internacional, comercio exterior y la coyuntura económica argentina.",
      video1Title: "Germán Muchico — Logística y Comercio Exterior",
      video1Desc: "Análisis sobre el estado del comercio internacional y el rol de Argentina en la cadena logística global.",
      video2Title: "CargoNet Group — Soluciones Logísticas Integrales",
      video2Desc: "Presentación de los servicios y la visión estratégica de CargoNet Group para el comercio exterior regional.",
      video3Title: "El Futuro de la Logística en Latinoamérica",
      video3Desc: "Perspectivas sobre la evolución de la cadena de suministro y las oportunidades para pymes en el comercio global.",
      perfilesTag: "Perfiles",
      perfilesTitle: "Mis ",
      perfilesTitleHighlight: "perfiles",
      perfilesSubtitle: "Conectá conmigo en mis plataformas favoritas. Publico contenido regularmente sobre logística, comercio exterior y análisis de la coyuntura económica.",
      ctaTag: "Más Contenido",
      ctaTitle: "Seguime en ",
      ctaTitleHighlight: "mis redes",
      ctaSubtitle: "Publico contenido regularmente sobre logística, comercio exterior y análisis de la coyuntura económica. No te lo pierdas."
    },
    footer: 'Construido con <i class="fas fa-heart heart"></i> y pasión por la logística global'
  },

  en: {
    nav: {
      inicio: "Home",
      trayectoria: "Career",
      servicios: "Services",
      clientes: "Clients",
      empresa: "Company",
      casos: "Success Stories",
      blog: "Blog",
      multimedia: "Multimedia",
      contacto: "Contact"
    },
    servicios: {
      tag: "Services",
      title: "Global ",
      titleHighlight: "logistics solutions",
      subtitle: "We offer comprehensive international logistics, foreign trade and strategic consulting services for companies looking to expand their horizons.",
      items: [
        { title: "Multimodal Transport", desc: "Integrated management of maritime, air and land transport. We optimize routes, costs and times to ensure your cargo reaches its destination efficiently and safely." },
        { title: "Customs Clearance", desc: "Comprehensive import and export customs clearance. We manage all necessary documentation with each country's customs authorities." },
        { title: "Supply Chain Consulting", desc: "Analysis and optimization of supply chains. We identify bottlenecks, reduce operating costs and improve your company's logistics efficiency." },
        { title: "Supplier Sourcing", desc: "Identification and selection of international suppliers. We evaluate quality, reliability and costs to connect your business with the best global partners." },
        { title: "Trading with China", desc: "Comprehensive trade service with China. Origin-destination customs coordination, quality management and door-to-door logistics for Latin American SMEs." },
        { title: "Warehousing & Distribution", desc: "Storage and distribution solutions in strategic locations (Argentina, USA, Brazil). Integrated inventory, picking and dispatch with real-time tracking." },
        { title: "Banking Operations", desc: "Management of letters of credit, international transfers and bank confirmations. We optimize financial processes integrated with foreign trade." },
        { title: "Legal Advisory", desc: "Comprehensive protection of interests in foreign trade and customs regulations. Specialized lawyers in international contracts and regulatory compliance." },
        { title: "International Moves", desc: "Corporate and family moves with global reach. Complete customs management, comprehensive documentation and personalized tracking at every stage." },
        { title: "Perishables Division", desc: "Specialists in multi-temperature perishable cargo. Cold chain infrastructure, FDA/SENASA/INVIMA compliance and coordination for flowers, fruits, meats and seafood." }
      ]
    },
    clientes: {
      tag: "Clients",
      title: "Trusted ",
      titleHighlight: "by many",
      subtitle: "Companies from various sectors trust CargoNet Group for their international trade operations. Our experience is their best guarantee.",
      items: [
        { text: "Logistics and distribution companies in Argentina, Brazil and the USA that outsource their international operations." },
        { text: "Exporting SMEs from Latin America looking to expand their reach to markets in Europe, Asia and North America." },
        { text: "Multinational corporations that require integrated supply chain solutions with regional presence." },
        { text: "Agro-industrial companies that need specialized transport and efficient customs management." },
        { text: "Tech startups and scaleups with foreign trade operations that require agility and reliability." },
        { text: "Trade associations and chambers of commerce that trust our experience to advise their members." }
      ]
    },
    casos: {
      tag: "Success Stories",
      title: "Success ",
      titleHighlight: "stories",
      subtitle: "Discover some cases where our experience in international logistics made a difference for our clients.",
      items: [
        { title: "Expansion to the USA for an Argentine manufacturer", desc: "We accompanied an Argentine metalworking SME in its export process to the United States. We managed all customs clearance, multimodal logistics and required certifications. Today they export 3 containers monthly." },
        { title: "Supply chain optimization for Brazilian retail", desc: "We redesigned the supply chain of a Brazilian retail chain with operations in Argentina. We reduced transit times by 30% and total logistics costs by 22%." },
        { title: "Argentina-China logistics corridor", desc: "We implemented a door-to-door service for an agricultural cooperative seeking to export to China. We coordinated quality controls, phytosanitary documentation and ocean logistics with real-time tracking." },
        { title: "Strategic consulting for regional expansion", desc: "We advised a Uruguayan technology company on its expansion plan to Brazil and Mexico. We designed their logistics network, identified strategic partners and optimized their customs processes." },
        { title: "Perishables logistics for flower exporter", desc: "We implemented an integral cold chain for an Ecuadorian flower exporter to the United States and Europe. We coordinated refrigerated transport, phytosanitary certifications and customs clearance. Reduced temperature losses by 95%." },
        { title: "Banking operations for machinery importer", desc: "We managed letters of credit and international financing for an Argentine importer of German heavy machinery. Coordinated with banks in both countries, optimizing timelines and reducing financial costs by 18%." }
      ]
    },
    hero: {
      badge: "CEO & Founder of CargoNet Group",
      title: "Germán ",
      titleHighlight: "Muchico",
      subtitle: "International Logistics · Foreign Trade · Supply Chain",
      desc: "Over 35 years transforming international trade with strategic vision, global presence, and an unwavering commitment to excellence.",
      btnPrimary: "My Career",
      btnOutline: "Contact Me"
    },
    homeAbout: {
      tag: "About Me",
      title: "A ",
      titleHighlight: "35+ year",
      titleEnd: " journey in global trade",
      subtitle: "From my beginnings in 1990 to leading CargoNet Group, every step has been a commitment to excellence and innovation in international logistics.",
      p1: 'I formally entered the world of foreign trade on February 1, 1990. In January 1999 I founded my own company, <strong>Connexion Transportes Internacionales S.A.</strong>, in Argentina. On March 20, 2002 I activated <strong>CargoNet</strong>, expanding to the United States in 2005 and to Brazil in 2009.',
      p2: 'I lived in Miami for 5 years developing the local office, and then in Palma de Mallorca for 3 years strengthening our European presence. Today I lead CargoNet Group and serve as Director of Logistics at the Argentina Committee of the CCM.',
      btn: "Learn more"
    },
    about: {
      tag: "About Me",
      title: "A ",
      titleHighlight: "35+ year",
      titleEnd: " journey in global trade",
      subtitle: "From my beginnings in 1990 to leading CargoNet Group, every step has been a commitment to excellence and innovation in international logistics.",
      p1: 'I formally entered the world of foreign trade on February 1, 1990. Since then, I have dedicated my life to understanding and optimizing every link in the global logistics chain. In January 1999 I took a bold step: I founded my own company, <strong>Connexion Transportes Internacionales S.A.</strong>, in Argentina.',
      p2: 'On March 20, 2002, detecting the growing trade flow between the United States and Argentina, I activated <strong>CargoNet</strong>. The vision was clear: build a solid logistics bridge between Latin America and the world. In 2005 we expanded to the United States, and in 2009 we made the leap to Brazil.',
      p3: 'My philosophy has always been the same: trust is built through presence. I traveled tirelessly to meet every agent personally, in Latin America, Europe, Asia and North America. I lived in Miami for 5 years developing the local office, and then in Palma de Mallorca for 3 years to strengthen our European presence.',
      p4: 'Today, besides leading CargoNet Group, I serve as Director of Logistics and Foreign Trade at the Argentina Committee of the Mercosur Chamber of Commerce (CCM), and I am an active voice in media such as Infobae and Radio Rivadavia, analyzing the country\'s economic and customs situation.',
      p5: 'I constantly train in Logistics, Distribution, Public Speaking, Emotional Intelligence and Coaching. Because I believe excellence is not a destination, but a path of continuous improvement.',
      h1: { num: "35+", label: "Years of experience" },
      h2: { num: "4", label: "Countries with offices" },
      h3: { num: "1990", label: "Started in foreign trade" },
      h4: { num: "2002", label: "Founded CargoNet" }
    },
    trajectory: {
      tag: "My Career",
      title: "Professional ",
      titleHighlight: "timeline",
      subtitle: "Every milestone in this journey has been built with dedication, global vision, and passion for international logistics.",
      items: [
        { year: "February 1, 1990", title: "Start in Foreign Trade", desc: "I took my first formal steps in the world of international trade. The beginning of a vocation that would define my professional life." },
        { year: "January, 1999", title: "Founded Connexion Transportes Internacionales S.A.", desc: "I took the big entrepreneurial leap by creating my own international transport company in Argentina, laying the foundation for my career as a businessman." },
        { year: "March 20, 2002", title: "Launched CargoNet Argentina", desc: "During the Argentine crisis, I spotted an opportunity: the traffic between USA and Argentina was growing rapidly. Thus CargoNet was born, initially focused on the trade route with the United States." },
        { year: "2005", title: "CargoNet USA Opening", desc: "I expanded operations by opening the official office in the United States. A strategic step to directly manage the growing volume of cargo between both countries." },
        { year: "2009", title: "CargoNet Brazil", desc: "I opened the Brazilian subsidiary, completing the Argentina-USA-Brazil logistics triangle. I also ran commercial campaigns in Colombia and Peru to develop regional exports." },
        { year: "2011 - 2016", title: "Living in Miami", desc: "I moved to Miami to develop the local office. In 5 years I not only consolidated existing operations but also sought new agents in Latin America, Central America, Europe, and Asia." },
        { year: "2016 - 2019", title: "Palma de Mallorca, Spain", desc: "I accepted a logistics challenge on the island. What would be one year turned into three, where I deepened my knowledge of European logistics and strengthened the agent network in Europe and Asia." },
        { year: "2012 - 2015", title: "Global Expansion: Singapore & USA Trading", desc: "I opened a trading company in Singapore (2015) and another in the USA (2012), diversifying operations and creating new trade routes. I also started a project in Africa." },
        { year: "Present", title: "CargoNet Group & Media Presence", desc: "Today CargoNet Group offers comprehensive services: multimodal transport, strategic supply chain consulting, supplier sourcing, and customs clearance. I am a columnist in Infobae and Radio Rivadavia, advocating for customs simplification and regional competitiveness." }
      ]
    },
    blog: {
      tag: "Blog",
      title: "Analysis & ",
      titleHighlight: "opinion",
      subtitle: "Reflections on international logistics, foreign trade, the Argentine economy, and the future of the global supply chain.",
      readMore: "Read more →",
      backToBlog: "← Back to Blog",
      posts: [
        { date: "June 15, 2026", title: "Argentine logistics costs: an obstacle to regional competitiveness", desc: "In-depth analysis of how high local logistics costs affect Argentina's regional economies and why customs deregulation is urgent to compete in international markets.",
          slug: "costo-logistico-argentino",
          content: [
            "Argentina faces a paradox: it possesses extraordinary natural resources and world-class human capital, but its internal logistics costs undermine its competitiveness in global markets. According to industry studies, logistics costs in Argentina represent between 12% and 15% of the final product value, while in OECD countries this figure ranges between 6% and 8%.",
            "This gap is no small matter. For an exporting SME from Mendoza wanting to sell its wines in Shanghai, or an olive oil producer from San Juan aiming for New York, every percentage point counts. The question we must ask ourselves is: why are we logistically more expensive, and more importantly, what can we do to change this reality?",
            "<h2>The factors behind logistics overspending</h2>",
            "Multiple factors contribute to this equation. First, infrastructure. Roads in need of maintenance, ports with limited capacity, and an underutilized railway network. But there is an even more determining factor: bureaucratic and customs complexity.",
            "Border waiting times, redundant documentation processes, and lack of comprehensive digitalization generate delays that translate into costs. A container that spends three extra days in customs not only accumulates storage charges but delays the entire supply chain, affecting commitments with international buyers.",
            "<h2>The urgency of deregulation</h2>",
            "In recent years we have seen progress, but not enough. Customs deregulation is not an ideological issue; it is a competitive necessity. Countries like Chile, Uruguay and Peru have simplified their processes and are now more agile in international trade. Argentina cannot afford to be left behind.",
            "At CargoNet Group we have actively promoted process simplification. We have seen first-hand how eliminating duplicate requirements and implementing single foreign trade windows can reduce times by up to 40%.",
            "<h2>Impact on regional economies</h2>",
            "Regional economies are the most affected. A pear producer from Rio Negro or a furniture manufacturer from Buenos Aires province does not compete only with their product, but against an entire logistics system. When that system is inefficient, the product loses competitiveness before even reaching the market.",
            "The solution requires a comprehensive agenda that includes infrastructure investment, digitalization of customs processes, regulatory simplification, and fundamentally, permanent public-private dialogue. The private sector knows the problems; it needs to be heard and have clear, stable rules.",
            "Argentina has everything to be a relevant logistics player in the world. It just needs to clear the obstacles holding it back."
          ]
        },
        { date: "May 28, 2026", title: "Trust as currency in international trade", desc: "International markets trust people and their track record, not the government of the day. A reflection on the human factor in global business and building lasting relationships.",
          slug: "confianza-comercio-internacional",
          content: [
            "In my more than 35 years of career in international trade, one lesson has repeated itself over and over: business is done by people, not by countries or governments. This statement, which may sound like a cliche, is actually the key that explains why certain commercial relationships last decades, while others fade with the first political change.",
            "When I traveled to Italy every January for ten years, I was not just going to close deals. I was going to build relationships. To share a coffee, to meet my agents' families, to understand their cultures and their ways of doing business. That investment in human capital is what sustained our operations through economic crises, government changes and market fluctuations.",
            "<h2>Track record as a guarantee</h2>",
            "In international trade, your track record is your best business card. When an agent in Singapore decides to trust you to handle a high-value shipment, they are not evaluating the current Argentine government. They are evaluating your history, your reputation, your ability to deliver. People trust other people.",
            "I have seen companies lose million-dollar deals not for lack of technical capacity, but for not investing in building solid personal relationships. At the same time, I have seen agreements hold through the worst crises because there was real trust between the parties.",
            "<h2>The human factor in the digital age</h2>",
            "We live in an era of digitalization, artificial intelligence and automation. However, the human factor remains irreplaceable in international trade. An algorithm can optimize a logistics route, but it cannot replace trust built over years of relationship.",
            "Technology gives us extraordinary tools to be more efficient, but the core of international trade remains human. That is why at CargoNet Group we prioritize personalized attention, close follow-up, and above all, our word.",
            "<h2>Tips for building global trust</h2>",
            "For companies looking to expand internationally, I recommend: first, invest time in getting to know your business partners personally; second, be consistent in service quality; third, always keep your promises, even when it is difficult; and fourth, maintain transparent communication, especially when things do not go as planned.",
            "Trust is the most valuable currency in international trade. And like any currency, it must be earned day by day."
          ]
        },
        { date: "May 10, 2026", title: "Multimodal transport: the key to optimizing the supply chain", desc: "How integrating different modes of transport (maritime, air, land) can reduce costs, times and risks in international logistics. Strategies for SMEs that want to export.",
          slug: "transporte-multimodal",
          content: [
            "One of the questions I receive most from entrepreneurs wanting to start exporting is: what is the best way to send my product? The answer, like almost everything in logistics, is: it depends. And what works for one company may not be optimal for another. That is why multimodal transport has become one of the most powerful tools for optimizing supply chains.",
            "Multimodal transport consists of using two or more modes of transport (maritime, air, rail, road) under a single bill of lading or transport contract. This allows leveraging the advantages of each mode while minimizing their disadvantages.",
            "<h2>Advantages of the multimodal approach</h2>",
            "The main advantage is cost optimization. Maritime transport is economical but slow; air is fast but expensive; road offers flexibility but has distance limitations. By combining them, we can design a solution that balances cost, time and security for each specific shipment.",
            "For example, for exporting perishable food from Argentina to Europe, we can use refrigerated truck to the port of Buenos Aires, then ship to Rotterdam, and finally train or truck to the final destination. This combination can significantly reduce costs compared to air freight, while maintaining the cold chain intact.",
            "<h2>Strategies for exporting SMEs</h2>",
            "For SMEs taking their first steps in exporting, I recommend starting with simple multimodal operations and working with experienced logistics operators. Some practical tips:",
            "First, know your product's characteristics well. Weight, volume, perishability, unit value and regulatory requirements determine which transport modes are viable.",
            "Second, do not underestimate inventory-in-transit costs. A slower shipment may be cheaper in freight, but can generate immobilized capital and storage costs.",
            "Third, diversify routes and modes. Depending on a single mode or route is risky. Having alternatives gives you bargaining power and resilience against unforeseen events.",
            "<h2>The future is multimodal</h2>",
            "The global trend is toward increasingly integrated and flexible supply chains. Multimodal transport is not just a technical option; it is a competitive advantage. Companies that master this complexity will be better positioned to compete in the global market.",
            "At CargoNet Group we have developed tailor-made multimodal solutions for each client, because we know that in logistics, the perfect formula does not exist: it is built for each case."
          ]
        },
        { date: "April 22, 2026", title: "The dragon's route: how Latin American SMEs can trade with China", desc: "Practical guide on the trading service with China. Origin-destination customs coordination, supplier search and keys to take advantage of the opportunities of the Asian giant.",
          slug: "ruta-del-dragon-china",
          content: [
            "China is not just the world's workshop; it is Latin America's most important trading partner. In 2025, trade between China and Latin America exceeded 500 billion dollars. However, for many Latin American SMEs, the Chinese market remains an inaccessible giant, full of language, cultural and bureaucratic barriers.",
            "In this article I want to share the keys we have developed at CargoNet Group to help SMEs in the region successfully navigate trade with China. Because yes, it is possible, and the results can transform a business.",
            "<h2>First step: understanding the market</h2>",
            "China is not a homogeneous market. What works in Shanghai may not work in Chengdu. Regional differences, consumer preferences and local regulations vary enormously. Before thinking about exporting to China, you need to understand which China you want to reach.",
            "I recommend starting with a sector analysis: is there demand for my product? What is the local competition like? What are the phytosanitary, labeling and certification requirements? Many SMEs fail on their first attempt because they did not do this preparatory work.",
            "<h2>The importance of a local partner</h2>",
            "In China, personal relationships (guanxi) are fundamental. Having a reliable local partner is not a luxury; it is a necessity. This partner can help with translation, bureaucratic navigation, identifying relevant trade fairs, and above all, building trust with potential buyers.",
            "At CargoNet Group we have built a network of partners in major Chinese cities, allowing us to offer a comprehensive service from supplier search to origin-destination customs coordination.",
            "<h2>Door-to-door logistics</h2>",
            "One of the services our clients value most is comprehensive logistics coordination. From the moment goods leave the factory in Shenzhen until they arrive at the warehouse in Buenos Aires, we manage every link in the chain: domestic transport in China, export clearance, ocean freight, import clearance at destination and final delivery.",
            "The key lies in document management. A mistake in a certificate of origin or a customs declaration can mean days or weeks of delay. That is why we work with specialized teams both in China and in each destination country.",
            "<h2>Opportunities for SMEs</h2>",
            "The opportunities are enormous. Premium food products (wines, oils, meats), tourism services, agri-tech and industrial design are sectors where Latin American SMEs have much to offer. The Chinese dragon is not an opportunity devourer; it is a partner ready to negotiate. You just need to know how to approach."
          ]
        },
        { date: "April 5, 2026", title: "Customs deregulation: Argentina's pending debt", desc: "Analysis of the bureaucratic barriers that hold back Argentine foreign trade. Concrete proposals to simplify processes and gain competitiveness in the global market.",
          slug: "desregulacion-aduanera",
          content: [
            "Argentina has one of the most complex customs legislations in the world. With more than 30,000 tariff positions, multiple intervening agencies and processes requiring dozens of documents, doing foreign trade in Argentina is, frankly, an odyssey. And this is not an exaggeration: it is the reality we face every day in the sector.",
            "Customs deregulation is not an ideological whim. It is an urgent economic necessity. Every day a container is detained in customs due to unnecessary bureaucratic procedures, someone is losing money: the exporter who cannot fulfill their customer's order, the importer whose production is stopped, and ultimately, the country that loses competitiveness.",
            "<h2>The bottlenecks in the system</h2>",
            "I identify at least three major bottlenecks that need to be untied. The first is the multiplicity of intervening agencies. It is not uncommon for a single operation to require the intervention of AFIP, SENASA, INAL, the Trade Secretariat and Customs, each with its own systems, requirements and timelines.",
            "The second bottleneck is the lack of comprehensive digitalization. Although important steps have been taken with the Malvina system and the Single Window, there are still processes that require paper, in-person signatures and procedures that could be resolved in minutes but take days.",
            "The third is regulatory uncertainty. Rules change frequently, sometimes without proper dissemination or transition period. This makes planning a foreign trade operation an exercise in high complexity.",
            "<h2>Concrete proposals</h2>",
            "I propose three concrete measures that could transform Argentine foreign trade in the short term:",
            "First, implement an effective single window system that integrates all intervening agencies into a single digital platform with maximum response times.",
            "Second, establish a positive silence regime for customs authorizations: if the administration does not respond within the established period, the request is considered approved.",
            "Third, create permanent public-private dialogue tables so that the sector can alert about problems and propose solutions in real time.",
            "<h2>A call to action</h2>",
            "Customs deregulation is not a minor technical issue. It is a productive development policy. It is the most powerful tool we have so that Argentina's regional economies can compete on equal terms in the global market. As I have said on Infobae and Radio Rivadavia: simplifying is not less control, it is more intelligence. It is time to move from a culture of control to a culture of facilitation."
          ]
        },
        { date: "March 18, 2026", title: "Freight agent networks: the power of global connections", desc: "Since 2000 we have participated in different international freight agent networks. How these strategic alliances enhance global reach and generate business opportunities.",
          slug: "networks-agentes-carga",
          content: [
            "Since 2000, CargoNet Group has participated in different international freight agent networks. These networks are, in essence, global communities of logistics operators that collaborate with each other to offer worldwide coverage. And they have been, without doubt, one of the pillars of our international growth.",
            "Each year, these networks organize international meetings. They are not simple conferences; they are unique opportunities to personally meet the agents we work with throughout the year. In these meetings, bonds are strengthened, agreements are negotiated, and the trust I mentioned in previous articles is built.",
            "<h2>How networks work</h2>",
            "Imagine a client in Argentina needs to send a shipment to Kazakhstan. We do not have our own office there, but through the network we have a certified agent in Almaty who knows the local regulations, has the necessary infrastructure and is accountable for service quality. The network guarantees that this agent meets quality and solvency standards.",
            "This trust network is invaluable. It allows us to offer global coverage without needing our own offices in every country, while maintaining high quality standards. It is a demonstration of how collaboration can multiply individual capabilities.",
            "<h2>The value of travel and meetings</h2>",
            "As I mentioned in my career, I have traveled tirelessly to meet my agents in person. These trips are not expenses; they are investments. Meeting an agent face to face, sharing a dinner, understanding their culture and their way of working, builds a level of trust that no contract can replace.",
            "Networks also offer tangible benefits: guaranteed payment systems, conflict resolution, ongoing training and, increasingly, digital platforms that facilitate operation management between members.",
            "<h2>Tips for choosing a network</h2>",
            "For companies considering joining a freight agent network, I recommend evaluating: geographic coverage (that it has presence in the markets you are interested in), the quality of its members (rigorous selection processes), size and relevance (too large networks can be impersonal; too small, limited) and the type of meetings and training they offer.",
            "In an increasingly interconnected world, belonging to a global trust network is not an option. It is a competitive necessity."
          ]
        }
      ]
    },
    social: {
      tag: "Social Media",
      title: "Follow me on ",
      titleHighlight: "social media",
      subtitle: "Let's connect and keep building the future of international trade together."
    },
    contact: {
      tag: "Contact",
      title: "Let's talk about ",
      titleHighlight: "global logistics",
      desc: "Want to connect with me? I'm open to talk about international trade, strategic alliances, consulting, or simply share experiences about the fascinating world of global logistics.",
      btn: "Connect on LinkedIn"
    },
    vision: {
      tag: "The Vision",
      title: "A vision that ",
      titleHighlight: "transformed an industry",
      p1: 'After decades of accumulating experience at the heart of international trade, Germán Muchico reached a fundamental conclusion: the logistics and foreign trade market was fragmented, inefficient, and not adequately serving its clients. Traditional providers offered disjointed services: a carrier moving cargo without understanding strategy, a customs broker processing documents without integral vision, a port operator optimizing only their margins, a bank mediating transactions without commercial advice.',
      p2: 'The result: dismembered clients, hidden costs, unidentified risks, lost opportunities. Germán saw opportunity where others only saw a market. He understood that what was missing was a truly consultative partner—someone who would integrate the entire logistics chain under a single strategic logic. That was when he decided to found CargoNet Group, not as another carrier, but as an act of rebellion against the systemic inefficiency of the sector.'
    },
    pilares: {
      tag: "The Pillars",
      title: "The pillars of ",
      titleHighlight: "CargoNet Group",
      subtitle: "Three fundamental principles that guide every operation, every decision, and every business relationship.",
      pilar1: { title: "Trust as Currency", desc: 'After seeing how corruption plagued the sector, Germán established from day one that CargoNet Group would operate with absolute transparency. This was not a competitive weakness—it was a strength. Serious clients wanted to work with a trustworthy partner. ISO 37001 certification, explicit Code of Ethics, and confidential whistleblower line (+54 11 5638-4944).' },
      pilar2: { title: "Innovation as Compass", desc: 'Germán knew the sector was constantly evolving. CargoNet Group was built on the premise that innovation was not a luxury, but an obligation. From real-time monitoring to predictive analytics, technology is part of the operational DNA. Complacency kills organizations; constant innovation keeps them alive.' },
      pilar3: { title: "Operational Excellence", desc: 'After decades of seeing mediocrity, Germán simply would not tolerate it. Every CargoNet Group employee inherits this principle: there is no "good enough"—only excellence or failure. Excellence is not the goal, it is the starting point. It shows in every detail: delivery punctuality, documentation precision, advisory quality.' }
    },
    modelo: {
      tag: "Work Model",
      title: "Consultative ",
      titleHighlight: "model",
      subtitle: "A radical approach that set CargoNet Group apart from the competition: four phases that transform logistics into a true competitive advantage.",
      phases: [
        { title: "Deep Diagnosis", desc: 'The conversation begins with deep analysis, not transport proposals. Where are costs being lost? What are your regulatory risks? What optimization opportunities exist? This approach—radical for the industry—makes all the difference.' },
        { title: "Strategic Design", desc: 'Customized solutions for each client. No templates or generic solutions. Each organization receives a logistics architecture designed specifically for its realities, challenges and business objectives.' },
        { title: "Quality Execution", desc: 'Perfect coordination, rigorous monitoring and absolute accountability. When CargoNet Group commits to a result, it is a promise. Every link in the chain is managed with surgical precision.' },
        { title: "Continuous Optimization", desc: 'Every project is a process of constant improvement. Data, results, metrics: they are continuously analyzed for incremental optimization. In logistics there is no final destination, only permanent evolution.' }
      ]
    },
    infra: {
      tag: "Global Presence",
      title: "Infrastructure and ",
      titleHighlight: "global positioning",
      subtitle: "CargoNet Group was built as a multicontinental logistics network strategically positioned in the most important trade corridors in the world.",
      oficinas: [
        { title: "Argentina — Operational Base", desc: 'Head office in Puerto Madero, Buenos Aires (Olga Cossettini 1545). Ezeiza Airport office for real-time customs coordination. Regional offices in Mar del Plata and Mendoza for complete national coverage.' },
        { title: "United States — The Bridge to North America", desc: 'Cargo Net USA LLC in Miami, Florida (6735 NW 36th Street, STE 390). The main logistics hub from Latin America to the United States. Direct coordination with US regulators and service to the Latin America-US-Caribbean corridor.' },
        { title: "Brazil — The Largest Regional Market", desc: 'CargoNet Logistic Brasil in São Paulo (Iraí 438 CJ 71, Indianópolis). Strategic presence in the largest market in South America, capturing crucial bilateral trade flows for the region.' }
      ]
    },
    especializacion: {
      tag: "Specialization",
      title: "Specialization in ",
      titleHighlight: "complex cargo",
      p1: 'One of the clearest differentiators of CargoNet Group under Germán Muchico\'s leadership is its specialization in complex cargo—particularly the Perishables Division. Transporting perishable goods at multiple temperatures (fresh, frozen, ambient) requires: specialized infrastructure (temperature-controlled warehouses), regulatory expertise (INVIMA, FDA, SENASA), perfect coordination (a broken chain = lost merchandise) and knowledge of specific markets such as flowers, fruits, meats, dairy and seafood.',
      p2: 'Many competitors avoid these loads due to their complexity. Germán Muchico and CargoNet Group embraced them. Why? Because precisely where there is complexity, there is differentiation. And because clients willing to pay for truly specialized solutions exist. Today, the Perishables Division handles significant volumes from across the region to global markets, positioning CargoNet Group as the trusted logistics partner for premium operators who cannot afford to fail.'
    },
    diferenciadores: {
      tag: "Differentiators",
      title: "Why ",
      titleHighlight: "CargoNet Group stands out",
      subtitle: "In a sector full of competitors, these are the clear reasons that set us apart and position us as leaders.",
      items: [
        { title: "True Consulting", desc: "We are consultants who execute logistics solutions. We don't just move cargo, we transform supply chains. The difference is fundamental." },
        { title: "Accumulated Reputation", desc: "Germán Muchico's reputation opens doors, generates trust and attracts premium clients. It is CargoNet Group's most valuable asset, built over decades." },
        { title: "Multicontinental Infrastructure", desc: "Strategic positioning in Argentina, the United States and Brazil to serve the most dynamic trade corridors in the Americas with real local presence." },
        { title: "Specialization in Complexity", desc: "The Perishables Division handles cargo that competitors cannot accept. Where there is complexity, there is differentiation and added value." },
        { title: "Technological Innovation", desc: "Real-time monitoring, predictive analytics and process automation. Technology is not an accessory, it is part of CargoNet Group's operational core." },
        { title: "Unwavering Ethics", desc: "ISO 37001, explicit Code of Ethics, confidential whistleblower line. CargoNet Group operates with absolute transparency in a sector where corruption is common." }
      ]
    },
    quote: {
      text: "We transform challenges into opportunities. Together, we build global success.",
      author: "— Germán Muchico, Founder and CEO of CargoNet Group"
    },
    multimedia: {
      title: "Multimedia ",
      titleHighlight: "Gallery",
      subtitle: "Videos, interviews and visual content about international logistics, foreign trade and Germán Muchico's career.",
      videosTag: "Videos",
      videosTitle: "My ",
      videosTitleHighlight: "videos",
      videosSubtitle: "Interviews, talks and analysis on international logistics, foreign trade and the Argentine economic landscape.",
      video1Title: "Germán Muchico — International Logistics & Foreign Trade",
      video1Desc: "Analysis of the state of international trade and Argentina's role in the global logistics chain.",
      video2Title: "CargoNet Group — Comprehensive Logistics Solutions",
      video2Desc: "Presentation of CargoNet Group's services and strategic vision for regional foreign trade.",
      video3Title: "The Future of Logistics in Latin America",
      video3Desc: "Perspectives on supply chain evolution and opportunities for SMEs in global trade.",
      perfilesTag: "Profiles",
      perfilesTitle: "My ",
      perfilesTitleHighlight: "profiles",
      perfilesSubtitle: "Connect with me on my favorite platforms. I regularly post about logistics, foreign trade and economic analysis.",
      ctaTag: "More Content",
      ctaTitle: "Follow me on ",
      ctaTitleHighlight: "my networks",
      ctaSubtitle: "I regularly post about logistics, foreign trade and economic analysis. Don't miss it."
    },
    footer: 'Built with <i class="fas fa-heart heart"></i> and passion for global logistics'
  }
};
