import { NextResponse } from "next/server";

export async function GET() {
  const caseStudies = [
    {
      id: 1,
      title: "Digital Transformation for Global Retail Chain",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/30dbe6462a629eae69fbd763e01485b7ae9c2a56b364307b3f8583286313da41",
      logoImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/999682cccc2e4e3905ac770e06ac1a6729ba802c07072ebdad406dd4e5ff9edb",
    },
    {
      id: 2,
      title: "AI-Powered Analytics Platform Implementation",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4188c72e8617f6a9c0b414e1d768664ddd610da82752716aa7c5b781db75f3b7",
      logoImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c417f7fc5a3a6f75329219c5c8afd9e7f89ea45edfa9cfa7e8d3645b348912e0",
    },
    {
      id: 3,
      title: "Enterprise Resource Planning System Integration",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/25d79e611ac16778d67bb7a0873f6e755e3ba36330be4c3c2e1aedb5cdfe95b3",
      logoImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f6f45c47aaf940551f2db08fd73c0895124b2f52cf8a9f20001a692795b2f4c6",
    },
    {
      id: 4,
      title: "Smart Manufacturing Solution Deployment",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2debb1458f1d12c18edb0a9a574ac5214a33fd8df8c2282dcf54a8cedb9928a9",
      logoImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/08bd900ce8ff3e1df3cf3394a46eb507f84a13975a47e3baeaf4f04f495ec124",
    },
  ];

  return NextResponse.json(caseStudies);
}
