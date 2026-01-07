export async function asn(as: string) {

  let dataG = null

  try {
    const res = await fetch(`https://ip.guide/AS${as}`)
    const data = await res.json()
    dataG = data
  } catch (error) {
    console.log("Error: " + error)
  }

  console.log("IPv4 routes:\n")
  console.log(dataG.routes.v4)

  console.log(
    "To see the full result, run:\n" +
    "curl -sL ip.guide/AS(your ASN number) > ips.txt\n" +
    "and you will be able to see all the results in a txt file\n"
  )

  console.log("IPv6 routes:\n")
  console.log(dataG.routes.v6)
}
