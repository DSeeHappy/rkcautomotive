'use client';

import {
  Settings, Gauge, AlertTriangle,
} from 'lucide-react';
import { BUSINESS, SUSPENSION_STEERING_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import {
  ServiceCinematicHero,
  ServiceRealityBand,
  ServiceSymptomGrid,
  ServiceProcessTimeline,
  ServiceChecklistGrid,
  ServiceLaborBand,
  ServiceFAQSection,
  ServiceFinalCTA,
  ServiceAreaServed,
} from './ServiceSharedSections';
import RelatedServices from '@/app/components/ui/RelatedServices';
import { getServiceBreadcrumbs } from './servicesShared';

const icons = [Settings, Gauge, AlertTriangle];

const SYMPTOMS = [
  {
    icon: icons[0],
    title: "Clunk & wander over bumps",
    body: "A sharp clunk on uneven railroad crossings near Evans Ave often means lower ball joint or stabilizer-link slop. Highway wander with new tires points to tie-rod inner wear or a tired steering rack. We use pry-bar and dial-indicator tests with wheels loaded — not just shake the tire with the vehicle in the air where joints can hide play.",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/25",
  },
  {
    icon: icons[1],
    title: "Uneven tire wear patterns",
    body: "Feathering on one edge is toe; cupping is shock failure; center wear is over-inflation. But worn struts let the tire bounce instead of maintaining contact — looks like alignment fault, fixes with dampers. We read wear patterns before recommending a four-wheel align, saving you $120 on adjustments that cannot fix mechanical slop.",
    accent: "text-sky-400",
    accentBg: "bg-sky-500/10",
    accentBorder: "border-sky-500/25",
  },
  {
    icon: icons[2],
    title: "Power steering & EPS faults",
    body: "Groaning pumps mean low fluid or aeration from a leaking rack seal. Electric power steering modules throw codes on GM and Ford platforms when torque sensors drift — feels like binding mid-corner. We differentiate hydraulic leaks from electronic calibration and quote rack, pump, or sensor repair based on pressure tests and scan data.",
    accent: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/25",
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "Road test & noise map", body: "Reproduce clunks, drift, and brake-pedal vibration under braking — separates warped rotors from control-arm bushings." },
  { step: "02", title: "Lift inspection", body: "Ball joints, tie rods, strut mounts, and sway-bar links tested under load. Boot tears on racks and CV joints noted before grease empties." },
  { step: "03", title: "Component replacement", body: "Torque-to-spec fasteners, aligned strut towers, and new hardware kits where supplied. We do not reuse stretched eccentric bolts." },
  { step: "04", title: "Alignment & thrust angle", body: "Four-wheel align on computerized rack with before/after printout. Thrust angle corrected so rear track guides front toe." },
  { step: "05", title: "Verification drive", body: "Return drive on local streets confirms straight wheel, quiet bumps, and no ABS false-trigger from damaged tone rings during hub work." }
];

const CHECKLIST_GROUPS = [
  { category: "Wear items", items: ["Struts, shocks, and coil springs", "Ball joints, tie rods, and sway-bar links", "Control-arm bushings and wheel bearings"] },
  { category: "Steering systems", items: ["Power-steering pump, rack, and hose replacement", "Electric power steering sensor calibration", "Steering column U-joint and intermediate shaft"] },
  { category: "Alignment", items: ["Four-wheel alignment with printout", "Camber bolt and eccentric shim correction", "Post-lift alignment after any front-end part swap"] },
  { category: "Colorado driving", items: ["Pothole-damage inspections after winter", "Truck and SUV load-leveling shock options", "Lifted-vehicle alignment considerations discussed honestly"] }
];

export default function SuspensionSteeringContent() {
  return (
    <div>
      <ServiceCinematicHero
        breadcrumbs={getServiceBreadcrumbs('Suspension & Steering')}
        image={PHOTOS.techCloseup}
        imageAlt="Suspension & Steering at RKC Automotive Englewood CO"
        eyebrow={"Ride & handling · Englewood, CO"}
        title={"Suspension & Steering Repair in Englewood, CO"}
        description={"Clunks over bumps, wandering on I-25, or uneven tire wear? We inspect shocks, struts, ball joints, tie rods, and steering racks — then align and road-test with a written estimate first."}
        primaryCta={{ href: '/contact', label: "Suspension Inspection" }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote={"Alignment cannot fix a worn ball joint."}
        body={"Shops that align first on a clunking front end are masking loose joints that will separate — Colorado potholes after winter freeze-thaw accelerate wear on Englewood streets. We load-test ball joints and tie rods, measure strut damping, and replace worn components before alignment pins are touched. You get stable handling and tires that last, not a straight steering wheel on failing hardware."}
      />

      <ServiceSymptomGrid
        eyebrow={"Handling signs"}
        title={"Suspension and steering warning signs"}
        intro={"Ride quality degrades slowly until a pothole on Broadway exposes how much control you have lost."}
        cards={SYMPTOMS}
      />

      <ServiceProcessTimeline
        eyebrow={"Inspection flow"}
        title={"Suspension diagnosis to alignment"}
        intro={"Mechanical integrity first, geometry second — that order keeps alignments lasting."}
        steps={PROCESS_STEPS}
        bgImage={PHOTOS.techCloseup}
        bgImageAlt="Suspension & Steering at RKC Automotive Englewood CO"
      />

      <ServiceChecklistGrid
        eyebrow={"Components"}
        title={"Steering and suspension services"}
        intro={"From daily-driver struts to work-truck leaf hardware, we service the systems that keep you pointed straight."}
        groups={CHECKLIST_GROUPS}
        bgClass="bg-white"
      />

      <ServiceLaborBand
        title={"Suspension labor at posted rate"}
        description={"Shocks, joints, and alignment labor bills at $120/hr with parts quoted separately. We list each component on the estimate — no bundled mystery front-end rebuilds."}
      />

      <ServiceFAQSection
        title={"Suspension & steering questions"}
        intro={"Strut life, alignment frequency, ball joint safety, and when tire wear is a suspension problem."}
        items={SUSPENSION_STEERING_PAGE_FAQ}
      />
      <RelatedServices slug="suspension-steering-englewood-co" />
      <ServiceAreaServed serviceLabel="suspension and steering repair" />
      <ServiceFinalCTA
        title={"Handling feel off?"}
        description={"Inspect suspension and steering at RKC on Evans Ave. We find the clunk, fix the joint, align the geometry — at transparent $120/hr labor."}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: "Book inspection" }}
      />
    </div>
  );
}
