---
slug: "/apuntes-ingeneria-requisito"
date: "2020-05-12"
title: "Apuntes de Ing. de Requisitos" 
tags: ['Requisitos', 'Apuntes']
excerpt: "Apuntes del Mg. de TI Universidad de Chile"
---

### Fases de la Ingeniería de Requisitos

* Elicitación
* Análisis y negociación
* Documentacion
* Verificación y Validation
* Administración de requisitos

### ¿Porque Ing. de Requisitos?

Las principales causes de los problemas en los proyectos es debido a una captura de requisitos inadecuada.

La Ing. de Requisitos puede fallar debido a que no se conocen correctamente los limites de los proyectos.

Otra razón es realizar Ing. de requisitos con una baja expertiz de dominio.

### Es fundamental entender el contexto de la Ing. de Requisitos

* Etapa del proceso de requisitos
  1) Pre-proyecto
  2) Proyecto
  3) Post-proyecto
* El problema y su contexto
* Expertiz en el dominio de negocio
* Claridad y pertinencia del requisito
* Recursos disponibles

### Problema Central

El problema se reduce a cuanta certeza/incertidumbre tengo sobre el objetivo y el alcance del producto a desarrollar (puede que uno solo visualice la punta del iceberg)

Para entender que producto desarrollar se debe:
1) Entedender el Problema y su Contexto (Ayuda la expertiz de mia y del cliente)
2) Definir el Objetivo y Alcance del Producto (revisión de arquitecturas existentes)
3) Definir el producto de manera detallada

Se debe dividir el dominio del problema v/s el dominio de la solución. Ver que cosas se realizan hoy en función del problema  y derivar como se puede soluciónar (como será la funcionalidad/proceso a futuro)

Por ende la Ing. de Requisitos tiene dos contextos, el dominio del problema (donde el cliente ayuda al proveedor a definirlo) y el dominio de la solución (donde el proveedor define la solución y el cliente la aprueba)

### Categoria de Requisitos

Sobre el dominio del problema podemos encontrar los Requisitos de Usuario (RU) (definen la especificación de la solución desde el punto de vista del negocio o cliente) y los Requisitos de Software (RS) (definen los requisitos de la solución).

Se desprenden 3 documentos clave durante la def. de requisitos:
1) Documento de Requisitos de negocio : ve la visión y alcance del proyecto
2) Documento de Requisitos de Usuario: revisa los requisitos sobre el dominio del problema
3) Documento de requisitos de Software: son los requisitos del dominio de la solución

La prueba para identificar que tan cercanos son los requisitos del cliente frente a la solución entregada se llama **prueba de la blancura** (match entre requisitos y la implementación del producto)

### Tipos de Requisitos de Usuario

Son la necesidad u oportunidad del cliente, por lo general gruesos (no detallados) y ambiguos.

Los tipos de requisitos de usuario son:
* De Capacidad (funcionales): requeridos por el usuario para resolver un problema o determinar un objetivo
* De Calidad: Atributo del software para funcionar o garantizar su normal funcionamiento. Estos son transversales a todo el software
* De Restricciones: restriccipones sobre como resolver un problema o lograr un objetivo

En las primeras entrevistas (pre-selling) es importante notar el *core* de los requisitos y evitar trabajar al detalle (granularidad). Más adelante pueden *"desambiguarse"*

### Requisitos de Software

Son los requisitos de la solución y no pueden ser ambiguos. Se derivan de los Requisitos de Usuario. Hay algunos Requisitos de Software que no se mapean a un RU.

Tipos de Requisitos de Software (según el estándar de la ESA):
* Requisitos funcionales.
* Requisitos de interfaces.
* Requisitos operacionales.
* Requisitos de recursos.
* Requisitos de verificación.
* Requisitos de usabilidad.
* Requisitos de mantención.
* Requisitos de transportabilidad.
* Requisitos de confiabilidad.
* Requisitos de rendimiento.
* Requisitos de documentación.
* Requisitos de escalabilidad.
* Requisitos de tests de aceptación.
* Requisitos de seguridad de la información.
* Requisitos de calidad.
* Requisitos de seguridad de la operación

Los requisitos de calidad son transversales y pueden afectar los unos a los otros de manera positiva o negativa. Debén ser detectados de manera temprana ya que son transversales y pueden afectar a todo el desarrollo.

Los requisitos clave de calidad para el usuario son:
* Usabilidad
* Atractivo
* Utilidad

### Matriz de Trazado

La matriz de trazado es una herramienta que crea una matriz con los RU vs los RS para ver como cada RS se mapea en los RU

Si la relación RU / RS es cercana a 1/1 significa que los RU son demasiado granulares

### Documento de Requisitos

Un documento de requisitos suele tener:

1) Introducción : se habla del proposito, alcance, definiciones importantes y referencias. Entrega el conocimiento para quien lea el documento pueda entenderlo sin problemas
2) Aspectos a abordar: trata sobre el contexto, problema, los tipos de usuarios directos e indirectos
3) Requisitos de usuario: requisitos funcionales, de calidad y restricción
4) Requisitos de software: requisitos funcionales, de calidad categorizados y de restricción categorizados
5) Matriz de Trazado

### Formato de Requisitos Funcionales y de Restricción

* ID
* Nombre corto
* Descripción
* Criticidad
* Prioridad
* Usuarios
* Estado
* Fuente

### Formato de Requisitos de Calidad

* ID
* Nombre corto
* Escala (qué es lo que se mide)
* Prueba (cómo se evalúa)
* Valor Actual
* Peor valor aceptable
* Valor planificado

### Cómo establecer el norte del proceso de IR

Se realizan 3 fases:
#### 1) Identificar el problema (u oportunidad)

Se puede utilizar un analisis de arbol identificando los distintos efectos y causas del problema para tener una visión global.

Se puede utilizar un analisis de raiz para identificar la raiz del problema y no resolver un problema sintoma.

Los proyectos mal encaminados suelen suceder porque no se apunta a la causa raiz del problema.

#### 2) Identificar el contexto del problema

El contexto debe ser identificado, entendido y delimitado. Algunas de sus caracteristicas son:

* Características de la organización cliente.
* Nivel de urgencia/riesgo del proyecto.
* Nivel de respaldo al proyecto (incluye disponibilidad de recursos: $ y HH).
* Factores normativos (legales) y de mercado.
* Capacidad de abordarlo en este momento.
* Capacidad de adopción de tecnología.

#### 3) Indentificar el producto a desarrollar

Se subdivide en 3 pasos:

##### 1) Definir el Tipo de producto

La idea es mitigar el problema en el contexto con el producto.
Se debe definir el nivel de certeza que tengo sobre el producto (cono de la incertidumbre). Mientras más certeza tenga sobre mi producto menor es la posibilidad de error en la solución.

Las actividades de aclaración (captura de requisitos) son colaborativas y pueden ser un ciclo de 3 fases:
  * Descubrir una solución
  * Especificar la solución
  * Evaluar la solución

##### 2) Definir y Acordar el objetivo y alcance del producto (scoping)

Se consensua la solución con el cliente a través de las consecutivas iteraciones sobre actividades de aclaración.

En está etapa es clave definir la arquitectura del producto. Cuales son sus componentes mandatorios, opcionales y las alternativas.

##### 3) Definir los requisitos de producto (RS)

Se definen los requisitos de software de manera no ambigua. En este punto el proceso es más iterativo incremental que colaborativo, lo que no implica que el cliente no deba ser parte del proceso (es quien valida el producto)

Si el proceso de IR fue abordado correctamente en las primeras etapas el costo de corregir un error es mucho menor que en etapas futuras (1x -> 68-110x)

