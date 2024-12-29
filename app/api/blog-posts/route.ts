import { NextResponse } from "next/server";

export async function GET() {
  const blogPosts = [
    {
      id: 1,
      date: "20 July",
      title:
        "DALL·E 3 and Midjourney Fail Astral Codex Ten's Image Generation Bet",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/17ac1ee0ddd5ed8864fba572394f7f426b38051d741976a9c3689d6b66308718",
      imageAlt: "DALL·E 3 and Midjourney AI image generation comparison",
    },
    {
      id: 2,
      date: "20 July",
      title: "An Illustrated Guide to Reinforcement Learning",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f45eab67d9acea8458bacaa54a60abf58301e3f1823824c002b03101196c1a54",
      imageAlt: "Reinforcement Learning guide illustration",
    },
    {
      id: 3,
      date: "19 July",
      title: "The Future of AI in Software Development",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/17ac1ee0ddd5ed8864fba572394f7f426b38051d741976a9c3689d6b66308718",
      imageAlt: "AI Software Development illustration",
    },
  ];

  return NextResponse.json(blogPosts);
}
