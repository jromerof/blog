---
slug: "/apuntes-introduccion-ingeneria-software"
date: "2018-07-21"
title: "Apuntes de Introducción a la Ingenería de Software"
tags: ["Software", "Apuntes"]
excerpt: "Apuntes del Mg. de TI Universidad de Chile"
---

### Ingeniería de Software

#### Qué es?

_"La Ing. de software es la disciplina que aplica las Ciencias de la Computacion (CS) y sus productos tecnológicos a la construcción de los programas, modelos, documentos y datos que constituyen el sistema de software que resuelve una necesidad específica, en presencia de recursos limitados."_

La ing. de software abarca tanto el producto de software como el proceso de desarrollo. Estó incluye los roles, artefactos, táreas y el orden en el tiempo de estas.

#### Por qué?

Al día de hoy gran parte de la economía y sociedad depende de software, además de que la complejidad del software cada vez se va haciendo mayor.
Al aumentar la complejidad y la dependencia tambien aumenta el foco en los costos de desarrollo y mantenimiento. 

El desafio de la Ing. de Software es que el software pueda ser mantenible y actualizable (herencia), que la construcción sea heterogenea, es decir flexible y de facil adecuación a distintas arquitecturas, que la entrega del software sea rapida (sin comprometer calidad), y que el software construido sea confiable.

#### Para qué?

* La Ing. de Software es necesaria para construir sistemas grandes, complejos y de calidad. 
* Permite definir los objetivos de un sistema, y su impacto.
* Para tener técnicas, métodos y herramientas para la administración, organización y ejecución de procesos de construcción y mantenimiento de software.

### Calidad de Software

La Ing. de Software se preocupa de la construcción del software y que este satisfaga ciertos atributos de calidad.

Estos atributos de calidad tienen las siguientes clasificaciones:
* Atributos internos y externos : Los atributos externos son visibles por el usuario y el cliente, los internos son visibles por el equipo de desarrollo. Los atributos internos afectan los externos.
* Atributos de producto y proceso: Los atributos aplicadlos al proceso afectan la calidad del producto.

#### Atributos de Calidad de producto

* Correctitud: El sistema se comporta de acuerdo a lo especificado (req. de software se comprueban con testing)
* Confiabilidad: El sistema se comporta de acuerdo a lo esperado por el usuario (es relativo)
* Robustez: El software se comporta de manera razonable frente a situaciones no anticipadas (fallos o errores no descritos en los rquisitos)
* Rendimiento: El software usa los recursos de manera economíca (hardware o tiempo)
* Usabilidad: Que tan facil es de usar un software. Es dificil de evaluar debido a que es subjetiva.
* Verificabilidad: Que tan verificables son las propiedades del software.
* Reusabilidad: Que tan reusable son  algunas partes del software a bajo costo
* Portabilidad: Que el software pueda ejecutarse en distintos ambientes (ej. browsers, versiones de os).
* Interoperabilidad: Que tan capaz es el software de coexistir y coperar con  otros sistemas.
* Acoplamiento: Medida de interdependencia entre distintos componentes.
* Cohesión: La medida de relación entre las partes de un componente.
* Comprensibilidad: Que tan comprensible es el software.
* Mantenibilidad: Que tan posible es mantener el sistema. Si puede corregir sus defectos es reparable y si su funcionalidad puede cambiar es evolucionable.

#### Atributos de Calidad del proceso

* Productividad: Que el proceso de desarrollo sea eficiente.
* A Tiempo: Que el proceso de desarrollo obtenga el producto dentro del tiempo planificado.
* Visibilidad: Que se pueda conocer el estado de avance del proyecto.

### Código de Ética

La Ing. de Software y los Ingenieros se deben a un marco legal y social que implica una responsabilidad ética. Las áreas de responsabilidad de está ética son:

* Confidencialidad: Respetar la confianza cliente-empleador.
* Competencia: No aceptar trabajos fuera de las competencias propias y ser directo con las falencias.
* Propiedad Intelectual: Asegurar que la propiedad intelectual de los clientes y empleadores es respetada.
* Mal uso de tecnologías: No utilizar las tecnologías con despropositos

La ACM/IEEE propone ocho principios éticos:

