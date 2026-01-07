# 🌍 Netpeek

A command-line tool to get detailed information about the geolocation and network of any IP address, including associated ASN (Autonomous System Number) data.

## ✨ Features

- 📍 Accurate IP geolocation
- 🌐 Complete network and CIDR information
- 🏢 Autonomous system (ASN) details
- 🗺️ Location data: city, country, latitude and longitude
- 📊 IPv4 routes of the queried ASN
- 💻 Interactive command-line interface
- ⚡ Fast responses using the ip.guide API

## 🚀 Requirements

- Node.js (v14 or higher)
- npm 
- ts-node (will be installed as a project dependency)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Vincixd09/netpeek

# Enter the directory
cd netpeek

# Install dependencies (includes ts-node)
npm install
```

## 🔧 Usage

### Run the program

```bash
npm start
```

The program will ask you to enter a valid IP address and will display:

- **Network Information:**
  - Network CIDR
  - Start and end hosts of the range
  - Autonomous system
  
- **Organization Information:**
  - Organization name
  - Country
  - RIR (Regional Internet Registry)

- **Geolocation:**
  - City and country
  - Coordinates (latitude and longitude)

- **ASN Information:**
  - IPv4 IPs associated with the autonomous system
  - Available IPv6 routes
  - Instructions to get the complete list of routes

## 📝 Output example

```
Enter a valid ip: 8.8.8.8

The ip is: 8.8.8.8

Network Information: 
cidr: 8.8.8.0/24
Hosts information: 8.8.8.0 - 8.8.8.255
Autonomous System: AS15169
asn: 15169

IPS V4:
[IPv4 routes list]
To see the complete result do a curl -sL ip.guide/AS(your ASN number) > ips.txt 
and you can see all the results in a txt

IPS V6:
[IPv6 routes list]

Organization name: GOOGLE
Country: US
rir: ARIN

The location is:
Mountain View, United States
Latitude: 37.4056  and Longitude: -122.0775
```

> **Privacy note:** The geolocation shown is approximate and does not reveal the user's exact location. The API provides information at city/region level to protect privacy.

## 🛠️ Technologies

- **TypeScript** - Main language in the project 
- **ts-node** - Run TypeScript without precompiling
- **Node.js** - Runtime environment
- **ip.guide API** - Geolocation and ASN data source

## 📄 Available scripts

```json
{
  "start": "ts-node src/index.ts"
}
```

## 🤝 Contributions

Contributions are welcome.

## 👤 Vinci

[@Vincixd09](https://github.com/Vincixd09)

---

⭐ If this project was useful to you, consider giving it a star on GitHub
