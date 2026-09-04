import React from "react";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Globe2,
  Handshake,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdEKS2fuBUAzfCX2PDbrklJnEn75Y4LqbIbNX9y5RYtek8DAQ/viewform";

const roles = [
  {
    title: "Frontend Developer",
    stack: "React / Next.js",
    experience: "1–3 yrs",
    type: "Remote · Full-time",
  },
  {
    title: "Backend Developer",
    stack: "Node.js / MongoDB",
    experience: "1–4 yrs",
    type: "Remote · Full-time",
  },
  {
    title: "UI / UX Designer",
    stack: "Product & Marketing",
    experience: "0–2 yrs",
    type: "Remote · Full-time",
  },
  {
    title: "International Business Development Executive",
    stack: "B2B Sales · International Clients",
    experience: "0–2 yrs",
    type: "Remote / Hybrid · Commission-based",
  },
];

const values = [
  {
    icon: Rocket,
    title: "Ownership",
    text: "Take responsibility, move fast and see your work make a real difference to our clients.",
  },
  {
    icon: Sparkles,
    title: "Continuous growth",
    text: "Learn through real projects, new technologies and meaningful client challenges.",
  },
  {
    icon: Globe2,
    title: "Think globally",
    text: "Work on opportunities that connect QuadInfy with businesses and clients across international markets.",
  },
  {
    icon: Handshake,
    title: "Build relationships",
    text: "We believe great products and long-term partnerships start with clear communication and trust.",
  },
];

const bdPoints = [
  "Identify and qualify international business opportunities",
  "Reach out to potential clients through professional channels",
  "Understand client requirements and communicate QuadInfy solutions",
  "Build and maintain strong B2B relationships",
  "Coordinate qualified opportunities with the technical team",
  "Work towards successful project conversions and long-term partnerships",
];

