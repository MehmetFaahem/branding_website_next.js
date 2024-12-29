import { NextResponse } from "next/server";

export async function GET() {
  const solutions = [
    {
      id: 1,
      title: "INSPECTO",
      description:
        "Transform field operations with Inspecto&apos;s comprehensive inspection management. Ensure compliance, streamline processes, and drive efficiency with smart data collection and AI-powered analytics tailored for diverse industries.",
      imageUrl: "/assets/inspecto-preview.png",
      ctaText: "Learn More",
      ctaIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/000a0252993abfdf3f9b024d9c78f2922132e3c8c7e00f8f9c5527c456983476",
    },
    {
      id: 2,
      title: "ANALYTICA",
      description:
        "Harness the power of data with Analytica&apos;s advanced analytics platform. Turn complex data into actionable insights with our AI-driven analytics solution designed for modern businesses.",
      imageUrl: "/assets/analytica-preview.png",
      ctaText: "Learn More",
      ctaIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/000a0252993abfdf3f9b024d9c78f2922132e3c8c7e00f8f9c5527c456983476",
    },
  ];

  return NextResponse.json(solutions);
}
