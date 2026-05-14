import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactBlock from "@/components/action/ContactBlock";
import FollowCampaign from "@/components/action/FollowCampaign";
import PetitionCard from "@/components/action/PetitionCard";
import ShareGuide from "@/components/action/ShareGuide";
import SpreadTheWord from "@/components/action/SpreadTheWord";

export const metadata: Metadata = {
  title: "Take Action",
  description:
    "Sign the petition, share the campaign, and help raise awareness for Igbal Abilov. Three concrete things you can do today.",
};

export default function TakeActionPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Take Action" },
        ]}
      />

      <PetitionCard />
      <SpreadTheWord />
      <ShareGuide />
      <FollowCampaign />
      <ContactBlock />
    </>
  );
}
