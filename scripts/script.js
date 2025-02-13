import prices from "../data/prices.js";

let basicPrice = prices.yearly.basic;
let essentialsPrice = prices.yearly.essentials;
let premiumPrice = prices.yearly.premium;
let elitePrice = prices.yearly.elite;

function renderPlanContainers() {
  const planWrapper = document.querySelector('.js-plan-selector-wrapper');

  planWrapper.innerHTML = 
  `
    <div class="plan-container">
      <div class="plan-title">
        Basic
      </div>
      <div class="plan-price">
        <p class="price-dollar-sign">$</p>
        <p class="price-amount">${basicPrice}</p>
        <p class="price-amount-description">/ user / mo</p>
      </div>
      <button class="plan-purchase-button js-start-free-button">
        Start for free
      </button>
      <div class="plan-subtitle">
        <p>
          Track time and manage your projects seamlessly
        </p>
        <p class="plan-subtitle-bill">
          Billed annually
        </p>
      </div>

      <div class="plan-divider"></div>

      <div class="plan-perks-container">
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Time tracking
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Task management
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Unlimited projects
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          CRM
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Service library
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          IOS & Android app
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Unlimited clients
        </div>
      </div>
      <button class="plan-purchase-button purchase-button-2 js-start-free-button">
        Start for free
      </button>
    </div>
    <div class="plan-container">
      <div class="plan-title">
        Essentials
      </div>
      <div class="plan-price">
        <p class="price-dollar-sign">$</p>
        <p class="price-amount">${essentialsPrice}</p>
        <p class="price-amount-description">/ user / mo</p>
      </div>
      <button class="plan-purchase-button js-start-free-button">
        Start for free
      </button>
      <div class="plan-subtitle">
        <p>
          Send agreements and invoices to clients and keep track of finances
        </p>
        <p class="plan-subtitle-bill">
          Billed annually
        </p>
      </div>

      <div class="plan-divider"></div>

      <div class="plan-perks-container">
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          <p>Everything in <span>Basic</span>&nbsp;plus:</p>
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Invoices & Payments
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Proposals & Contracts
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          All templates
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Forms & Questionnaires
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Scheduling
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Client portal
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Expense tracking
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Income tracking
        </div>
      </div>
      <button class="plan-purchase-button purchase-button-2 js-start-free-button">
        Start for free
      </button>
    </div>
    <div class="plan-container">
      <div class="most-popular-plan">
        <p>
          Most popular
        </p>
      </div>
      <div class="plan-title">
        Premium
      </div>
      <div class="plan-price">
        <p class="price-dollar-sign">$</p>
        <p class="price-amount">${premiumPrice}</p>
        <p class="price-amount-description">/ user / mo</p>
      </div>
      <button class="plan-purchase-button js-start-free-button">
        Start for free
      </button>
      <div class="plan-subtitle">
        <p>
          Advanced project management and reporting plus integrations
        </p>
        <p class="plan-subtitle-bill">
          Billed annually
        </p>
      </div>

      <div class="plan-divider"></div>

      <div class="plan-perks-container">
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          <p>Everything in <span>Essentials</span>&nbsp;plus:</p>
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Project insights
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Workload management
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Gantt view
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Custom fields & properties
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Client tasks & messaging
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Profit & Productivity reports
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Remove Bonsai branding
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Integrations (QuickBooks, Zapier, Calendly, Google)
        </div>
      </div>
      <button class="plan-purchase-button purchase-button-2 js-start-free-button">
        Start for free
      </button>
    </div>
    <div class="plan-container">
      <div class="plan-title">
        Elite
      </div>
      <div class="plan-price">
        <p class="price-dollar-sign">$</p>
        <p class="price-amount">${elitePrice}</p>
        <p class="price-amount-description">/ user / mo</p>
      </div>
      <button class="plan-purchase-button js-start-free-button">
        Start for free
      </button>
      <div class="plan-subtitle">
        <p>
          Powerful team management and reporting features with onboarding
        </p>
        <p class="plan-subtitle-bill">
          Billed annually
        </p>
        <p>
          3 users minimum
        </p>
      </div>

      <div class="plan-divider"></div>

      <div class="plan-perks-container">
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          <p>Everything in <span>Premium</span>&nbsp;plus:</p>
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Custom permissions
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Request management
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Staffing management
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Timesheet locking
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Add markup to expenses
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Hubspot integration
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Custom data import
        </div>
        <div class="plan-perk">
          <img src="assets/green-checkmark.png">
          Dedicated onboarding
        </div>
      </div>
      <button class="plan-purchase-button purchase-button-2 js-start-free-button">
        Start for free
      </button>
    </div>
  `

  document.querySelectorAll('.js-start-free-button').forEach((button) => {
    button.addEventListener('click', () => {
      location.href = 'https://app.hellobonsai.com/users/sign_up/?int_source=pricing&int_content=annual_business';
    });
  });

  document.querySelector('.js-book-demo-button')
    .addEventListener('click', () => {
      location.href = 'https://www.hellobonsai.com/demo';
    });

  document.querySelector('.js-login-button')
    .addEventListener('click', () => {
      location.href = 'https://app.hellobonsai.com/users/sign_in';
    });

  const monthlyButton = document.querySelector('.js-monthly-button');
  const yearlyButton = document.querySelector('.js-yearly-button');

  const selectorBackground = document.querySelector('.js-selector-background')

  // 12 stands for monthlyPlan, 1 stands for yearlyPlan
  let planTerm = 1;

  let debounceTimeout;
  monthlyButton.addEventListener('click', () => {
    if (planTerm === 1) {
      basicPrice = prices.monthly.basic;
      essentialsPrice = prices.monthly.essentials;
      premiumPrice = prices.monthly.premium;
      elitePrice = prices.monthly.elite;
      planTerm = 12;

      renderPlanContainers();

      document.querySelectorAll('.plan-subtitle-bill').forEach((element) => {
        element.classList.add('subtitle-bill-hidden');
      });

      selectorBackground.style.transform = 'translateX(0%)';
      selectorBackground.style.width = '7rem';
    }
  });

  yearlyButton.addEventListener('click', () => {
    if (planTerm === 12) {
      basicPrice = prices.yearly.basic;
      essentialsPrice = prices.yearly.essentials;
      premiumPrice = prices.yearly.premium;
      elitePrice = prices.yearly.elite;
      planTerm = 1;

      renderPlanContainers();

      document.querySelectorAll('.plan-subtitle-bill').forEach((element) => {
        element.classList.remove('subtitle-bill-hidden');
      });

      selectorBackground.style.transform = 'translateX(46%)';
      selectorBackground.style.width = '15rem';
    }
  });
}

renderPlanContainers();