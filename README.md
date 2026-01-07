# 🌍 Netpeek

Una herramienta de línea de comandos para obtener información detallada sobre la geolocalización y red de cualquier dirección IP, incluyendo datos del ASN (Autonomous System Number) asociado.

## ✨ Características

- 📍 Geolocalización precisa de direcciones IP
- 🌐 Información completa de la red y CIDR
- 🏢 Detalles del sistema autónomo (ASN)
- 🗺️ Datos de ubicación: ciudad, país, latitud y longitud
- 📊 Rutas IPv4 del ASN consultado
- 💻 Interfaz interactiva de línea de comandos
- ⚡ Respuestas rápidas utilizando la API de ip.guide

## 🚀 Requisitos

- Node.js (v14 o superior)
- npm o yarn
- ts-node (se instalará como dependencia del proyecto)

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Vincixd09/netpeek

# Entrar al directorio
cd netpeek

# Instalar dependencias (incluye ts-node)
npm install
```

### Instalación de ts-node

Este proyecto utiliza **ts-node** para ejecutar TypeScript directamente sin necesidad de compilar a JavaScript previamente. Puedes instalarlo:

**A nivel de proyecto** (recomendado):
```bash
npm install --save-dev ts-node typescript
```

**A nivel global** (opcional):
```bash
npm install -g ts-node typescript
```

## 🔧 Uso

### Ejecutar el programa

```bash
npm start
# o si tienes ts-node global
ts-node src/index.ts
```

El programa te solicitará ingresar una dirección IP válida y mostrará:

- **Información de la Red:**
  - CIDR de la red
  - Hosts de inicio y fin del rango
  - Sistema autónomo
  
- **Información de la Organización:**
  - Nombre de la organización
  - País
  - RIR (Regional Internet Registry)

- **Geolocalización:**
  - Ciudad y país
  - Coordenadas (latitud y longitud)

- **Información del ASN:**
  - IPS V4 asociadas al sistema autónomo
  - IPS V6 disponibles
  - Instrucciones para obtener el listado completo de rutas

## 📝 Ejemplo de salida

```
Ingrese una ip valida: 8.8.8.8

La ip es: 8.8.8.8

Informacion de la Network: 
cidr: 8.8.8.0/24
Informacion de los hosts: 8.8.8.0 - 8.8.8.255
Sistema Autonomo: AS15169
asn: 15169

IPS V4:
[lista de rutas IPv4]
Para ver el resultado completo hace un curl -sL ip.guide/AS(el numero de tu ASN) > ips.txt 
y podras ver todos los resultados en un txt

IPS V6:
[lista de rutas IPv6]

Nombre de la organizacion: GOOGLE
Pais: US
rir: ARIN

La localizacion es:
Mountain View, United States
Latitud: 37.4056  y Longitud: -122.0775
```

> **Nota de privacidad:** La geolocalización mostrada es aproximada y no revela la ubicación exacta del usuario. La API proporciona información a nivel de ciudad/región para proteger la privacidad.

## 🛠️ Tecnologías

- **TypeScript** - Lenguaje de programación tipado
- **ts-node** - Ejecutor de TypeScript sin compilación previa
- **Node.js** - Entorno de ejecución
- **readline** - Para la interfaz interactiva CLI
- **ip.guide API** - Fuente de datos de geolocalización y ASN

## 📄 Scripts disponibles

```json
{
  "start": "ts-node src/index.ts"
}
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request


## 👤 Vinci

[@Vincixd09]([https://github.com/tu_usuario](https://github.com/Vincixd09))

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub	
