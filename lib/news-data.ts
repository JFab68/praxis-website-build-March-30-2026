export interface NewsArticle {
  title: string;
  slug: string;
  date: string;
  category: "News" | "Research" | "Press" | "Legislation";
  excerpt: string;
  body: string[];
  featured: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    title: "The Arizona State Legislature: 2025 And Beyond",
    slug: "arizona-legislature-2025",
    date: "2025-12-15",
    category: "Legislation",
    excerpt:
      "An analysis of the 2025 legislative session and what it means for criminal legal reform in Arizona heading into 2026.",
    body: [
      "The 2025 Arizona legislative session will be remembered as a turning point for criminal legal reform in the state. The passage of Senate Bill 1507 — establishing the Independent Correctional Oversight Office — was the capstone of a six-year campaign led by Praxis Initiative and a broad bipartisan coalition. But the session's significance extends well beyond a single bill.",
      "For the first time in recent memory, criminal legal reform legislation received genuinely bipartisan support in both chambers. SB 1507 passed the Senate 26-3 and the House 46-10 — margins that reflect a growing consensus that Arizona's corrections system requires independent accountability. This was not a partisan victory. It was a policy victory, driven by evidence, testimony from directly impacted people, and coalition work that spanned the political spectrum.",
      "Looking ahead to 2026, the central challenge is funding. The Independent Correctional Oversight Office was authorized but not appropriated. The initial $1.5 million was stripped during budget negotiations. Praxis Initiative is now leading the campaign to secure funding through legislative appropriations, federal grants, and private sources. The office exists in law. Making it exist in practice is the next fight.",
      "Beyond the ICOO, the 2026 session will see continued advocacy on sentencing reform, harm reduction policy, and returning citizen programming. Praxis Initiative is preparing legislative proposals on each front, informed by our research, our community, and the lived experience of the people we serve.",
    ],
    featured: true,
  },
  {
    title: "Access To Courts For Arizona State Inmates: A Comprehensive Analysis",
    slug: "access-to-courts",
    date: "2025-10-08",
    category: "Research",
    excerpt:
      "A detailed examination of how Arizona's incarcerated population is systematically denied meaningful access to the courts, and what must change.",
    body: [
      "Access to courts is a constitutional right — not a privilege, not a courtesy, not something that can be withheld as a matter of institutional convenience. Yet across Arizona's state correctional facilities, incarcerated individuals face systemic barriers to meaningful legal access that effectively deny them this fundamental protection.",
      "The barriers are structural and compounding. Law libraries inside Arizona facilities are inadequate, outdated, and often inaccessible. Legal mail is subject to delays and interference. The grievance system — ostensibly designed to address complaints before they reach the courts — functions more as a filtering mechanism that discourages rather than resolves complaints. For those without legal training, navigating these obstacles is nearly impossible.",
      "This analysis draws on documented experiences from inside Arizona's Department of Corrections, Rehabilitation and Reentry, published court findings, and the testimony of formerly incarcerated individuals who spent years attempting to exercise their legal rights from within these facilities. The patterns are consistent and damning: a system that technically provides legal access while functionally denying it.",
      "Independent oversight — the kind established by SB 1507 — is essential precisely because it provides an alternative channel for accountability. When the courts are effectively inaccessible, an independent oversight body becomes the last line of defense for the constitutional rights of incarcerated people.",
    ],
    featured: false,
  },
  {
    title: "Arizona's Mass Incarceration Crisis: The Evolution Of Sentencing",
    slug: "mass-incarceration-crisis",
    date: "2025-08-22",
    category: "Research",
    excerpt:
      "How decades of sentencing policy decisions built Arizona into one of the highest-incarcerating states in the country — and what it will take to reverse course.",
    body: [
      "Arizona incarcerates over 36,000 people in state facilities — a rate that places it among the highest-incarcerating jurisdictions not just in the United States, but in the world. This did not happen by accident. It was built, policy by policy, over three decades of sentencing decisions that prioritized length of incarceration over every other measure of public safety.",
      "The turning point came in 1994 with the adoption of Truth-in-Sentencing, which required people convicted of violent offenses to serve 85 percent of their sentence before becoming eligible for release. In the years that followed, mandatory minimums were expanded, sentence enhancements multiplied, and judicial discretion was progressively eliminated. The result was a system that could only grow — one that added beds but never added off-ramps.",
      "The human cost is staggering. Families torn apart for decades. Communities drained of their members. A corrections budget that consumes $1.4 billion annually while producing recidivism rates that demonstrate the system is not achieving its stated purpose. The data is unambiguous: longer sentences do not produce proportionally better public safety outcomes. After a certain point, they produce worse outcomes — as people age inside facilities that do not prepare them for return.",
      "Reversing this trajectory requires legislative action on sentencing reform, restoration of judicial discretion, earned release mechanisms, and a fundamental rethinking of what public safety actually requires. Praxis Initiative is building the research base, the coalition support, and the legislative strategy to make these changes real.",
    ],
    featured: false,
  },
  {
    title: "Independent Oversight Could Have Stopped The Lewis Prison Lock Disaster",
    slug: "lewis-prison-disaster",
    date: "2025-06-10",
    category: "News",
    excerpt:
      "The Lewis Prison lock failures were preventable. Independent oversight would have caught the conditions that led to a humanitarian crisis.",
    body: [
      "In 2020, a crisis at Lewis Prison Complex exposed what many incarcerated people had known for years: the facility's cell door locking mechanisms were broken. Doors that were supposed to secure individuals could be opened manually, creating conditions that endangered both incarcerated people and staff. The ADCRR's response was not to fix the locks — it was to impose a facility-wide lockdown that lasted months.",
      "The lockdown at Lewis was not a temporary security measure. It became a prolonged state of deprivation. People were confined to their cells for 23 or more hours a day. Access to showers, phones, recreation, and programming was severely restricted. Medical care — already inadequate — became even harder to access. The conditions met the threshold that many legal experts would describe as cruel and unusual.",
      "This is precisely the kind of crisis that independent oversight is designed to prevent. An independent body with the authority to inspect facilities, receive complaints, and investigate conditions would have identified the lock failures before they became a humanitarian crisis. It would have documented the lockdown conditions in real time. It would have had the standing to demand corrective action — not months later, but immediately.",
      "The Lewis Prison lock disaster is not history. It is a case study in what happens when a $1.4 billion corrections agency operates without independent accountability. SB 1507 was signed into law in part because of stories like this. The Independent Correctional Oversight Office must be funded so that the next Lewis never happens.",
    ],
    featured: false,
  },
  {
    title: "Our Fifth Year in the Fight for Independent Oversight of the ADCRR",
    slug: "fifth-year-oversight",
    date: "2025-03-15",
    category: "News",
    excerpt:
      "Five years into the campaign for independent prison oversight in Arizona, Praxis Initiative reflects on the journey and the final push toward SB 1507.",
    body: [
      "When we began this fight in 2019, independent correctional oversight was not part of Arizona's political vocabulary. There was no bill, no coalition, no bipartisan consensus. There was a proposal — written by John Fabricius and Travis Hiland at the American Friends Service Committee in Tucson — and a conviction that Arizona's prisons could not continue to operate without independent eyes.",
      "Five years later, the landscape has transformed. A national coalition including Dream.org, FAMM, Justice Action Network, ACLU Smart Justice, Arnold Ventures, the CPAC Nolan Center, and the Bipartisan Policy Center has rallied behind Arizona's oversight campaign. SB 1507 has been introduced and is advancing through both chambers with bipartisan support. What began as a two-person proposal is now a movement.",
      "The path was not linear. There were sessions where the bill did not advance. There were political headwinds that slowed progress. There were moments when the coalition had to regroup, re-strategize, and recommit. But the fundamental argument never changed: a corrections system that answers only to itself cannot be trusted to hold itself accountable. The people inside those facilities deserve better. The public deserves transparency.",
      "As we enter what we believe will be the final stretch of this campaign, we want to acknowledge the people who made it possible: the formerly incarcerated advocates who testified, the coalition partners who organized, the legislators who listened, and the community members who refused to accept that independent oversight was too much to ask for. This victory — when it comes — belongs to all of them.",
    ],
    featured: false,
  },
  {
    title: "SB 1507: What It Does, What It Doesn't, and What Happens Next",
    slug: "sb-1507-breakdown",
    date: "2025-07-02",
    category: "Legislation",
    excerpt:
      "A comprehensive breakdown of Senate Bill 1507, the law that established Arizona's Independent Correctional Oversight Office, and the funding fight ahead.",
    body: [
      "On June 28, 2025, Governor Katie Hobbs signed Senate Bill 1507 into law, establishing the Independent Correctional Oversight Office for the state of Arizona. This was the culmination of a six-year campaign led by Praxis Initiative and a coalition of national and state partners. The bipartisan vote — 26-3 in the Senate and 46-10 in the House — reflects the breadth of support for independent correctional accountability.",
      "The law charges the ICOO with five core functions: monitoring conditions of confinement in all state correctional facilities; ensuring compliance with state and federal law; disseminating information about incarcerated individuals' rights; accepting and independently investigating complaints; and submitting annual reports to the Arizona Legislature. These are not symbolic powers. They are the tools of real oversight.",
      "What the law does not do — yet — is fund the office. The original appropriation of $1.5 million was stripped during budget negotiations between the legislature and the governor's office. To save the bill's passage, sponsors agreed to an amendment authorizing the ICOO to seek funding through future legislative appropriations, federal grants, and private sources. The office exists in statute. It does not yet exist in operation.",
      "The funding fight is now the central campaign. Praxis Initiative is working on three fronts: securing a legislative appropriation in the 2026 session, pursuing federal grant opportunities, and building a private funding base to bridge the gap. The law is written. The office is authorized. What remains is the political and financial will to make it real.",
    ],
    featured: true,
  },
  {
    title: "Why We Can't Wait: The Case for Funding the ICOO",
    slug: "case-for-funding-icoo",
    date: "2025-09-20",
    category: "News",
    excerpt:
      "Every month the Independent Correctional Oversight Office remains unfunded is another month Arizona's prisons operate without independent accountability.",
    body: [
      "The Independent Correctional Oversight Office was signed into law on June 28, 2025. As of this writing, it remains unfunded. Every day that passes without operational funding is another day that Arizona's 36,000 incarcerated people lack an independent advocate — despite a law that says they should have one.",
      "The argument for urgency is not theoretical. It is documented in preventable deaths, unconstitutional conditions, and a corrections system that has operated for decades without meaningful external accountability. The ADCRR's annual budget exceeds $1.4 billion. The cost of a functional oversight office — estimated at $1.5 million initially — represents a fraction of one percent of that budget. This is not a question of affordability. It is a question of priority.",
      "Other states have demonstrated that independent oversight works. Washington, California, New Jersey, and others have established oversight mechanisms that have identified systemic problems, prevented crises, and saved taxpayer dollars by catching issues before they become lawsuits. Arizona's ICOO is modeled on these proven frameworks. The infrastructure is designed. The authority is enacted. Only funding is missing.",
      "Praxis Initiative is calling on the Arizona Legislature to include ICOO funding in the 2026 budget. We are calling on federal grantmakers to invest in Arizona's oversight infrastructure. And we are calling on every Arizonan who believes in accountability to make their voice heard. The law is on the books. Now we need it in the buildings.",
    ],
    featured: false,
  },
  {
    title: "Digital Literacy Is a Reentry Issue. Here's Why.",
    slug: "digital-literacy-reentry",
    date: "2025-11-05",
    category: "News",
    excerpt:
      "For returning citizens — especially those 50 and over — digital exclusion is not an inconvenience. It is a barrier to survival.",
    body: [
      "In 2026, applying for a job means navigating online portals. Accessing healthcare means logging into patient portals. Filing for benefits means completing digital applications. Banking, housing searches, even basic communication — nearly every essential service has moved online. For most people, this shift happened gradually. For someone returning from a decade or more of incarceration, it happened all at once.",
      "The digital divide facing returning citizens is not just a skills gap. It is a structural barrier that directly contributes to recidivism. When someone cannot apply for a job because they do not know how to use a computer, when they cannot access their healthcare because they cannot navigate a portal, when they cannot find housing because the listings are all online — the system has set them up to fail. And then it blames them for failing.",
      "This crisis is most acute for returning citizens over 50. Many entered the criminal legal system before smartphones existed. Some served sentences of 20 or 30 years. They return to a world that assumes digital competency as a baseline — and they return without it. The Praxis Initiative's 50+ Digital Literacy Cohort was designed specifically for this population, with accessibility-first curriculum, peer mentorship, and device access support.",
      "Digital literacy is not a luxury add-on to reentry services. It is foundational. Without it, every other program — employment assistance, healthcare navigation, civic participation — operates at reduced effectiveness. Praxis Initiative is building the program Arizona needs. We are actively seeking funding partners who understand that digital access is a reentry issue.",
    ],
    featured: false,
  },
  {
    title: "What It Means to Lead From Within",
    slug: "lead-from-within",
    date: "2025-05-18",
    category: "Press",
    excerpt:
      "An examination of lived-experience leadership in criminal legal reform and why organizations led by directly impacted people produce better outcomes.",
    body: [
      "The principle is simple: those closest to the problem are closest to the solution. Glenn Martin articulated this framework at JustLeadershipUSA, and it has become the organizing philosophy for a growing movement of directly impacted leaders across the country. Praxis Initiative is part of that movement — and in Arizona, we may be its clearest expression.",
      "Every program Praxis runs, every bill we advocate for, every coalition we join is led by people who have lived inside the system we are working to change. This is not symbolic representation. It is operational design. When we develop our returning citizens programs, we build them around the actual barriers our community members face — because we have faced them ourselves. When we advocate for independent oversight, we draw on direct testimony — because we were inside the facilities that oversight would monitor.",
      "Research supports what lived experience teaches: programs designed with direct input from affected communities produce better outcomes, higher participation rates, and more durable results. For criminal legal reform, this is not simply best practice. It is the moral baseline. A system that incarcerates people and then excludes them from the conversation about how to fix it is a system that cannot fix itself.",
      "Praxis Initiative exists to prove that lived-experience leadership is not a concession to justice. It is the most effective model of organizational leadership for this work. Every hire we make, every partnership we build, and every program we design is grounded in that conviction.",
    ],
    featured: false,
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return newsArticles.map((a) => a.slug);
}
