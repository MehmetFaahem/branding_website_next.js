import { NextResponse } from "next/server";

export async function GET() {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Business Process Analysis",
      description:
        "Our process starts with an in-depth understanding of your business practices.",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0bc5e7ff174cb2fe49e9f088b435240f035a5149e90691d66e3649d578239daf",
    },
    {
      id: 2,
      number: "02",
      title: "Requirement Analysis",
      description:
        "Based on business requirements, a thorough technical analysis is conducted.",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6c2815009218ae5284ebb1ab72b4b37978630a61473b3e2589220d4368ef1ee9",
    },
    {
      id: 3,
      number: "03",
      title: "User Experience Design",
      description:
        "User behaviour is heavily considered for designing a winning user experience.",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/246d7933ad3f8035140d7a982cf395644c0d59d72475271bd975c3e0fbd8ee50",
    },
    {
      id: 4,
      number: "04",
      title: "Solution Design",
      description:
        "The overall solution is designed by revolving around users and business process.",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/840946569e52734c8c611decf2c562d327de3b3c6163545f51dc2f8be37753af",
    },
    {
      id: 5,
      number: "05",
      title: "Deployment",
      description:
        "The solution is tested thoroughly before deployment and monitored closely.",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/840946569e52734c8c611decf2c562d327de3b3c6163545f51dc2f8be37753af",
    },
    {
      id: 6,
      number: "06",
      title: "Support",
      description:
        "Every product deployed receives maintenance, fixes, and expert support.",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/840946569e52734c8c611decf2c562d327de3b3c6163545f51dc2f8be37753af",
    },
  ];

  return NextResponse.json(steps);
}
