---
tipo: platform
title: "Selenium Cucumber Framework Java"
description: "Plataforma automatizada en Java, con ExtentReport, Selenium, TestNG. Se incorpora Cucumber para el manejo de escenarios."
author: "Leonardo Pérez"
hero_image: "./cucumber.jpg"
---

# INDICE<a name="indice"></a>

1. [<span className="text-white ">SeleniumAndCucumberFramework</span>](#seleniumandcucumberframework)
2. [<span style="color: white">Cucumber</span>](#cucumber)
3. [<span style="color: white">Características</span>](#características)
4. [<span style="color: white">Importante</span>](#importante)
5. [<span style="color: white">Estructura del proyecto</span>](#estructuradelproyecto)
6. [<span style="color: white">Configuraciones</span>](#configuraciones)
7. [<span style="color: white">Uso de ExtentReport</span>](#usodeextentreport)
8. [<span style="color: white">POM</span>](#pom)
9. [<span style="color: white">Ejecución de pruebas</span>](#ejecuciondepruebas)
10. [<span style="color: white">Links de interés</span>](#linksdeinteres)

---

# 🤖 SeleniumAndCucumberFramework<a name="seleniumandcucumberframework"></a> [🔝](#indice)

Plataforma automatizada en Java, con ExtentReport, Selenium, TestNG. Se incorpora Cucumber para el manejo de escenarios.
Con esta plataforma podemos ejecutar pruebas utilizando TestNG y como nueva funcionalidad también podemos adaptar pruebas existentes o futuras con Cucumber.

# 🥒 Cucumber<a name="cucumber"></a> [🔝](#indice)

- Cucumber es una herramienta orientada a BDD (desarrollo impulsado por comportamiento).
- Utiliza el lenguaje Gherkin.
- Nos permite mantener una documentación viva, la cual se puede usar en la plataforma automatizada.
- Ayuda al entendimiento entre el automatizador y el cliente.
- [Sitio oficial](https://cucumber.io/)
- [Gherkin](https://cucumber.io/docs/gherkin/)

# ✔️ Características<a name="características"></a> [🔝](#indice)

- Soporte para varios drivers.
- Ejecución de tests con TestNG.
- Ejecución de tests con Cucumber.
- Posibilidad de configurar rutas para guardar los reportes con la clase “_ExtentManager_”.
- Posibilidad de configurar rutas para archivos properties con la clase “_PropertyReader_”.
- Todas las clase se encuentran documentadas, esto nos brinda la posibilidad de ejecutar “_Javadoc Generator…/Generador Javadoc.._”

# ❗ Importante<a name="importante"></a> [🔝](#indice)

Para lograr utilizar esta plataforma considere leer las configuraciones en esta [sección](#configuraciones).

Si lo desea puede ver esta [demo](https://github.com/leoperez1993/SeleniumAndCucumberFramework/blob/master/README.md#demo).

# 📂 Estructura del proyecto<a name="estructuradelproyecto"></a> [🔝](#indice)

![Imagen1](https://user-images.githubusercontent.com/56354251/128389308-70abaa65-8cc3-49be-aeab-27834c68b70a.png)

**Secciones de interés**

- feature
- pages
- steps
- tests
- utils
- src/test/resources
  - drivers
  - extent.properties
  - parametros.properties
- report-cucumber
- Screenshots
- target
- pom.xml

## feature

Paquete que contiene las feature utilizadas por Cucumber.

![image](https://user-images.githubusercontent.com/56354251/128390833-68842b86-3d70-4bc9-87c1-7af6854448a8.png)

## pages

Paquete que contiene las Page Object.

![image](https://user-images.githubusercontent.com/56354251/128391127-43f26e69-75bb-45b5-8821-553d80e41c11.png)

## steps

Paquete que contiene 2 clases básicas para la ejecución de los escenarios.

## RunStep

Esta clase permite configurar las features, los stepts y los plugins. Como ejemplo de plugin para este proyecto, se puede nombrar a [ExtentReport](https://www.extentreports.com/).

![image](https://user-images.githubusercontent.com/56354251/128391332-caa949f5-03ae-4c04-8a54-b345c5b1ad30.png)

## SearchSteps

En esta clase incluimos las definiciones para cada step.

![image](https://user-images.githubusercontent.com/56354251/128391365-2deeacd6-5159-4531-8f57-605fd25d1abc.png)

## tests

Paquete que contiene un ejemplo de pruebas ejecutadas con TestNG.

![image](https://user-images.githubusercontent.com/56354251/128391414-27193c9a-dce5-46cc-b964-b8556024d516.png)

## utils

En este paquete se agregan clases utils para las pruebas y proyecto.

![image](https://user-images.githubusercontent.com/56354251/128391469-87c8da95-df2b-464a-80d1-fcd461b1a44f.png)

**ExtentManager**

Clase encargada de manipular y configurar el reporte de las pruebas.

**PropertyReader**

Clase encargada de manipular y configurar los archivos .properties.

**Utils**

Clase encargada de brindar funciones para asistir a los test o steps (ej.: _getScreenshot()_, _chooseDriver()_).

## src/test/resources

Incluye el o los drivers de los navegadores utilizados por los tests o steps de los escenarios. También se incluyen archivos de parametrización.

![image](https://user-images.githubusercontent.com/56354251/128391602-25b7df83-0562-4737-85a3-affbf8ac9831.png)

## report-cucumber

En esta carpeta se guardan los reportes generados automáticamente por Cucumber, posterior a cada ejecución. Los nuevos reportes se guardarán en carpetas las cuales respetan el formato “_SparkReport fecha hora_”.

![image](https://user-images.githubusercontent.com/56354251/128391880-83101861-c965-4553-8a27-df497257efc5.png)

## Screenshots

Carpeta utilizada para guardar todas las capturas generadas por los test.

## target

En esta carpeta se guarda de forma automática los reportes generados por los test.

![image](https://user-images.githubusercontent.com/56354251/128391994-44948a74-0ab5-49e1-86f4-c14f54732c94.png)

## pom.xml

Tiene configurado todas las dependencias necesarias para la ejecución del proyecto.

# 🔧 Configuraciones<a name="configuraciones"></a> [🔝](#indice)

El diseño de esta plataforma fue hecho utilizando Eclipse, por lo que se mencionaran las configuraciones hechas para el mismo. Como dato importante se destaca que las tecnologías nombradas previamente se integran sin problemas con el IDE IntelliJ IDEA (con su respectiva configuración).

## Plugin

### TestNG

Para poder tener acceso a la ejecución de test o steps es necesario instalar el plugin de TestNG, este nos brinda una interfaz de ejecución.

### Cucumber

Este plugin brinda las herramientas necesarias para poder manipular las features.

### Como instalar plugin

1. Abrir Eclipse
2. Click en pestaña _Help/Ayuda_
3. Click en _Eclipse Marketplace…_

![image](https://user-images.githubusercontent.com/56354251/128392295-2bf19e3a-a716-4c5a-8772-93c63bf02c17.png)

4. Buscar plugin “_testng_”

![image](https://user-images.githubusercontent.com/56354251/128392374-c9b68343-b3c9-4142-af46-f17b5421460d.png)

## Convertir a proyecto Cucumber

Para lograr un uso correcto y manipular de forma exitosa las features, se debe convertir el proyecto, esto le de nuevas características, las cuales permite una total compatibilidad con las tecnologías que manipula Cucumber.

Tanto las tecnologías utilizadas por Cucumber como la conversión del proyecto nos es indiferente al momento de diseñar y ejecutar escenarios.

1. Click derecho sobre el proyecto
2. Click en _Set up/Configurar_
3. Click en _Conver to Cucumber Project…_

![image](https://user-images.githubusercontent.com/56354251/128392448-2c213566-3e03-43d7-b6f5-0a8bcf840544.png)

## Driver

La Plataforma cuenta con **chromedriver versión 91.0.4472.101**, el cual soporte el **navegador Chrome versión 92**.

Es importante verificar esta compatibilidad a la hora de utilizar la plataforma, ya que la versión de Chrome avanza constantemente. Deberemos descargar el driver correspondiente para la versión de navegador que se tenga en el momento.

- [Chrome driver](https://chromedriver.chromium.org/home)

- [Firefox driver](https://github.com/mozilla/geckodriver/releases)

### Agregar otro driver

1. Agregamos driver en carpeta “_driver_”

![image](https://user-images.githubusercontent.com/56354251/128392679-c430d84e-8d8b-42a2-835c-f1dde90f85e8.png)

2. Configuramos archivo “_parametros.properties_”

![image](https://user-images.githubusercontent.com/56354251/128392720-9a9dda60-524b-48af-ac08-35be38709a9b.png)

**IMPORTANTE:** Tener en cuenta que la descarga del driver tiene un nombre por defecto ya implantado en la comunidad. Si cambiamos el nombre del driver, este deberá ser configurado en la función “_Utils.chooseDriver()_”.

![image](https://user-images.githubusercontent.com/56354251/128396453-df6bf6a3-a1e3-4c0d-b94a-178e55c71939.png)

# 📄 Uso de ExtentReport<a name="usodeextentreport"></a> [🔝](#indice)

## TestNG

1. Antes de comenzar con los tests, debemos declarar las variables _ExtentReports_ y _ExtentTest_.
2. Generamos una instancia para comenzar con la configuración del reporte.

![image](https://user-images.githubusercontent.com/56354251/128396561-69f277c4-23bc-477c-b6e4-da20c6f49c70.png)

3. En cada test creamos nueva instancia para agregar al reporte. Podemos hacer uso de los logs, para generar un registro de los pasos del test.

![image](https://user-images.githubusercontent.com/56354251/128396626-cce2bae9-d502-4b9a-aa4f-ba983779aab6.png)

4. Posterior a la ejecución de cada test, se evalúa el estado y se registra como ultimo valor para el reporte. **IMPORTANTE:** hacer _flush()_ para agregar todo los datos generados al reporte.

![image](https://user-images.githubusercontent.com/56354251/128396696-3cddb402-3d58-41cd-9df2-0b8a64e35c6c.png)

## Cucumber

Para el caso de Cucumber, se integra el plugin el cual es brindado por [ExtentReport](https://www.extentreports.com/docs/versions/5/java/plugins.html).

Para lograr una correcta configuración del reporte se puede consultar el siguiente [Artículo](http://ghchirp.tech/2098/).

Esta plataforma utiliza la siguiente dependencia para la descarga de dicho plugin.

```
<dependency>
    <groupId>tech.grasshopper</groupId>
    <artifactId>extentreports-cucumber6-adapter</artifactId>
    <version>2.8.3</version>
</dependency>
```

### CucumberOptions

Se agrega el plugin como se muestra en la siguiente captura.

![image](https://user-images.githubusercontent.com/56354251/128398929-054a75f5-fae0-402e-b9b8-4f9ffa5678e1.png)

Con esta configuración, se logra una integración automática con ExtentReport, y como resultado se obtiene un registro del estado de cada step.

![image](https://user-images.githubusercontent.com/56354251/128398962-a33633b2-c0f7-48fd-ac42-3162810f387b.png)

### Agregar screenshot

Para agregar una screenshot se utiliza la clase “Scenario” la cual contiene el método “attach” para generar y agregar capturas al reporte.

![image](https://user-images.githubusercontent.com/56354251/128399024-d37ec2e8-57b2-45ac-825e-4c2717648d04.png)

### Importante

Cucumber genera una screenshot y la guarda codificada en base64.

- **Ventaja:** esta acción brinda la posibilidad de compartir el reporte sin tener en cuenta una segunda carpeta de imágenes.
- **Desventaja:** puede generar un reporte muy pesado y poco performante.

Si los tests no se encuentran integrados con Cucumber, el reporte generado cuenta con dos carpetas.

- Carpeta contenedora del reporte.html.
- Carpeta contenedora de screenshot.

# 🗄️ POM<a name="pom"></a> [🔝](#indice)

## Properties

En el POM utilizamos la sección “properties” para tener un acceso practico a las versiones de los distintos frameworks y plugins.

![image](https://user-images.githubusercontent.com/56354251/128399462-2123f4eb-1566-4371-ba61-3ef55b9b9473.png)

## Dependencies

En las dependencias se colocan los frameworks y plugins necesarios para la correcta ejecución de la plataforma.

![image](https://user-images.githubusercontent.com/56354251/128399509-f6585280-1eb2-42fb-9271-781125338ee0.png)

# ▶️ Ejecución de pruebas<a name="ejecuciondepruebas"></a> [🔝](#indice)

A continuación, se brinda un método genérico para la ejecución de los tests, existen muchas formas de ejecutar las pruebas.

## TestNG

![image](https://user-images.githubusercontent.com/56354251/128399745-9763fb51-d3e3-4647-b60c-fe4a1d6ead62.png)

## Cucumber

![image](https://user-images.githubusercontent.com/56354251/128399780-ac23e0dc-2a78-4278-a48c-e272d3b43d52.png)

## Demo

https://user-images.githubusercontent.com/56354251/128399875-62af7f71-f6ef-42ab-958f-00ee9cd3447f.mp4

# 🔗 Links de interés<a name="linksdeinteres"></a> [🔝](#indice)

Los siguientes links proporcionados fueron visitados el **05/08/2021**.

- Cucumber
  - [Sitio](https://cucumber.io/)
  - [Instalación](https://cucumber.io/docs/installation/)
  - [Documentación oficial](https://cucumber.io/docs/cucumber/)
  - Adaptador ExtentReport:
    - [GitHub](https://github.com/grasshopper7/extentreports-cucumber6-adapter)
    - [Artículo](http://ghchirp.tech/2098/)
  - [Buenas prácticas](https://www.federico-toledo.com/buenas-practicas-de-cucumber/)
- Documentar en Java
  - [Buenas prácticas](https://github.com/damigarcia/standards/wiki/Buenas-Practicas-de-codificacion#comentarios)
  - [Ejemplo](https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=646:documentar-proyectos-java-con-javadoc-comentarios-simbolos-tags-deprecated-param-etc-cu00680b&catid=68&Itemid=188)
  - [Generar Javadoc](http://www.myjavazone.com/2013/06/generar-javadoc-usando-eclipse-ide.html)
- ExtentReport
  - [Sitio oficial](https://www.extentreports.com/)
  - [Documentación](https://www.extentreports.com/docs/versions/5/java/index.html)
  - [Reporte Spark](https://www.extentreports.com/docs/versions/5/java/spark-reporter.html)
- Selenium
  - [Sitio oficial](https://www.selenium.dev/)
  - [Documentación oficial](https://www.selenium.dev/documentation/en/)
  - [Buenas prácticas](https://www.selenium.dev/documentation/en/guidelines_and_recommendations/)
  - [Malas práticas](https://www.selenium.dev/documentation/en/worst_practices/)
  - [Un sitio para automatizar](https://www.saucedemo.com/)
- Ejemplos/Guias:
  - [1](https://www.lambdatest.com/blog/automation-testing-with-selenium-cucumber-testng/)
  - [2](https://www.guru99.com/cucumber-tutorials.html)
- Frameworks de ejecución de pruebas
  - [TestNG](https://testng.org/doc/)
  - [Junit](https://junit.org/junit5/)
- Archivo properties
  - [Oracle](https://docs.oracle.com/javase/7/docs/api/java/util/Properties.html)
  - [Ejemplo de uso](https://javiergarciaescobedo.es/programacion-en-java/15-ficheros/358-archivo-de-propiedades-properties)
- Maven
  - [ExtentReports Cucumber6 Adapter](https://mvnrepository.com/artifact/tech.grasshopper/extentreports-cucumber6-adapter)
  - [Cucumber JVM: Java](https://mvnrepository.com/artifact/io.cucumber/cucumber-java)
  - [Cucumber JVM: TestNG](https://mvnrepository.com/artifact/io.cucumber/cucumber-testng)
  - [Selenium Java:](https://mvnrepository.com/artifact/org.seleniumhq.selenium/selenium-java)
  - [ExtentReports](https://mvnrepository.com/artifact/com.aventstack/extentreports)
  - [TestNG](https://mvnrepository.com/artifact/org.testng/testng)
- [Eclipse](https://www.eclipse.org/)

### Volver [🔝](#indice)
