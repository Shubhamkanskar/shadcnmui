"use client";

import * as React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { Button as MuiButton } from "@/components/ui/button-mui";
import { Input as MuiInput } from "@/components/ui/input-mui";

export default function MigrationDemo() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Shadcn to MUI Demo</h1>
        <p className="text-muted-foreground">
          This demo shows how to migrate components from shadcn/ui to MUI using
          sx prop and styled components
        </p>
      </div>

      {/* Button Comparison */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Button Component </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Shadcn Button</h3>
            <div className="flex flex-wrap gap-2">
              <ShadcnButton variant="default">Default</ShadcnButton>
              <ShadcnButton variant="destructive">Destructive</ShadcnButton>
              <ShadcnButton variant="outline">Outline</ShadcnButton>
              <ShadcnButton variant="secondary">Secondary</ShadcnButton>
              <ShadcnButton variant="ghost">Ghost</ShadcnButton>
              <ShadcnButton variant="link">Link</ShadcnButton>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <ShadcnButton size="sm">Small</ShadcnButton>
              <ShadcnButton size="default">Default</ShadcnButton>
              <ShadcnButton size="lg">Large</ShadcnButton>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium">MUI Button</h3>
            <div className="flex flex-wrap gap-2">
              <MuiButton variant="default">Default</MuiButton>
              <MuiButton variant="destructive">Destructive</MuiButton>
              <MuiButton variant="outline">Outline</MuiButton>
              <MuiButton variant="secondary">Secondary</MuiButton>
              <MuiButton variant="ghost">Ghost</MuiButton>
              <MuiButton variant="link">Link</MuiButton>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <MuiButton size="sm">Small</MuiButton>
              <MuiButton size="default">Default</MuiButton>
              <MuiButton size="lg">Large</MuiButton>
            </div>
          </div>
        </div>
      </section>

      {/* Form Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Form Component</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4 p-4 border rounded-lg">
            <h3 className="text-lg font-medium">Shadcn Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <input
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                />
              </div>
              <ShadcnButton type="submit">Submit</ShadcnButton>
            </form>
          </div>

          <div className="space-y-4 p-4 border rounded-lg">
            <h3 className="text-lg font-medium">MUI Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <MuiInput
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  fullWidth
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <MuiInput
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  fullWidth
                />
              </div>
              <MuiButton type="submit" variant="default">
                Submit
              </MuiButton>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
