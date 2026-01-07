import * as readline from "readline"
import { asn } from "./asn";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


async function iploc(ip: string) {
  let dataG = null

  try {
    const res = await fetch(`https://ip.guide/${ip}`);
    const data = await res.json()
    dataG = data
  } catch (error) {
    console.error(`Error: ${error}`)
  }


  console.log(`The IP is: ${dataG.ip}\n`)

  console.log("Network Information:\n")
  console.log(`CIDR: ${dataG.network.cidr}\n`)
  console.log(
    `Host information:\n ${dataG.network.hosts.start} \n ${dataG.network.hosts.end}\n`
  )

  console.log("Autonomous System:\n")
  console.log(`ASN: ${dataG.network.autonomous_system.asn}`)
  await asn(dataG.network.autonomous_system.asn)

  console.log(`
Organization name: ${dataG.network.autonomous_system.name}
Country: ${dataG.network.autonomous_system.country}
RIR: ${dataG.network.autonomous_system.rir}
`)

  console.log(
    `The location is:\n ${dataG.location.city}, ${dataG.location.country}\n`
  )
  console.log(
    `Latitude: ${dataG.location.latitude} and Longitude: ${dataG.location.longitude}`
  )

};


rl.question("Enter a valid IP:  ", (res) => {
  iploc(res)
  rl.close()
})
