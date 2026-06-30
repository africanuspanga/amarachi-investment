export type Project = {
  id: number;
  title: string;
  status: "Ongoing" | "Executed";
  role: string;
  clientOrOwner?: string;
  mainContractor?: string;
  location: string;
  summary: string;
  objectives: string[];
  scope?: string[];
  workItems: string[];
  category: string;
  iconName: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Julius Nyerere Hydropower Plant and Dam",
    image: "/projects images/Julius Nyerere Power Plant.png",
    status: "Ongoing",
    role: "Subcontractor",
    clientOrOwner: "Government of Tanzania / Project under Arab Contractors & Elsewedy Electric",
    mainContractor: "Arab Contractors & Elsewedy Electric",
    location: "Stigler's Gorge Area, Morogoro Region, Rufiji River",
    category: "Energy Infrastructure",
    summary:
      "Amarachi Investment Company Limited is serving as a subcontractor on the Julius Nyerere Hydropower Plant and Dam, supporting excavation, backfilling, concrete transportation, and steel reinforcement works for one of Tanzania's largest energy infrastructure projects.",
    objectives: [
      "Generate electricity with a capacity of 2,115 MW.",
      "Support Tanzania's national energy needs.",
      "Control water flow during flooding periods.",
      "Provide necessary water resource support.",
    ],
    scope: [
      "Main dam for water storage and hydropower generation.",
      "Construction of four saddle dams for reservoir impounding.",
      "Construction of a 2,115 MW hydropower plant.",
      "Construction of a 400kV substation.",
      "Construction of 400kV transmission lines to the public network.",
      "Permanent access roads connecting the site with existing roads.",
      "Temporary access roads connecting all permanent facilities.",
    ],
    workItems: [
      "Excavation",
      "Aggregate backfilling",
      "Transportation of concrete",
      "Steel reinforcement",
    ],
    iconName: "Zap",
  },
  {
    id: 2,
    title: "Standard Gauge Railway — SGR",
    image: "/projects images/Standard Gauge Railway — SGR.jpg",
    status: "Ongoing",
    role: "Subcontractor",
    mainContractor: "Yapi Merkezi Insaat Sanayi",
    location:
      "Phase 1: Dar es Salaam to Morogoro, Phase 2: Morogoro to Makutupora, Phase 3: Makutupora to Tabora",
    category: "Railway Infrastructure",
    summary:
      "Amarachi Investment Company Limited is contributing as a subcontractor on the Standard Gauge Railway project, supporting excavation, concrete transportation, steel reinforcement, and construction activities across key SGR phases.",
    objectives: [
      "Construct one of the fastest railway systems in East Africa.",
      "Support railway speeds of up to 160 km/h.",
      "Improve regional connectivity between Tanzania, Uganda, Rwanda, and the Democratic Republic of Congo.",
      "Provide access to the Indian Ocean for connected regional countries.",
    ],
    scope: [
      "Phase 1: Dar es Salaam to Morogoro — 300 km.",
      "Phase 2: Morogoro to Makutupora — 422 km.",
      "Phase 3: Makutupora to Tabora — 294 km.",
    ],
    workItems: [
      "Excavation",
      "Construction support for bridges and overpasses",
      "Construction support for culverts and stations",
      "Transportation of concrete",
      "Steel reinforcement",
    ],
    iconName: "Train",
  },
  {
    id: 3,
    title: "Amarachi Quarry — Lugoba Quarry",
    image: "/projects images/Lugoba quarry.png",
    status: "Ongoing",
    role: "Project Owner",
    clientOrOwner: "Amarachi Investment Company Limited",
    location: "Lugoba",
    category: "Quarry & Aggregates",
    summary:
      "Amarachi Investment Company Limited owns and operates the Amarachi Quarry in Lugoba, producing stones and aggregates for construction and infrastructure projects.",
    objectives: [
      "Extract stones and aggregates for use as building and construction materials.",
    ],
    workItems: [
      "Drilling",
      "Blasting of granite fragments",
      "Crushing broken stones into smaller pieces",
      "Separating crushed stones into uniform aggregate classes",
    ],
    iconName: "Mountain",
  },
  {
    id: 4,
    title: "Kabulo-Kiwira Coal Mine",
    image: "/projects images/Kabulo-Kiwira Coal Mine.jpg",
    status: "Ongoing",
    role: "Tenderee",
    clientOrOwner: "STAMICO",
    location: "Kiwira, Ileje District",
    category: "Mining",
    summary:
      "Amarachi Investment Company Limited is involved as a tenderee on the Kiwira Coal Mine project, supporting coal loading, digging, and transportation operations from mining pits to stock areas.",
    objectives: [
      "Support coal mining through open-pit and underground mining operations.",
      "Contribute to project production linked to a planned 200 MW or more power plant.",
      "Support future transmission infrastructure through a planned 100 km powerline to the national grid at Mbeya.",
    ],
    workItems: [
      "Loading materials into trucks using wheel loaders",
      "Digging works using wheel loaders",
      "Transporting coal from pit areas to stock areas using dump trucks",
    ],
    iconName: "HardHat",
  },
  {
    id: 5,
    title: "Coal Transportation Project",
    image: "/projects images/Coal Transportation.jpg",
    status: "Ongoing",
    role: "Transporter",
    clientOrOwner: "Tanzania Portland Cement Public Limited Company",
    location:
      "From Jitegemee Holdings Company, Songea to Tanzania Ports Authority Yard, Mtwara",
    category: "Transport & Logistics",
    summary:
      "Amarachi Investment Company Limited serves as a transporter for coal materials, moving coal from Songea to the Tanzania Ports Authority Yard in Mtwara for Tanzania Portland Cement Public Limited Company.",
    objectives: [
      "Transport coal material from Jitegemee Holdings Company in Songea to Tanzania Ports Authority Yard in Mtwara.",
    ],
    workItems: [
      "Coal material transportation",
      "Logistics coordination from loading point to delivery destination",
      "Movement of coal from Songea to Mtwara",
    ],
    iconName: "Truck",
  },
  {
    id: 6,
    title: "Maintenance of Pangani Road — Tanga Section",
    status: "Executed",
    role: "Subcontractor",
    clientOrOwner: "Tanzania National Roads Agency — TANROADS",
    location: "Pangani, Tanga",
    category: "Road Maintenance",
    image: "/tanga road.jpg",
    summary:
      "Amarachi Investment Company Limited served as a subcontractor on the Pangani Road maintenance project in Tanga, supporting soil handling, surface flattening, and road compaction works.",
    objectives: [
      "Carry out road maintenance works on the Pangani Road section in Tanga.",
    ],
    workItems: [
      "Carrying soils from construction sites for dumping",
      "Flattening road surfaces",
      "Compacting soil on constructed roads",
    ],
    iconName: "Road",
  },
  {
    id: 7,
    title: "Construction of a Warehouse in Ubungo District",
    image: "/NSSF-WAREHOUSE UBUNGO.png",
    status: "Executed",
    role: "Contractor",
    clientOrOwner: "NSSF (National Social Security Fund)",
    location: "Ubungo District, Dar es Salaam",
    category: "Warehouse Construction",
    summary:
      "Amarachi Investment Company Limited served as the contractor for the construction of a modern warehouse in Ubungo District, Dar es Salaam, for the National Social Security Fund (NSSF). The project was completed in 2024.",
    objectives: [
      "Deliver a durable and functional warehouse facility for NSSF in Ubungo District.",
      "Complete construction works within the 2023–2024 project timeline.",
      "Meet client quality, safety, and handover standards.",
    ],
    scope: [
      "Site preparation and earthworks.",
      "Reinforced concrete foundation and floor works.",
      "Steel structure erection and cladding.",
      "External works and site finishing.",
    ],
    workItems: [
      "Excavation and earthworks",
      "Concrete works",
      "Steel structure erection",
      "Finishing and site handover",
    ],
    iconName: "Warehouse",
  },
  {
    id: 8,
    title: "Construction of Rigid Pavement Road, Super to Golani 4km",
    image: "/Suka-Golani Road.png",
    status: "Executed",
    role: "Contractor",
    clientOrOwner: "TARURA (Tanzania Rural and Urban Roads Agency)",
    location: "Super to Golani, 4 km",
    category: "Road Construction",
    summary:
      "Amarachi Investment Company Limited served as the contractor for the construction of a 4 km rigid pavement road from Super to Golani, executed for the Tanzania Rural and Urban Roads Agency (TARURA) between 2024 and 2025.",
    objectives: [
      "Construct a 4 km rigid pavement road from Super to Golani.",
      "Improve road durability and traffic flow in the project area.",
      "Deliver the road works within the 2024–2025 project timeline.",
    ],
    scope: [
      "4 km rigid pavement road construction.",
      "Road alignment, earthworks, and drainage.",
      "Sub-base, base course, and concrete pavement works.",
      "Road furniture and final handover.",
    ],
    workItems: [
      "Earthworks and subgrade preparation",
      "Sub-base and base course construction",
      "Rigid pavement construction",
      "Drainage and road finishing",
    ],
    iconName: "Road",
  },
];

export const ongoingProjects = projects.filter((p) => p.status === "Ongoing");
export const executedProjects = projects.filter((p) => p.status === "Executed");

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}