1) Interés Público: Consitente con el interes público
2) Cliente y empleador: Reflejar los intereses del cliente y el empleador, tambien en consistencia con el interes público
3) Producto: El producto y sus modificacions deben tener los mejore estandares posibles limitados a los recursos disponibles
4) Juicio profesional: El juicio personal debe ser distinto al profesional
5) Gestión: Los gerentes y lideres deben tener un acercamiento ético para enseñar con el ejemplo
6) Profesión: Se debe progresar la integridad y reputación de la profesión en forma consistente con el interés público
7) Colegas: Se debe ser justo y solidario con los colegas
8) Personal: Se debe mantener al día con la profesión

### Principios de la Ingenería de Software

Los principios de la Ingeniería de Software son las ideas o criterios de como deben ser las cosas. Subyacen a las metodologías (métodos y técnicas) y a las herramientas.

Los principios son los siguientes:
#### Rigor y Formalidad 

Su fin es llevar el caos a la formalidad, mediante pasos definidos, precisos y coherentes. Se puede aplicar además a las herramientas.
El grado de formalidad dependerá de la necesidad de la especificación (hacia quien va orientado, que crítico e el producto, el tiempo de desarrollo). Afecta positivamente a la confiabilidad, verificabilidad, mantenibilidad, reusabilidad, portabilidad, comprensibilidad e interoperabilidad 

#### Separación de Interes 

Implica abordar los problemas 1 aspecto a la vez. Hay que tener en cuenta que no todos los aspectos pueden ser separados (por ej la relación de desarrollo-dinero-personal).

El criterio de separación determina como se abordará el proyecto. Puede ser por tiempo, cualidad, vista y partes.

Aglunas de las consecuencias de separar demásiado los problemas es perder de vista un optimo global, la dificultad de integrar distintos enfoques de desarrollo, y la cantidad de gente en las distintas etapas.

#### Modularidad

Dividir la complejidad en partes llamadas modulos. Con está división se logra estandarizar, reusar y encapsular.

Tiene como objetivo descomponer un problema en grandes bloques, componer sistemas complejos en báse a elementos más simples y aumentar la comprensiblidad de los modulos.

Una buena modularidad se alcanza con alta cohesion y bajo acomplamiento.

Hay dos fases de trabajo. Modificar los modulos de manera interna e independiente (nivel de módulos) y trabajar en la interacción de modulos (nivel de sistema). Dependiendo del orden de estás fases el desarrollo puede ser Bottom-up (1-2) o Top-down (2-1)

#### Abstracción

El principio de abstracción se basa en enfocarse en lo escencial e ignorar los detalles no importante. Lo abstraido depende del proposito de la abstracción. Es sobre lo que voy a trabajar. Dependiendo de la necesidad se genera un artefacto que abstrae lo no necesario para el interlocutor (ej. manual de usuario, estimación de costo).

#### Generalidad

Descubrir los problemas más generales al evaluar los problemas, dado que por existen problemas que se repiten n veces buscar una solución para resolver los n casos.

Puede afectar la eficiencia, pero es escencial para desarrollar paquetes comercializables

#### Anticipación al Cambio

Se enfoca en generar software mantenible y modificable, desde la etapa de diseño. Busca asilar los lugares con probabilidad de cambio. Es un principio exclusivo del software ya que os requisitos de usuario varian tanto antes como despues de la implementación.

Esté principio promueve la reutilización y requiere una gestión de configuración (tratamiento de versiones) en el software.

Dentro del proceso de desarrollo tambien se puede realizar anticipación, ej al cambio de personal, costos de mantención, construcción de reutilizables.

#### Incrementalidad

Agregar incrementos a medida que avanza el proceso de desarrollo. Se desarrolla una funcionalidad o un subconjunto de está, se revisa para tener feedback y los comentarios obtenidos se utilizan para el proximo incremento.

Es ideal cuando los requisitos no son estables o claros, permite evaluar los distintos puntos de cambio.

### Disciplinas del Proceso de Desarrollo

#### Requisitos

#### Diseño

#### Implementación

#### Instalación y Testing

#### Gestión de Proyecto

#### Gestión de Riesgos

#### Gestión de la Configuración

### Ciclos de Vida

Un ciclo de vida de sftware es la organización en el tiempo de la construcción de esté.

#### Codificar y Corregir

Primer ciclo de vida creado, es un proceso no planificado ni controlado donde se codifica hasta llegar a la solución. Por lo general se utiliza apra software pequeño y bien entendido (proyectos personales, scripts de automatización no criticos, etc.)

Al crecer la industria de software, está se vio en la necesida de controlar el desarrollo a nivel de costo, recursos humanos, etc. debido a esa necesidad nacen los procesos estructurados.

