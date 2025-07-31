import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Construction } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
  description: string;
  suggestedAction?: {
    text: string;
    href: string;
  };
}

export default function Placeholder({ title, description, suggestedAction }: PlaceholderProps) {
  return (
    <Layout>
      <div className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Card>
            <CardHeader className="pb-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Construction className="h-8 w-8 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl">{title}</CardTitle>
              <CardDescription className="text-base">{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This page is coming soon! We're working hard to bring you more features.
              </p>
              {suggestedAction && (
                <Button asChild>
                  <Link to={suggestedAction.href}>
                    {suggestedAction.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {!suggestedAction && (
                <Button asChild>
                  <Link to="/">
                    Back to Home
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
