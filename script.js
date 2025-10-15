const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('site-nav--open');
  });
}

const BILL_DETAILS = {
  'bill-01': {
      title: 'Bill 01 — The Saskatchewan Human Dignity Act',
      lead: 'Turns human dignity into a binding duty for every ministry and Crown corporation.',
      sections: [
        {
          heading: 'Overview',
          type: 'list',
          items: [
            'Declares an enforceable duty on the Crown to uphold human dignity in every program.',
            'Expands the Human Rights Code to protect gender identity, neurodiversity, and social condition.',
            'Codifies new rights—to housing, food, health, work, reconciliation, and democracy—that unlock the Initiative.'
          ]
        },
        {
          heading: 'Implementation priorities',
          type: 'list',
          items: [
            'Draft the duty-of-dignity compliance standard for ministries and Crowns.',
            'Update the Saskatchewan Human Rights Code language and enforcement tools.',
            'Build shared dashboards that report on the new rights charter in plain language.'
          ]
        },
        {
          heading: 'What to watch',
          type: 'list',
          items: [
            'Community hearings on the Right to Human Dignity.',
            'Staff training timelines across Social Services and Justice.',
            'Feedback from disability and 2SLGBTQIA+ advocates.'
          ]
        },
        {
          heading: 'Full text',
          body: 'Full bill download coming soon.'
        }
      ]
    },


  'bill-02': {
      title: 'Bill 02 — The Saskatchewan Reconciliation & Treaty Renewal Act',
      lead: 'Implements landback, FPIC, and living treaty relationships with Indigenous nations.',
      sections: [
        {
          heading: 'Overview',
          type: 'list',
          items: [
            'Operationalizes Free, Prior, and Informed Consent through registries and capacity funding.',
            'Invests in water, fibre, housing, health, and emergency planning co-led with Indigenous nations.',
            'Establishes the Saskatchewan Council for Reconciliation, oversight offices, and the SRF.'
          ]
        },
        {
          heading: 'Implementation priorities',
          type: 'list',
          items: [
            'Co-develop consent protocol templates with Indigenous governments and SCR.',
            'Deliver capital plans for water, fibre, housing, and health infrastructure partnerships.',
            'Stand up the Saskatchewan Reconciliation Fund governance and reporting framework.'
          ]
        },
        {
          heading: 'What to watch',
          type: 'list',
          items: [
            'Number of consent agreements finalized with FPIC each year.',
            'Landback commitments advanced through the Land Back Secretariat.',
            'MMIWG Secretariat investigation milestones and published stats.'
          ]
        },
        {
          heading: 'Full text',
          body: 'Full bill download coming soon.'
        }
      ]
    },


  'bill-03': {
      title: 'Bill 03 — The Saskatchewan Universal Health Act',
      lead: 'Delivers head-to-toe care with $0 at point of service.',
      sections: [
        {
          heading: 'Key moves',
          type: 'list',
          items: [
            'Universal pharmacare, dental, vision, mental health, home care, and long-term care coverage.',
            'Benefit councils and transparent dashboards guide clinical standards and wait-time targets.',
            'Universal Health Levy funds recruitment, seat expansions, and community health centres.'
          ]
        },
        {
          heading: 'Implementation priorities',
          type: 'list',
          items: [
            'Establish benefit councils and the expedited therapy exception process.',
            'Expand medical training seats and launch recruitment packages across professions.',
            'Publish Universal Health dashboards with wait-time and attachment targets.'
          ]
        },
        {
          heading: 'What to watch',
          type: 'list',
          items: [
            'Primary care attachment within 90 days.',
            'Pharmacare formulary reaching the 90% coverage goal.',
            'Clinician uptake of digital direct-billing tools.'
          ]
        },
        {
          heading: 'Full text',
          body: 'Full bill download coming soon.'
        }
      ]
    },


  'bill-04': {
      title: 'Bill 04 — The Saskatchewan Housing Crisis Act',
      lead: 'Locks in rent relief today and rebuilds public, climate-ready homes for tomorrow.',
      sections: [
        {
          heading: 'Key moves',
          type: 'list',
          items: [
            'Five-year rent freeze, renter registry, and Housing First supports with rapid repair grants.',
            'SHC acquires, retrofits, and pre-leases housing with 21-day permit clocks and by-right approvals.',
            'Launches SaskHomes design book and a modular factory to mass-produce Century Code homes.'
          ]
        },
        {
          heading: 'Implementation priorities',
          type: 'list',
          items: [
            'Publish rent-freeze regulations and launch the renter registry.',
            'Stand up SHC acquisition and rapid-repair teams across the province.',
            'Release SaskHomes pattern book with municipal permit clock guidance.'
          ]
        },
        {
          heading: 'What to watch',
          type: 'list',
          items: [
            'Weekly housing dashboard: units repaired, acquired, and leased.',
            'Municipal compliance with 21-day permit clocks.',
            'Emergency rent grant and repair rebate uptake.'
          ]
        },
        {
          heading: 'Full text',
          body: 'Full bill download coming soon.'
        }
      ]
    },


  'bill-05': {
      title: 'Bill 05 — The Saskatchewan 21st Century Connected Communities Act',
      lead: 'Designs walkable, transit-rich, ambient-energy neighbourhoods province-wide.',
      sections: [
        {
          heading: 'Key moves',
          type: 'list',
          items: [
            'Adopts the 21st Century Cities Accord for walkable, mixed-use, bike-friendly communities.',
            'Builds ambient thermal loops, microgrids, and dig-once corridors with SaskEnergy and SaskPower.',
            'Reboots STC for province-wide transit and logistics with cold-chain-enabled buses.'
          ]
        },
        {
          heading: 'Implementation priorities',
          type: 'list',
          items: [
            'Publish the Cities Accord standards and Priority Housing Zone maps.',
            'Sequence dig-once corridors with utilities and municipalities.',
            'Finalize STC route map, depot design, and cold-chain retrofits.'
          ]
        },
        {
          heading: 'What to watch',
          type: 'list',
          items: [
            'Ambient thermal loop kilometres installed each quarter.',
            'Transit frequency targets met by community size.',
            'Permitting turnaround inside Priority Housing Zones.'
          ]
        },
        {
          heading: 'Full text',
          body: 'Full bill download coming soon.'
        }
      ]
    },


  'bill-06': {
      title: 'Bill 06 — The Saskatchewan Fair Labour & Just Transition Act',
      lead: 'Delivers decent pay, predictable hours, and voluntary pathways into future-proof work.',
      sections: [
        {
          heading: 'Key moves',
          type: 'list',
          items: [
            'Worker Bill of Rights locks in a $25/hour wage floor, 30-hour workweek options, predictable schedules, and wage-theft enforcement through the Fair Work Authority.',
            'Just Transition Office offers retire, retrain, and redeploy pathways with bridges like pension top-ups, tuition, wage insurance, and relocation supports.',
            'Builds public capacity through SaskJobs, SCC, SCDA, and SMC so quality jobs, training, and manufacturing stay in Saskatchewan.'
          ]
        },
        {
          heading: 'Worker Bill of Rights highlights',
          type: 'list',
          items: [
            '$25/hour minimum wage indexed to CPI and employer payroll credits to fund 15 paid sick days.',
            'Standard scheduling patterns (5×6hr, 4×7.5hr, 3×10hr), 48-hour rest windows, meal and rest breaks, and equal pay for equal work.',
            'Fair termination: 3-month probation cap, mandatory severance (1.5 weeks/year), WARN-protected mass layoffs, and bans on non-competes and off-hours contact.'
          ]
        },
        {
          heading: 'Just Transition pathways',
          type: 'list',
          items: [
            'Retire: Unreduced pension bridge (up to six years) and honours benefits for workers ready to step back.',
            'Retrain: Full tuition/fees at public institutions, 70% weekly income support (floor $1,000/week), childcare, transport, and stipends.',
            'Redeploy: Guaranteed SCC offers in 30 days, wage insurance, relocation grants, housing stipends, PPE support, and exit bonuses.'
          ]
        },
        {
          heading: 'Institutions & enforcement',
          type: 'list',
          items: [
            'Just Transition Office: coordinates retire/retrain/redeploy pathways, audits compliance, and levies penalties when employers fall short.',
            'Fair Work Authority: independent inspectorate enforcing the Worker Bill of Rights with orders, AMPs, debarment, and a public registry.',
            'SaskJobs: no-wrong-door intake with career navigators, training vouchers, employer scorecards, and targeted subsidies.',
            'Saskatchewan Century Corps (SCC): paid public service corps that trains and places people in care, infrastructure, climate, digital, and agri projects.',
            'Saskatchewan Co-operative Development Agency (SCDA): one-stop co-op support with templates, shared services, and a right-of-first-refusal for worker buyouts.',
            'Saskatchewan Manufacturing Corporation (SMC): Crown manufacturer licensing, staffing, and powering green factories for housing, heat pumps, solar, and storage.'
          ]
        },
        {
          heading: 'Highlights',
          type: 'list',
          items: [
            'FPIC embedded wherever Indigenous rights, lands, or waters are affected.',
            'Transparency dashboards publish outputs, training metrics, safety, costs, and climate impacts.',
            'Timeline: Day 1 wage floor + FWA launch; within 6–12 months scheduling standards and EQS dashboard; 12–24 months SCC/SMC operating and co-op ROFR live.'
          ]
        },
        {
          heading: 'Downloads',
          type: 'links',
          items: [
            { label: 'One Pager (PDF)', href: 'One%20Pager%20Docs/PDFs/06%20%7C%20One%20Pager%20%7C%20The%20Saskatchewan%20Fair%20Labour%20and%20Just%20Transition%20Act.pdf' },
            { label: 'Full Act (PDF)', href: 'Full%20Acts/PDFs/06%20%7C%20The%20Saskatchewan%20Fair%20Labour%20and%20Just%20Transition%20Act.pdf' }
          ]
        }
      ]
    },


  'bill-07': {
      title: 'Bill 07 — The Saskatchewan Lifelong Learning Act',
      lead: 'Delivers learning from early years to retirement for every resident.',
      sections: [
        {
          heading: 'Key moves',
          type: 'list',
          items: [
            'Boosts per-student funding, class size supports, and teacher compensation across the board.',
            'Adds curriculum on civics, digital literacy, consent, and Indigenous languages.',
            'Expands SLA and SDLC for province-wide library access, device lending, and adult upgrading.'
          ]
        },
        {
          heading: 'Implementation priorities',
          type: 'list',
          items: [
            'Negotiate province-wide teacher pay grid and workload supports.',
            'Launch curriculum update workstreams for civics, digital literacy, and consent.',
            'Expand SDLC offerings for adult upgrading, tutoring, and micro-credentials.'
          ]
        },
        {
          heading: 'What to watch',
          type: 'list',
          items: [
            'Class size targets meeting new funding floors.',
            'Library device lending and connectivity grants in rural and northern communities.',
            'French immersion recruitment outcomes and language bursary uptake.'
          ]
        },
        {
          heading: 'Full text',
          body: 'Full bill download coming soon.'
        }
      ]
    },


  'bill-08': {
      title: 'Bill 08 — The Saskatchewan Financial Sovereignty Act',
      lead: 'Builds public wealth tools that fund dignity dividends and climate infrastructure.',
      sections: [
        {
          heading: 'Key moves',
          type: 'list',
          items: [
            'Establishes the Saskatchewan Dignity Fund and a $15,000 annual Dignity Dividend.',
            'Creates SaskFinancial Group for no-fee banking, co-op lending, and green finance.',
            'Modernizes taxes and launches Sask Bonds to back major public builds.'
          ]
        },
        {
          heading: 'Implementation priorities',
          type: 'list',
          items: [
            'Legislate the Dignity Fund structure and fossil-free investment mandate.',
            'Stand up SaskFinancial systems with partners across credit unions.',
            'Publish the Sask Bonds calendar and labeling framework for climate and social builds.'
          ]
        },
        {
          heading: 'What to watch',
          type: 'list',
          items: [
            'Consultation on dividend clawback and METR safeguards.',
            'OSFI-style risk policies released for SaskFinancial.',
            'Monthly Dignity Dividend modeling updates.'
          ]
        },
        {
          heading: 'Full text',
          body: 'Full bill download coming soon.'
        }
      ]
    },


  'bill-09': {
      title: 'Bill 09 — The Saskatchewan Food Sovereignty Act',
      lead: 'Guarantees fair farm prices, regenerative incentives, and grocery access everywhere.',
      sections: [
        {
          heading: 'Key moves',
          type: 'list',
          items: [
            'Creates the Saskatchewan Agriculture Board with guaranteed floor prices and regenerative dividends.',
            'Deploys SaskGrocery formats—from flagship markets to mobile stores—to end food deserts.',
            'Guarantees right to repair for farm equipment and transparent wholesale pricing.'
          ]
        },
        {
          heading: 'Implementation priorities',
          type: 'list',
          items: [
            'Set SAB floor-price formulas and deficiency payment rules.',
            'Design SaskGrocery pilot stores, mobile routes, and cold-chain logistics.',
            'Launch regenerative dividend application and audit protocols.'
          ]
        },
        {
          heading: 'What to watch',
          type: 'list',
          items: [
            'Weekly reference price publication cadence.',
            'Number of communities served by SaskGrocery formats.',
            'Right-to-repair compliance investigations.'
          ]
        },
        {
          heading: 'Full text',
          body: 'Full bill download coming soon.'
        }
      ]
    },


  'bill-10': {
      title: 'Bill 10 — The Saskatchewan Digital Sovereignty Act',
      lead: 'Keeps provincial data, software, and digital infrastructure in public hands.',
      sections: [
        {
          heading: 'Key moves',
          type: 'list',
          items: [
            'Requires Saskatchewan-hosted data centres, passkey security, and transparent incident reporting.',
            'Rolls out SaskOS, a Linux-based public service stack with SaskTel-run email for residents.',
            'Empowers Saskatchewan Digital Services to build open-source platforms and git.saskatchewan.ca.'
          ]
        },
        {
          heading: 'Implementation priorities',
          type: 'list',
          items: [
            'Inventory and migrate provincial systems to Saskatchewan-hosted servers.',
            'Build SaskOS beta images and staff training for the new toolchain.',
            'Launch SDS with open-source contribution guardrails and procurement playbooks.'
          ]
        },
        {
          heading: 'What to watch',
          type: 'list',
          items: [
            'Timeline for passkey enforcement across ministries and Crowns.',
            'Progress on the SaskTel email relaunch for residents.',
            'Public release of the git.saskatchewan.ca alpha repository.'
          ]
        },
        {
          heading: 'Full text',
          body: 'Full bill download coming soon.'
        }
      ]
    },


  'bill-11': {
      title: 'Bill 11 — The Saskatchewan Resource & Energy Sovereignty Act',
      lead: 'Pairs FPIC with clean grids and public resource development.',
      sections: [
        {
          heading: 'Key moves',
          type: 'list',
          items: [
            'Makes FPIC, cleanup bonds, and fossil subsidy phase-outs the rule for every project.',
            'Tasks SaskPower with clean generation, storage, and microgrids toward a 2055 zero-emission grid.',
            'Builds SNRC as a public, Indigenous-partnered competitor in critical minerals and energy.'
          ]
        },
        {
          heading: 'Implementation priorities',
          type: 'list',
          items: [
            'Design cleanup bonding requirements and consent protocol workflows.',
            'Publish SaskPower’s clean generation roadmap and storage portfolio.',
            'Finalize SNRC governance with Indigenous equity partners.'
          ]
        },
        {
          heading: 'What to watch',
          type: 'list',
          items: [
            'Milestones for fossil subsidy phase-out and new royalty tiers.',
            'Grid storage projects entering procurement.',
            'Number of consent protocols completed each quarter.'
          ]
        },
        {
          heading: 'Full text',
          body: 'Full bill download coming soon.'
        }
      ]
    },


  'bill-12': {
      title: 'Bill 12 — The Saskatchewan Democratic Renewal Act',
      lead: 'Builds a transparent, participatory democracy residents can audit.',
      sections: [
        {
          heading: 'Key moves',
          type: 'list',
          items: [
            'Introduces mixed-member proportional elections with open regional lists and balance seats.',
            'Bans private lobbying, caps donations to residents, and mandates transparent public hearings.',
            'Launches CodeShare Civics so every law, dataset, and petition lives in the open.'
          ]
        },
        {
          heading: 'Implementation priorities',
          type: 'list',
          items: [
            'Draft MMP boundaries, regional lists, and ballot design with Elections Saskatchewan.',
            'Rewrite lobbying registry legislation with public hearing requirements and disclosure clocks.',
            'Stand up CodeShare Civics infrastructure with moderation and accessibility protocols.'
          ]
        },
        {
          heading: 'What to watch',
          type: 'list',
          items: [
            'Timeline for Elections Saskatchewan test ballots and public education.',
            'Transparency turnaround for lobbying disclosures and hearing materials.',
            'Number of public contributions on open law repositories.'
          ]
        },
        {
          heading: 'Full text',
          body: 'Full bill download coming soon.'
        }
      ]
    },


  'bill-13': {
      title: 'Bill 13 — The Saskatchewan Disaster Resiliency Act',
      lead: 'Keeps communities safe with resilience hubs, clean air, and rapid response.',
      sections: [
        {
          heading: 'Key moves',
          type: 'list',
          items: [
            'Creates 24/7 multilingual alerting and resilience hubs within 30 minutes of every resident.',
            'Requires disaster plans, stronger rebuild standards, and expanded prescribed burns.',
            'Funds SERA, parametric insurance, and the Saskatchewan Resiliency Fund for rapid recovery.'
          ]
        },
        {
          heading: 'Implementation priorities',
          type: 'list',
          items: [
            'Map and fund resilience hubs with backup power and filtration.',
            'Upgrade SaskAlert with multilingual redundancy and redundant channels.',
            'Define parametric insurance triggers with SGI and publish payout criteria.'
          ]
        },
        {
          heading: 'What to watch',
          type: 'list',
          items: [
            'Coverage of hubs within a 30-minute travel radius.',
            'Annual wildfire, flood, and smoke mitigation reports.',
            'Sask Resiliency Fund balance and deployment speed.'
          ]
        },
        {
          heading: 'Full text',
          body: 'Full bill download coming soon.'
        }
      ]
    }

};

