export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  virtual: boolean;
  description: string;
  rsvpUrl: string;
  past: boolean;
}

export const eventsData: EventItem[] = [
  {
    id: "sb-1507-town-hall",
    title: "SB 1507 Implementation Town Hall",
    date: "2026-04-22",
    time: "6:00 PM - 8:00 PM MST",
    location: "Burton Barr Central Library, Phoenix, AZ",
    virtual: false,
    description:
      "Join Praxis Initiative for a community town hall on the implementation and funding of Arizona's Independent Correctional Oversight Office. Executive Director John Fabricius will present the current status of SB 1507, the funding campaign, and how community members can support the effort to make the ICOO operational. Open to the public.",
    rsvpUrl: "#",
    past: false,
  },
  {
    id: "digital-literacy-info",
    title: "Digital Literacy Program Info Session",
    date: "2026-05-08",
    time: "2:00 PM - 3:30 PM MST",
    location: "Virtual (Zoom)",
    virtual: true,
    description:
      "An information session for returning citizens, family members, and community partners interested in Praxis Initiative's Digital Literacy & Access program. Learn about the curriculum, the specialized 50+ cohort track, device access support, and how to enroll or refer participants. Peer mentors will be available to answer questions.",
    rsvpUrl: "#",
    past: false,
  },
  {
    id: "advocacy-training-workshop",
    title: "Advocacy Training Workshop: Finding Your Legislative Voice",
    date: "2026-05-15",
    time: "10:00 AM - 4:00 PM MST",
    location: "Praxis Initiative Office, Phoenix, AZ",
    virtual: false,
    description:
      "A full-day workshop for returning citizens and community members who want to become effective advocates for criminal legal reform. Topics include understanding the legislative process, telling your story effectively, meeting with legislators, media engagement, and building coalition power. Lunch provided. Priority registration for formerly incarcerated participants.",
    rsvpUrl: "#",
    past: false,
  },
  {
    id: "think-motion-exhibition",
    title: "Think Motion Exhibition: Art From Inside",
    date: "2026-06-12",
    time: "5:00 PM - 9:00 PM MST",
    location: "Modified Arts Gallery, Phoenix, AZ",
    virtual: false,
    description:
      "A public exhibition showcasing visual art, photography, and creative writing produced through Dr. Susan Bendix's Think Motion program inside Arizona correctional facilities. This exhibition brings the creative work of incarcerated individuals to the community, creating dialogue about transformation, humanity, and the power of art in spaces designed for deprivation.",
    rsvpUrl: "#",
    past: false,
  },
  {
    id: "oversight-coalition-meeting",
    title: "ICOO Funding Coalition Strategy Meeting",
    date: "2026-02-10",
    time: "3:00 PM - 5:00 PM MST",
    location: "Virtual (Zoom)",
    virtual: true,
    description:
      "A strategy session for coalition partners working to secure funding for Arizona's Independent Correctional Oversight Office. Topics included legislative appropriation strategy, federal grant opportunities, and the private funding campaign timeline.",
    rsvpUrl: "#",
    past: true,
  },
  {
    id: "harm-reduction-training",
    title: "Community Naloxone Training & Distribution",
    date: "2026-01-25",
    time: "11:00 AM - 1:00 PM MST",
    location: "Maryvale Community Center, Phoenix, AZ",
    virtual: false,
    description:
      "Praxis Initiative partnered with local harm reduction organizations to provide free naloxone training and distribution to community members. Participants learned to recognize the signs of opioid overdose and administer life-saving naloxone. Free naloxone kits were distributed to all attendees.",
    rsvpUrl: "#",
    past: true,
  },
];
