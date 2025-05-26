// src/app/rewrite-cv/RewriteCvForm.tsx
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { rewriteCvSection, type RewriteCvSectionInput } from '@/ai/flows/cv-rewrite';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function RewriteCvForm() {
  const [cvSection, setCvSection] = useState('');
  const [rewrittenSection, setRewrittenSection] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cvSection.trim()) {
      setError("Please enter some text from your CV to rewrite.");
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setRewrittenSection('');

    try {
      const input: RewriteCvSectionInput = { cvSection };
      const result = await rewriteCvSection(input);
      setRewrittenSection(result.rewrittenSection);
      toast({
        title: "CV Section Rewritten!",
        description: "The AI has enhanced your CV section.",
        variant: "default",
      });
    } catch (err) {
      console.error("Error rewriting CV section:", err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(`Failed to rewrite CV section: ${errorMessage}`);
      toast({
        title: "Error",
        description: `Failed to rewrite CV section: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <Card className="bg-card/80 backdrop-blur-sm shadow-xl animate-fadeInUp animation-delay-300">
        <CardHeader>
          <CardTitle className="text-2xl text-primary/90">Original CV Section</CardTitle>
          <CardDescription>Paste the section of your CV you want to improve.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Label htmlFor="cvSection" className="sr-only">CV Section</Label>
            <Textarea
              id="cvSection"
              value={cvSection}
              onChange={(e) => setCvSection(e.target.value)}
              placeholder="e.g., Managed a team of 5 engineers to deliver a critical project on time..."
              rows={10}
              className="bg-input border-border focus:ring-primary text-base"
              disabled={isLoading}
            />
            {error && <p className="text-sm text-destructive mt-2">{error}</p>}
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading || !cvSection.trim()} className="w-full shadow-lg hover:opacity-90">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Rewriting...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Enhance with AI
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>

      <Card className="bg-card/80 backdrop-blur-sm shadow-xl animate-fadeInUp animation-delay-400 min-h-[300px]">
        <CardHeader>
          <CardTitle className="text-2xl text-primary/90">AI-Enhanced Version</CardTitle>
          <CardDescription>Here&apos;s the AI-powered suggestion for your CV section.</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && !rewrittenSection && (
            <div className="flex items-center justify-center h-40">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
            </div>
          )}
          {rewrittenSection ? (
            <Textarea
              id="rewrittenCvSection"
              value={rewrittenSection}
              readOnly
              rows={10}
              className="bg-input border-border focus:ring-primary text-base whitespace-pre-wrap"
            />
          ) : (
            !isLoading && <p className="text-foreground/60 italic">The enhanced version will appear here...</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
