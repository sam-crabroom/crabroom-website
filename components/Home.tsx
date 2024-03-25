// YourCards.tsx
"use client";
import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import Link from "next/link";
import classes from "@/components/badge.module.css";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface BadgeItem {
  emoji: string;
  label: string;
}

interface YourCardProps {
  title: string;
  imageUrl: string;
  description: string;
  country: string;
  badges: BadgeItem[];
  link: string;
}

const YourCard: React.FC<YourCardProps> = ({
  title,
  imageUrl,
  description,
  country,
  badges,
  link,
}) => {
  const features = badges.map((badge) => (
    <Badge
      key={badge.label}
      leftSection={badge.emoji}
      style={{ backgroundColor: "#14C4E4" }}
    >
      {badge.label}
    </Badge>
  ));

  return (
    <Card className={classes.card}>
      {/* <Card.Section>
       <Image src={imageUrl} alt={title} height={50}/>
  </Card.Section>*/}

      <Card.Section className={classes.section}>
        <Group justify="apart">
          <Text fw={900} style={{ color: "rgba(255, 255, 255, 0.9)" }}>
            {title}
          </Text>
          <Badge size="sm" variant="light" style={{ color: "#14C4E4" }}>
            {country}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section1}>
        <Text mt="md" className={classes.label} c="dimmed">
          Features:
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Link href={link} passHref>
        <Group mt="xs">
          <Button radius="md" style={{ flex: 1, backgroundColor: "#14C4E4" }}>
            Live Demo
          </Button>
        </Group>
      </Link>
    </Card>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center m-4 md:m-8 space-y-8">
      {/* Top Row */}
      <div className="flex flex-wrap justify-center space-y-12 md:space-y-0 md:space-x-4 md:w-full">
        <div className="w-full md:w-1/4">
          <BackgroundGradient className="rounded-[25px] max-w-sm p-1 sm:p-3 bg-white dark:bg-zinc-900">
            <YourCard
              title="Stripe Connect"
              country="Global"
              imageUrl="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png"
              description="Stripe Connect Integration supports B2B marketplace transactions like Ebay or Uber. The customer payments can be distributed amongst the vendor and the merchant for stripe connect."
              badges={[
                { emoji: "🌐", label: "Global" },
                { emoji: "💳", label: "Credit Cards" },
                { emoji: "💸", label: "Payments" },
              ]}
              link="/instructions"
            />
          </BackgroundGradient>
        </div>

        <div className="w-full md:w-1/4">
          <BackgroundGradient className="rounded-[25px] max-w-sm p-1 sm:p-3 bg-white dark:bg-zinc-900">
            <YourCard
              title="Custom Checkout"
              country="Global"
              imageUrl="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png"
              description="Stripe Checkout Integration allows customers to pay through their credit card account. Customer payments go through customer bank and merchant Stripe accounts."
              badges={[
                { emoji: "💳", label: "Credit Cards" },
                { emoji: "🛒", label: "Shopping Cart" },
                { emoji: "🌐", label: "Global" },
              ]}
              link="/formpage"
            />
          </BackgroundGradient>
        </div>

        <div className="w-full md:w-1/4 ">
          <BackgroundGradient className="rounded-[25px] max-w-sm p-1 sm:p-3 bg-white dark:bg-zinc-900">
            <YourCard
              title="Prebuilt Checkout"
              country="Global"
              imageUrl="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png"
              description="Discover the ease and efficiency of our prebuilt checkout solution. Simplify your payment process and enhance the user experience. Click on live demo to experience it"
              badges={[
                { emoji: "🚀", label: "Fast" },
                { emoji: "🔒", label: "Secure" },
                { emoji: "🌈", label: "Easy Integration" },
              ]}
              link="/prebuilt-steps"
            />
          </BackgroundGradient>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="w-full md:w-1/4">
        <BackgroundGradient className="rounded-[20px] max-w-sm p-1 sm:p-3 bg-white dark:bg-zinc-900">
          <YourCard
            title="Customer Portal"
            country="Global"
            imageUrl="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png"
            description="Explore our customer portal for a personalized experience. Manage your account, view transactions, and access exclusive features.click on live demo to experience it"
            badges={[
              { emoji: "📊", label: "Analytics" },
              { emoji: "💼", label: "Account Management" },
              { emoji: "🔒", label: "Secure" },
            ]}
            link="/customer-steps"
          />
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Home;