export default function Careers() {
  const scrollToApply = () => {
    document.getElementById("career-application")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main
      id="careers"
      className="min-h-screen overflow-hidden bg-white text-qb-navy"
    >
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#fffaf0] via-white to-[#fff5ef] pt-28 sm:pt-32 lg:pt-40">
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-coral/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-qb-gold/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-20 sm:px-6 md:pb-28 lg:grid-cols-[1.2fr_.8fr] lg:gap-20 lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-qb-gold/30 bg-qb-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-qb-navy">
              <Sparkles className="h-3.5 w-3.5 text-coral" />
              Careers at QuadInfy
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Build technology.
              <span className="block text-coral">Build your future.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Join QuadInfy and work on digital solutions that help businesses
              move faster, operate smarter and grow with confidence. We’re
              looking for people who take ownership, communicate clearly and
              want to create meaningful impact.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToApply}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-coral px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-coral/20 transition hover:-translate-y-0.5 hover:bg-coral/90"
              >
                Explore opportunities
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#open-roles"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-qb-navy transition hover:border-qb-gold hover:bg-qb-gold/5"
              >
                View open roles
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-gray-200 pt-6">
              <div>
                <p className="text-xl font-extrabold text-qb-navy sm:text-2xl">
                  Global
                </p>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Client opportunities
                </p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-qb-navy sm:text-2xl">
                  Remote
                </p>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Flexible opportunities
                </p>
              </div>

              <div>
                <p className="text-xl font-extrabold text-qb-navy sm:text-2xl">
                  Growth
                </p>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Real ownership
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute inset-4 rounded-[2rem] bg-coral/10 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white bg-[#151928] p-6 text-white shadow-2xl shadow-qb-navy/20 sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral/15">
                  <Target className="h-6 w-6 text-coral" />
                </div>

                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/60">
                  QuadInfy
                </span>
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-coral">
                Your next opportunity
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                Don’t just find a job.
                <span className="block text-white/70">
                  Build something valuable.
                </span>
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  "Real client projects",
                  "Ownership from day one",
                  "International exposure",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-coral" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY QUADINFY */}
      <section className="border-y border-gray-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral">
              Why QuadInfy
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-qb-navy sm:text-4xl">
              A place to contribute, learn and grow.
            </h2>

            <p className="mt-4 text-gray-600">
              We want every team member to understand the bigger picture and
              have the opportunity to make an impact.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group rounded-2xl border border-gray-100 bg-gray-50/70 p-6 transition hover:-translate-y-1 hover:border-qb-gold/40 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-qb-gold/10 text-qb-gold transition group-hover:bg-coral/10 group-hover:text-coral">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-qb-navy">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {value.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section
        id="open-roles"
        className="scroll-mt-24 bg-gray-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral">
                Open opportunities
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-qb-navy sm:text-4xl">
                Find your place at QuadInfy.
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-6 text-gray-600">
              Don’t see an exact fit? You can still submit your profile and
              tell us where you believe you can add value.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {roles.map((role, index) => (
              <div
                key={role.title}
                className={`grid grid-cols-1 gap-4 p-5 sm:p-6 lg:grid-cols-[minmax(280px,2fr)_1fr_1.25fr_auto] lg:items-center ${
                  index !== 0 ? "border-t border-gray-100" : ""
                }`}
              >
                <div>
                  <h3 className="text-lg font-bold text-qb-navy sm:text-xl">
                    {role.title}
                  </h3>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-coral">
                    {role.stack}
                  </p>
                </div>

                <div className="text-sm text-gray-500">
                  {role.experience}
                </div>

                <div className="text-sm text-gray-500">{role.type}</div>

                <button
                  type="button"
                  onClick={scrollToApply}
                  className="inline-flex items-center gap-2 justify-self-start rounded-lg border border-gray-200 px-4 py-2 text-sm font-bold text-qb-navy transition hover:border-coral hover:text-coral"
                >
                  Apply
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL BD */}
      <section className="relative overflow-hidden bg-[#151928] py-16 text-white sm:py-20">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-coral/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-qb-gold/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-coral">
              <Globe2 className="h-3.5 w-3.5" />
              International Business Development
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Help QuadInfy build relationships around the world.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              We are looking for confident, commercially minded people who can
              start conversations with international businesses and turn
              genuine opportunities into long-term client relationships.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-qb-gold/10 text-qb-gold">
                <Briefcase className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Performance-driven opportunity
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  This is a commission-based role focused on generating and
                  converting qualified international business opportunities.
                </p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {bdPoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-coral" />

                  <span className="text-sm leading-5 text-white/75">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                  Ideal for
                </p>

                <p className="mt-1 text-sm font-semibold text-white/80">
                  Sales · B2B · IT Services · Business Development
                </p>
              </div>

              <button
                type="button"
                onClick={scrollToApply}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-coral px-5 py-3 text-sm font-bold text-white transition hover:bg-coral/90"
              >
                Apply for BD role
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CANDIDATE PROFILE */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral">
              Who we’re looking for
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-qb-navy sm:text-4xl">
              Skills matter. Mindset matters more.
            </h2>

            <p className="mt-5 max-w-xl text-gray-600">
              Whether you are an experienced professional or early in your
              careers, we value people who are curious, dependable,
              communicative and willing to take ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Strong communication",
              "Problem-solving mindset",
              "Ownership & accountability",
              "Ability to learn quickly",
              "Professional work ethic",
              "Client-focused thinking",
              "Team collaboration",
              "Relevant technical or business skills",
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3.5"
              >
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-coral" />

                <span className="text-sm font-medium text-gray-700">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE FORM */}
      <section
        id="career-application"
        className="scroll-mt-24 bg-gray-50 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral">
              Join the team
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-qb-navy sm:text-4xl">
              Ready to make an impact?
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
              Complete the application form below. Tell us about your
              experience, your work and how you can contribute to QuadInfy.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50">
            <div className="flex flex-col justify-between gap-3 border-b border-gray-100 bg-white px-5 py-5 sm:flex-row sm:items-center sm:px-7">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-coral">
                  QuadInfy Careers
                </p>

                <h3 className="mt-1 text-lg font-bold text-qb-navy">
                  Candidate Application
                </h3>
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-green-700">
                Secure submission
              </span>
            </div>

            <div className="h-[1000px] w-full bg-white sm:h-[980px]">
              <iframe
                title="QuadInfy Careers Application Form"
                src={GOOGLE_FORM_URL}
                className="h-full min-h-[1000px] w-full border-0 sm:min-h-[980px]"
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-coral/10 text-coral">
            <Handshake className="h-5 w-5" />
          </div>

          <h2 className="mt-5 text-2xl font-extrabold text-qb-navy sm:text-3xl">
            Think you can help QuadInfy grow?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
            We’re always interested in meeting talented people who bring
            strong skills, fresh ideas and a genuine desire to create value.
          </p>

          <button
            type="button"
            onClick={scrollToApply}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-qb-navy px-6 py-3.5 text-sm font-bold text-white transition hover:bg-qb-navy/90"
          >
            Submit your profile
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  );
}
