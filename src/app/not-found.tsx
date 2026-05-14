import PagePlaceholder from "@/components/PagePlaceholder";

export default function NotFound() {
  return (
    <PagePlaceholder
      eyebrow="404"
      title="Page not found."
      description="The page you're looking for doesn't exist or has moved."
      primaryCta={{ href: "/", label: "Back to home" }}
      secondaryCta={{ href: "/about", label: "About the case" }}
    />
  );
}