#### Cascada

Ciclo de vida estructurado, donde el proceso es una cascada de fases. El producto de cada fase es la entrada del siguiente. Es un modelo document-driven (guiado por documentos).

Las fases de casacada son:
* Estudio de Factibilidad : Identifica las opciones de solucion, se analizan costos, se evalua si el proyecto se justifica
* Especificación de Requisitos
* Diseño
* Codificación
* Integración y Pruebas
* Instalación
* Mantenimiento : Se resuelven los problemas de SW despues de la instalación

Las actividades de Gestión se realizan de manera paralela en un proyecto de Cascada.

Cascada tiene varaciones en su fases, por ej podría no realizarse la fase de factibilidad, o añadirse fases extras como la gestión del cambio

Las caracteristicas de cascada son :

* Fases claras y asociadas a cada disciplina de Ing. de SW
* Eficiente y efectivo cuando se conocen las necesidades de antemano, los metodos de diseño y desarrollo son conocidos y se esperan poco cambios.
* Es un proceso Lineal
* Es un proceso Rígido
* Es un proceso mon´olítico (todo el sistema de una vez)
* Es dificil acomodar cambios a los requisitos

Cascada tiene una versión iterativa donde en cada fase se realiza retroalimentación

#### Do it Twice

Proceso de dos cascadas. Primero se genera un prototipo desechable para disminuir la incertidumbre y luego una cascada para realizar el producto final. Sigue siendo un proceso monolitico

#### Evolutivo

Ciclo de vida idea para analisis exploratorios. Buscan entregar algo útil a cliente, verificar el valor agregado y luego ajustar la proxima entrega. Sus entregas son autodefinidas. Si no es un proceso rigoroso termina en Codificar y Corregir

#### Incremental

Modelo que entrega incrementos de un producto operacional a medida en que se desarrolla el software. No necesariamente son entregas si no que tambien puede ser manuales, documentación.

Algunas variaciones son Implementación incremental (cascada hasta implementación), e Integración incremental (se integran los modulos de manera incremental)

#### Iterativo Incremental

El proyecto se define en iteraciones donde cada iteración realiza las mismas actividades y tiene como salida un incremento al software.
Los incrementos son organizados por nivel de riesgo. Se atacan los mayores riesgos al comienzo de el ciclo de iteraciones.

Algunas de sus caracteristicas son:
* Los riesgos críticos se resuelven antes de hacer grandes inversiones
* Permite la retroalimentación de los usuarios
* Realiza pruebas e integración continua
* Aumenta el ritmo del proyecto con hitos a corto plazo
* Permite la facil medición del avance con las implementaciones
* Permite entregas a partir de implementaciones parciales
* Puede que el foco de arquitectura se pierda en el camino debido al pensar en solo un incremento

### Procesos de Desarrollo

El proceso de desarrollo es la combinación entre las disciplinas y los ciclos de vida de software.

#### Procesos Pesados V/S Livianos

Procesos Pesados:
* Reglas, técnicos y métodos
* Requiere entrenamiento para seguirlo adecuadamente
* Reglas para abordar problemas posibles (robustez)
* Muchas herramientas de apoyo (amigabilidad)
* Se pueden dejar detalles de lado para mantenerse a tiempo
* El desarrollo se puede descontrolar ante desvíos en la planificación

Procesos Livianos:
* Pequeña cantidad de reglas y prácticas
* Facil de entender y seguir
* Cuenta con pocas practicas (comprensibilidad)
* Poco burocratico
* Limita las exigencias
* El objetivo es solo botener software confiable a un precio y tiempo razonable
* Es un pequeño conjunto de practicas obtenidas de la observación

Dos ejemplos de procesos de desarrollo son RUP y XP

#### RUP (Rationale unified process)

Proceso iterativo incremental que es una serie de cascadas dirigidas por casos de uso. Se centra en la arquitectura y hace uso extensivo de UML. Define 4 fases Concepción (ambito del proyecto), elaboración (plan de proyecto), construcción (desarrollo) y transición (implementación).

#### XP (Extreme programming)

Enfoque disciplinado, enfocado en el trabajo en equipo (incluye al cliente). Elimina los procesos de poco valor y exagera los de mayor valor. Su enfasis está en la satisfacción de usuario. Cada iteración cuenta con planificación, codificación, y verificación y validación. Se aplica a ambientes con requisitos cambiantes, alto riesgo y equipos pequeños de desarrollo