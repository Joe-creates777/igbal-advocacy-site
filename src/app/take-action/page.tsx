import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ActionFunnel from "@/components/action/ActionFunnel";
import ContactBlock from "@/components/action/ContactBlock";
import FollowCampaign from "@/components/action/FollowCampaign";
import ShareGuide from "@/components/action/ShareGuide";

export const metadata: Metadata = {
  title: "Take Action",
  description:
    "Four concrete things you can do for Igbal Abilov today — sign the petition, contact elected officials, join the Scholars at Risk action, and share the campaign.",
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

      <ActionFunnel />
      <ShareGuide />
      <FollowCampaign />
      <ContactBlock />
    </>
  );
}
