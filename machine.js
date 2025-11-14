const scholarships = [
  {
    name: "Merit-cum-Means Scholarship",
    description: "This scholarship is for students from economically weaker sections pursuing professional or technical courses.",
    category: "OBC",
    eligible: true,
    link: "https://www.education.gov.in/en/nmms"
  },
  {
    name: "Post Matric Scholarship",
    description: "Support for students from Scheduled Castes (SC) to pursue post-secondary education.",
    category: "SC",
    eligible: true,
    link: "https://www.haryana.gov.in/scheme/post-matric-scholarship/"
  },
  {
    name: "National Fellowship and Scholarship for Higher Education",
    description: "A financial assistance program for students from Scheduled Tribes (ST) pursuing higher education.",
    category: "ST",
    eligible: false,
    link: "https://fellowship.tribal.gov.in/"
  },
  {
    name: "Scholarship for Students with Disabilities",
    description: "Aimed at helping students with disabilities to pursue their studies at any level.",
    category: "PWD",
    eligible: true,
    link: "https://depwd.gov.in/en/scholarship/"
  },
  {
    name: "Central Sector Scholarship Scheme",
    description: "For meritorious students from financially weaker sections, to help them with their undergraduate studies.",
    category: "General",
    eligible: true,
    link: "https://dhar.nic.in/en/scheme/central-sector-scholarship/"
  },
  {
    name: "Prime Minister's Scholarship Scheme",
    description: "For the wards of Ex-Servicemen and Ex-Coast Guard personnel.",
    category: "General",
    eligible: true,
    link: "https://www.desw.gov.in/prime-ministers-scholarship-scheme-pmss"
  },
  {
    name: "Pragati Scholarship Scheme",
    description: "For girls pursuing technical education. It is an AICTE initiative.",
    category: "General",
    eligible: false,
    link: "https://dte.maharashtra.gov.in/pragati-scholarship-scheme/"
  },
  {
    name: "National Scholarship Portal (NSP)",
    description: "A unified portal for various scholarship schemes provided by different central and state departments.",
    category: "all",
    eligible: true,
    link: "https://scholarships.gov.in/"
  },
];

const scholarshipContainer = document.getElementById('scholarship-container');
const categoryFilter = document.getElementById('category-filter');
const eligibleFilter = document.getElementById('eligible-filter');
const noResultsMessage = document.getElementById('no-results');

// Navigation elements
const homeBtn = document.getElementById('home-btn');
const scholarshipsBtn = document.getElementById('scholarships-btn');
const exploreBtn = document.getElementById('explore-btn');
const homeLogo = document.getElementById('home-logo');
const homeSection = document.getElementById('home-section');
const scholarshipsSection = document.getElementById('scholarships-section');

// Navigation functions
function showHome() {
  homeSection.classList.remove('hidden');
  scholarshipsSection.classList.add('hidden');
  
  // Update button states
  homeBtn.classList.add('bg-blue-100', 'text-blue-700');
  scholarshipsBtn.classList.remove('bg-blue-100', 'text-blue-700');
}

function showScholarships() {
  homeSection.classList.add('hidden');
  scholarshipsSection.classList.remove('hidden');
  
  // Update button states
  scholarshipsBtn.classList.add('bg-blue-100', 'text-blue-700');
  homeBtn.classList.remove('bg-blue-100', 'text-blue-700');
  
  filterAndRender();
}

function renderScholarships(filteredScholarships) {
  scholarshipContainer.innerHTML = '';
  if (filteredScholarships.length === 0) {
    noResultsMessage.classList.remove('hidden');
    return;
  } else {
    noResultsMessage.classList.add('hidden');
  }

  filteredScholarships.forEach(scheme => {
    const card = document.createElement('div');
    card.className = 'scholarship-card';

    card.innerHTML = `
      <div class="flex justify-between items-start mb-4">
        <div class="flex-1">
          <h3 class="text-xl font-semibold mb-2">${scheme.name}</h3>
          <div class="flex items-center gap-2 mb-3">
            <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
            </svg>
            <span class="text-sm font-medium">Category: ${scheme.category}</span>
          </div>
        </div>
        <span class="text-sm font-medium px-3 py-1 rounded-full ${scheme.eligible ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'} flex-shrink-0 ml-4">
          ${scheme.eligible ? 'Open' : 'Closed'}
        </span>
      </div>
      
      <div class="space-y-3 mb-4">
        <div class="flex items-start gap-3">
          <svg class="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
          </svg>
          <div>
            <p class="text-sm font-medium text-gray-300 mb-1">Description</p>
            <p class="text-sm leading-relaxed">${scheme.description}</p>
          </div>
        </div>
        
        <div class="flex items-start gap-3">
          <svg class="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <div>
            <p class="text-sm font-medium text-gray-300 mb-1">Eligibility Status</p>
            <p class="text-sm">${scheme.eligible ? 'Available for eligible students' : 'Currently not available'}</p>
          </div>
        </div>
        
        <div class="flex items-start gap-3">
          <svg class="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
          </svg>
          <div>
            <p class="text-sm font-medium text-gray-300 mb-1">Application Status</p>
            <p class="text-sm">${scheme.eligible ? 'Accepting applications' : 'Applications closed'}</p>
          </div>
        </div>
      </div>
      
      <div class="flex items-center justify-between pt-4 border-t border-gray-700">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM12.95 14.536a1 1 0 10-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zM5.757 14.536a1 1 0 10-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707z"/>
          </svg>
          <span class="text-xs text-gray-400">Scholarship Portal</span>
        </div>
        <a href="${scheme.link}" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105">
          <span>Apply Now</span>
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    `;
    scholarshipContainer.appendChild(card);
  });
}

function filterAndRender() {
  const selectedCategory = categoryFilter.value;
  const isEligibleOnly = eligibleFilter.checked;

  const filtered = scholarships.filter(scheme => {
    const categoryMatch = selectedCategory === 'all' || scheme.category === selectedCategory;
    const eligibleMatch = !isEligibleOnly || scheme.eligible;
    return categoryMatch && eligibleMatch;
  });
  renderScholarships(filtered);
}

// Event listeners for navigation
homeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showHome();
});

scholarshipsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showScholarships();
});

exploreBtn.addEventListener('click', () => {
  showScholarships();
});

// Event listeners for filters
categoryFilter.addEventListener('change', filterAndRender);
eligibleFilter.addEventListener('change', filterAndRender);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  showHome();
});