const modal = document.querySelector('.bill-modal');
const modalBody = modal ? modal.querySelector('#bill-modal-body') : null;
const closeButton = modal ? modal.querySelector('[data-close-modal]') : null;
const billTriggers = document.querySelectorAll('[data-bill]');
let activeTrigger = null;

document.querySelectorAll('.bill-card__downloads a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});

const renderSection = (section) => {
  const heading = section.heading ? `<h3>${section.heading}</h3>` : '';
  if (section.type === 'links' && Array.isArray(section.items)) {
    const links = section.items
      .map((item) => {
      const downloadAttr = item.download ? " download" : "";
      return `<a class="modal-download" href="${item.href}" target="_blank" rel="noopener"${downloadAttr}>${item.label}</a>`;
    })
      .join('');
    return `${heading}<div class="bill-modal__downloads">${links}</div>`;
  }
  if (section.items && section.items.length) {
    const items = section.items.map((item) => `<li>${item}</li>`).join('');
    return `${heading}<ul class="bill-modal__list">${items}</ul>`;
  }
  if (section.body) {
    return `${heading}<p>${section.body}</p>`;
  }
  return heading;
};

const openModal = (billId, trigger) => {
  if (!modal || !modalBody || !closeButton) return;
  const data = BILL_DETAILS[billId];
  if (!data) return;
  activeTrigger = trigger || null;
  const sectionsMarkup = data.sections.map(renderSection).join('');
  modalBody.innerHTML = `
    <article class="bill-modal__article">
      <h2 id="bill-modal-title">${data.title}</h2>
      <p class="bill-modal__lead">${data.lead}</p>
      ${sectionsMarkup}
    </article>
  `;
  modalBody.scrollTop = 0;
  modal.classList.add('bill-modal--open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  closeButton.focus();
};

const closeModal = () => {
  if (!modal || !modalBody || !closeButton) return;
  modal.classList.remove('bill-modal--open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  modalBody.innerHTML = '';
  if (activeTrigger) {
    activeTrigger.focus();
  }
  activeTrigger = null;
};

if (modal && modalBody && closeButton) {
  billTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => openModal(trigger.dataset.bill, trigger));
  });

  closeButton.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('bill-modal--open')) {
      closeModal();
    }
  });
}
