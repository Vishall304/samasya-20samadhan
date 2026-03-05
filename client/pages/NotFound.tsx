import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Layout>
      <div className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Card>
            <CardHeader className="pb-8">
              <div className="mx-auto text-6xl font-bold text-primary mb-4">404</div>
              <CardTitle className="text-2xl">Page Not Found</CardTitle>
              <CardDescription className="text-base">
                Sorry, we couldn't find the page you're looking for.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The page you're looking for might have been moved, deleted, or doesn't exist.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                  </Link>
                </Button>
                <Button variant="outline" onClick={() => window.history.back()}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
