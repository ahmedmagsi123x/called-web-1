"use client";

import * as React from "react";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const goals = [
  "Build my brand",
  "Grow my presence",
  "Done-for-you content",
  "More qualified leads",
];

export function BookingForm() {
  const [goal, setGoal] = React.useState<string>("");
  const [submitted, setSubmitted] = React.useState(false);

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-brass/15 text-brass">
          <Check className="size-6" />
        </span>
        <h2 className="display mt-5 text-2xl">Request received.</h2>
        <p className="mx-auto mt-3 max-w-sm text-muted-foreground">
          Thanks — we&apos;ll be in touch within one business day to lock in a
          time. Keep an eye on your inbox.
        </p>
        <FieldDescription className="mt-6">
          Demo form — wire this to your scheduler (Calendly, Cal.com) or a form
          handler before launch.
        </FieldDescription>
      </div>
    );
  }

  return (
    <form
      className="rounded-xl border border-border bg-card p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <FieldGroup>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input id="name" name="name" autoComplete="name" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="company">Company / brand</FieldLabel>
            <Input id="company" name="company" autoComplete="organization" />
          </Field>
          <Field>
            <FieldLabel htmlFor="market">Primary market</FieldLabel>
            <Input id="market" name="market" placeholder="e.g. Phoenix, AZ" />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="goal">What do you want most right now?</FieldLabel>
          <ToggleGroup
            type="single"
            value={goal}
            onValueChange={(v) => setGoal(v)}
            id="goal"
          >
            {goals.map((g) => (
              <ToggleGroupItem key={g} value={g}>
                {g}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <input type="hidden" name="goal" value={goal} />
        </Field>

        <Field>
          <FieldLabel htmlFor="message">
            Anything we should know before the call?
          </FieldLabel>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Where you are now, where you want to be."
          />
          <FieldDescription>
            The more context, the sharper our first call.
          </FieldDescription>
        </Field>

        <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto">
          Request my call <ArrowRight />
        </Button>
      </FieldGroup>
    </form>
  );
}
