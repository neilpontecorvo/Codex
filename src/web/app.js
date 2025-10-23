// Application Data
const appData = {
  lifeExpectancyBaselines: {
    "US": { "male": 75.8, "female": 81.1 }
  },
  riskFactors: {
    smoking: {
      current: { beta: 0.588, hr: 1.80, impact: "-8 to -10 years" },
      former: { beta: 0.223, hr: 1.25, impact: "-3 to -4 years" },
      never: { beta: 0.0, hr: 1.0, impact: "baseline" }
    },
    diabetes: {
      yes: { beta: 0.405, hr: 1.50, impact: "-5 to -7 years" },
      no: { beta: 0.0, hr: 1.0, impact: "baseline" }
    },
    bloodPressure: {
      high: { beta: 0.262, hr: 1.30, impact: "-3 to -4 years" },
      elevated: { beta: 0.182, hr: 1.20, impact: "-1 to -2 years" },
      normal: { beta: 0.0, hr: 1.0, impact: "baseline" }
    },
    bmi: {
      underweight: { beta: 0.588, hr: 1.80, impact: "-6 to -8 years" },
      normal: { beta: 0.0, hr: 1.0, impact: "baseline" },
      overweight: { beta: 0.095, hr: 1.10, impact: "-1 to -2 years" },
      obese: { beta: 0.336, hr: 1.40, impact: "-4 to -5 years" }
    },
    lifestyle: {
      unhealthy: { beta: 0.531, hr: 1.70, impact: "-7 to -12 years" },
      healthy: { beta: 0.0, hr: 1.0, impact: "baseline" }
    },
    familyHistory: {
      yes: { beta: 0.470, hr: 1.60, impact: "-3 to -5 years" },
      no: { beta: 0.0, hr: 1.0, impact: "baseline" }
    },
    circadianDisruption: {
      severe: { beta: 0.405, hr: 1.50, impact: "-4 to -6 years" },
      moderate: { beta: 0.182, hr: 1.20, impact: "-1 to -3 years" },
      none: { beta: 0.0, hr: 1.0, impact: "baseline" }
    }
  },
  heartbeatConstants: {
    totalLifetimeBeats: 3000000000,
    minutesPerYear: 525600
  },
  validationRanges: {
    birthYear: { min: 1900, max: 2009 },
    restingHeartRate: { min: 40, max: 150 },
    systolicBP: { min: 80, max: 250 },
    ageMinimum: 16
  },
  countries: [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "UK", name: "United Kingdom" },
    { code: "AU", name: "Australia" },
    { code: "DE", name: "Germany" },
    { code: "FR", name: "France" },
    { code: "JP", name: "Japan" }
  ],
  questions: [
    {
      id: 1,
      field: "birthYear",
      question: "What year were you born?",
      type: "number",
      placeholder: "e.g., 1990",
      validation: "Minimum age requirement: 16 years"
    },
    {
      id: 2,
      field: "sex",
      question: "What is your sex at birth?",
      type: "radio",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" }
      ]
    },
    {
      id: 3,
      field: "restingHeartRate",
      question: "What is your resting heart rate (beats per minute)?",
      type: "number",
      placeholder: "e.g., 70",
      validation: "Normal range: 60-100 BPM. Athletes may have lower rates."
    },
    {
      id: 4,
      field: "lifestyleQuality",
      question: "How would you describe your overall lifestyle?",
      type: "radio",
      options: [
        { value: "healthy", label: "Healthy", description: "Regular exercise, balanced diet, adequate sleep, stress management" },
        { value: "unhealthy", label: "Unhealthy", description: "Sedentary lifestyle, poor diet, inadequate sleep, high stress" }
      ]
    },
    {
      id: 5,
      field: "chronicConditions",
      question: "Do you currently have any chronic medical conditions?",
      type: "checkbox",
      options: [
        { value: "heartDisease", label: "Heart Disease" },
        { value: "cancer", label: "Cancer" },
        { value: "lungDisease", label: "Lung Disease" },
        { value: "kidneyDisease", label: "Kidney Disease" },
        { value: "stroke", label: "Previous Stroke" },
        { value: "none", label: "None of the above" }
      ]
    },
    {
      id: 6,
      field: "familyHistoryPremature",
      question: "Has a parent or sibling died before age 60 from heart disease, stroke, diabetes, or cancer?",
      type: "radio",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
      ]
    },
    {
      id: 7,
      field: "bmiCategory",
      question: "What is your current body mass index (BMI) category?",
      type: "radio",
      options: [
        { value: "underweight", label: "Underweight (BMI < 18.5)" },
        { value: "normal", label: "Normal (BMI 18.5-24.9)" },
        { value: "overweight", label: "Overweight (BMI 25-29.9)" },
        { value: "obese", label: "Obese (BMI ≥ 30)" }
      ]
    },
    {
      id: 8,
      field: "smokingStatus",
      question: "Do you currently smoke cigarettes?",
      type: "radio",
      options: [
        { value: "never", label: "Never smoked" },
        { value: "former", label: "Former smoker (quit)" },
        { value: "current", label: "Current smoker" }
      ]
    },
    {
      id: 9,
      field: "diabetes",
      question: "Have you been diagnosed with diabetes (Type 1 or Type 2)?",
      type: "radio",
      options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" }
      ]
    },
    {
      id: 10,
      field: "systolicBP",
      question: "What is your usual systolic blood pressure (mmHg)?",
      type: "number",
      placeholder: "e.g., 120",
      validation: "Normal: <120, Elevated: 120-129, High: ≥130 mmHg"
    },
    {
      id: 11,
      field: "zipCode",
      question: "What is your residential ZIP code?",
      type: "text",
      placeholder: "e.g., 10001",
      validation: "Used for geographic health risk assessment"
    },
    {
      id: 12,
      field: "country",
      question: "In which country do you reside?",
      type: "select",
      defaultValue: "US"
    },
    {
      id: 13,
      field: "circadianDisruption",
      question: "Do you experience circadian rhythm disruption?",
      type: "radio",
      description: "This is particularly important for musicians, nightclub workers, and shift workers",
      options: [
        { value: "none", label: "No disruption", description: "Regular sleep schedule, normal day/night pattern" },
        { value: "moderate", label: "Moderate disruption", description: "Occasional shift work or irregular schedules" },
        { value: "severe", label: "Severe disruption", description: "Daily night work for 2+ years (musicians, nightclub workers)" }
      ]
    }
  ]
};

// Application State
let currentQuestionIndex = 0;
let userAnswers = {};
let calculationResults = {};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  showScreen('welcome-screen');
});

// Screen Management
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });
  document.getElementById(screenId).classList.remove('hidden');
}

// Start Assessment
function startAssessment() {
  currentQuestionIndex = 0;
  userAnswers = {};
  showScreen('assessment-screen');
  renderQuestion();
  updateProgress();
}

// Render Current Question
function renderQuestion() {
  const question = appData.questions[currentQuestionIndex];
  const questionTitle = document.getElementById('question-title');
  const questionDescription = document.getElementById('question-description');
  const questionInput = document.getElementById('question-input');
  const validationError = document.getElementById('validation-error');
  
  questionTitle.textContent = question.question;
  questionDescription.textContent = question.description || '';
  validationError.innerHTML = '';
  
  // Clear previous input
  questionInput.innerHTML = '';
  
  // Render input based on question type
  switch (question.type) {
    case 'number':
      renderNumberInput(question, questionInput);
      break;
    case 'text':
      renderTextInput(question, questionInput);
      break;
    case 'radio':
      renderRadioOptions(question, questionInput);
      break;
    case 'checkbox':
      renderCheckboxOptions(question, questionInput);
      break;
    case 'select':
      renderSelectInput(question, questionInput);
      break;
  }
  
  // Show validation info if available
  if (question.validation) {
    showValidationInfo(question.validation);
  }
  
  // Update navigation buttons
  updateNavigationButtons();
}

// Render Number Input
function renderNumberInput(question, container) {
  const input = document.createElement('input');
  input.type = 'number';
  input.className = 'number-input';
  input.placeholder = question.placeholder || '';
  input.value = userAnswers[question.field] || '';
  input.addEventListener('input', () => {
    userAnswers[question.field] = input.value;
  });
  container.appendChild(input);
}

// Render Text Input
function renderTextInput(question, container) {
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'text-input';
  input.placeholder = question.placeholder || '';
  input.value = userAnswers[question.field] || '';
  input.addEventListener('input', () => {
    userAnswers[question.field] = input.value;
  });
  container.appendChild(input);
}

// Render Radio Options
function renderRadioOptions(question, container) {
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'question-options';
  
  question.options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.className = 'radio-option';
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = question.field;
    input.value = option.value;
    input.checked = userAnswers[question.field] === option.value;
    input.addEventListener('change', () => {
      if (input.checked) {
        userAnswers[question.field] = option.value;
        updateRadioSelection(question.field);
      }
    });
    
    const content = document.createElement('div');
    content.className = 'option-content';
    
    const label = document.createElement('span');
    label.className = 'option-label';
    label.textContent = option.label;
    content.appendChild(label);
    
    if (option.description) {
      const description = document.createElement('div');
      description.className = 'option-description';
      description.textContent = option.description;
      content.appendChild(description);
    }
    
    optionElement.appendChild(input);
    optionElement.appendChild(content);
    
    // Add click handler for the entire option
    optionElement.addEventListener('click', () => {
      input.checked = true;
      input.dispatchEvent(new Event('change'));
    });
    
    if (input.checked) {
      optionElement.classList.add('selected');
    }
    
    optionsContainer.appendChild(optionElement);
  });
  
  container.appendChild(optionsContainer);
}

// Render Checkbox Options
function renderCheckboxOptions(question, container) {
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'question-options';
  
  const currentAnswers = userAnswers[question.field] || [];
  
  question.options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.className = 'checkbox-option';
    
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = question.field;
    input.value = option.value;
    input.checked = currentAnswers.includes(option.value);
    input.addEventListener('change', () => {
      updateCheckboxSelection(question.field, option.value, input.checked);
      updateCheckboxVisuals(question.field);
    });
    
    const content = document.createElement('div');
    content.className = 'option-content';
    
    const label = document.createElement('span');
    label.className = 'option-label';
    label.textContent = option.label;
    content.appendChild(label);
    
    optionElement.appendChild(input);
    optionElement.appendChild(content);
    
    // Add click handler for the entire option
    optionElement.addEventListener('click', (e) => {
      // Prevent double-triggering when clicking on the checkbox itself
      if (e.target !== input) {
        input.checked = !input.checked;
        input.dispatchEvent(new Event('change'));
      }
    });
    
    if (input.checked) {
      optionElement.classList.add('selected');
    }
    
    optionsContainer.appendChild(optionElement);
  });
  
  container.appendChild(optionsContainer);
}

// Render Select Input
function renderSelectInput(question, container) {
  const select = document.createElement('select');
  select.className = 'select-input';
  
  // Add default option
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Select an option...';
  select.appendChild(defaultOption);
  
  // Add country options
  appData.countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = country.name;
    if (country.code === question.defaultValue || userAnswers[question.field] === country.code) {
      option.selected = true;
    }
    select.appendChild(option);
  });
  
  // Set initial value if it exists or use default
  if (userAnswers[question.field]) {
    select.value = userAnswers[question.field];
  } else if (question.defaultValue) {
    select.value = question.defaultValue;
    userAnswers[question.field] = question.defaultValue;
  }
  
  select.addEventListener('change', () => {
    userAnswers[question.field] = select.value;
  });
  
  container.appendChild(select);
}

// Update Radio Selection Visual
function updateRadioSelection(fieldName) {
  const options = document.querySelectorAll(`input[name="${fieldName}"]`);
  options.forEach(option => {
    const optionElement = option.closest('.radio-option');
    if (option.checked) {
      optionElement.classList.add('selected');
    } else {
      optionElement.classList.remove('selected');
    }
  });
}

// Update Checkbox Selection - Fixed
function updateCheckboxSelection(fieldName, value, checked) {
  if (!userAnswers[fieldName]) {
    userAnswers[fieldName] = [];
  }
  
  if (value === 'none') {
    // If "none" is selected, clear all other selections
    if (checked) {
      userAnswers[fieldName] = ['none'];
    } else {
      userAnswers[fieldName] = [];
    }
  } else {
    // If any other option is selected, remove "none"
    if (checked) {
      userAnswers[fieldName] = userAnswers[fieldName].filter(v => v !== 'none');
      if (!userAnswers[fieldName].includes(value)) {
        userAnswers[fieldName].push(value);
      }
    } else {
      userAnswers[fieldName] = userAnswers[fieldName].filter(v => v !== value);
    }
  }
}

// Update Checkbox Visuals
function updateCheckboxVisuals(fieldName) {
  const checkboxes = document.querySelectorAll(`input[name="${fieldName}"]`);
  const currentAnswers = userAnswers[fieldName] || [];
  
  checkboxes.forEach(checkbox => {
    const optionElement = checkbox.closest('.checkbox-option');
    
    // Handle mutual exclusivity for "none" option
    if (checkbox.value === 'none') {
      checkbox.checked = currentAnswers.includes('none');
    } else {
      checkbox.checked = currentAnswers.includes(checkbox.value) && !currentAnswers.includes('none');
    }
    
    if (checkbox.checked) {
      optionElement.classList.add('selected');
    } else {
      optionElement.classList.remove('selected');
    }
  });
}

// Show Validation Info
function showValidationInfo(message) {
  const validationElement = document.getElementById('validation-error');
  validationElement.textContent = message;
  validationElement.className = 'validation-message info';
}

// Show Validation Error
function showValidationError(message) {
  const validationElement = document.getElementById('validation-error');
  validationElement.textContent = message;
  validationElement.className = 'validation-message error';
}

// Validate Current Answer - Fixed
function validateCurrentAnswer() {
  const question = appData.questions[currentQuestionIndex];
  const answer = userAnswers[question.field];
  
  // Clear previous error
  document.getElementById('validation-error').className = 'validation-message';
  
  switch (question.field) {
    case 'birthYear':
      return validateBirthYear(answer);
    case 'restingHeartRate':
      return validateHeartRate(answer);
    case 'systolicBP':
      return validateBloodPressure(answer);
    case 'zipCode':
      return validateZipCode(answer);
    default:
      return validateRequiredField(answer, question.type);
  }
}

// Validate Birth Year
function validateBirthYear(year) {
  if (!year) {
    showValidationError('Please enter your birth year.');
    return false;
  }
  
  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(year);
  
  if (year < appData.validationRanges.birthYear.min || year > appData.validationRanges.birthYear.max) {
    showValidationError(`Please enter a valid birth year between ${appData.validationRanges.birthYear.min} and ${appData.validationRanges.birthYear.max}.`);
    return false;
  }
  
  if (age < appData.validationRanges.ageMinimum) {
    showValidationError(`You must be at least ${appData.validationRanges.ageMinimum} years old to use this calculator.`);
    return false;
  }
  
  return true;
}

// Validate Heart Rate
function validateHeartRate(rate) {
  if (!rate) {
    showValidationError('Please enter your resting heart rate.');
    return false;
  }
  
  const numRate = parseInt(rate);
  if (numRate < appData.validationRanges.restingHeartRate.min || numRate > appData.validationRanges.restingHeartRate.max) {
    showValidationError(`Please enter a heart rate between ${appData.validationRanges.restingHeartRate.min} and ${appData.validationRanges.restingHeartRate.max} BPM.`);
    return false;
  }
  
  return true;
}

// Validate Blood Pressure
function validateBloodPressure(bp) {
  if (!bp) {
    showValidationError('Please enter your systolic blood pressure.');
    return false;
  }
  
  const numBP = parseInt(bp);
  if (numBP < appData.validationRanges.systolicBP.min || numBP > appData.validationRanges.systolicBP.max) {
    showValidationError(`Please enter a blood pressure between ${appData.validationRanges.systolicBP.min} and ${appData.validationRanges.systolicBP.max} mmHg.`);
    return false;
  }
  
  return true;
}

// Validate ZIP Code
function validateZipCode(zip) {
  if (!zip || zip.trim() === '') {
    showValidationError('Please enter your ZIP code.');
    return false;
  }
  
  // Basic ZIP code validation (US format)
  const zipPattern = /^\d{5}(-\d{4})?$/;
  if (!zipPattern.test(zip.trim())) {
    showValidationError('Please enter a valid ZIP code (e.g., 12345 or 12345-6789).');
    return false;
  }
  
  return true;
}

// Validate Required Field - Fixed
function validateRequiredField(answer, type) {
  if (type === 'checkbox') {
    if (!answer || !Array.isArray(answer) || answer.length === 0) {
      showValidationError('Please select at least one option.');
      return false;
    }
  } else {
    if (!answer || answer === '') {
      showValidationError('Please provide an answer to continue.');
      return false;
    }
  }
  
  return true;
}

// Navigation Functions
function nextQuestion() {
  if (!validateCurrentAnswer()) {
    return;
  }
  
  if (currentQuestionIndex < appData.questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
    updateProgress();
  } else {
    // Last question - calculate results
    calculateResults();
    showResults();
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
    updateProgress();
  }
}

// Update Navigation Buttons
function updateNavigationButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  prevBtn.disabled = currentQuestionIndex === 0;
  
  if (currentQuestionIndex === appData.questions.length - 1) {
    nextBtn.textContent = 'Calculate Results';
  } else {
    nextBtn.textContent = 'Next';
  }
}

// Update Progress
function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / appData.questions.length) * 100;
  document.querySelector('.progress-fill').style.width = `${progress}%`;
  document.getElementById('current-question').textContent = currentQuestionIndex + 1;
}

// Calculate Life Expectancy Results
function calculateResults() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(userAnswers.birthYear);
  const sex = userAnswers.sex;
  const country = userAnswers.country || 'US';
  
  // Get baseline life expectancy
  let baseLifeExpectancy = appData.lifeExpectancyBaselines[country]?.[sex] || appData.lifeExpectancyBaselines.US[sex];
  
  // Calculate remaining life expectancy at current age
  let remainingYears = baseLifeExpectancy - age;
  
  // Apply risk factors using Cox proportional hazards model
  let totalBeta = 0;
  const appliedRiskFactors = [];
  
  // Smoking
  const smokingStatus = userAnswers.smokingStatus;
  if (smokingStatus && smokingStatus !== 'never') {
    const smokingRisk = appData.riskFactors.smoking[smokingStatus];
    totalBeta += smokingRisk.beta;
    appliedRiskFactors.push({
      name: 'Smoking',
      status: smokingStatus === 'current' ? 'Current smoker' : 'Former smoker',
      impact: smokingRisk.impact,
      risk: smokingStatus === 'current' ? 'high-risk' : 'moderate-risk'
    });
  }
  
  // Diabetes
  if (userAnswers.diabetes === 'yes') {
    const diabetesRisk = appData.riskFactors.diabetes.yes;
    totalBeta += diabetesRisk.beta;
    appliedRiskFactors.push({
      name: 'Diabetes',
      status: 'Diagnosed with diabetes',
      impact: diabetesRisk.impact,
      risk: 'high-risk'
    });
  }
  
  // Blood Pressure
  const systolicBP = parseInt(userAnswers.systolicBP);
  let bpCategory = 'normal';
  if (systolicBP >= 130) {
    bpCategory = 'high';
  } else if (systolicBP >= 120) {
    bpCategory = 'elevated';
  }
  
  if (bpCategory !== 'normal') {
    const bpRisk = appData.riskFactors.bloodPressure[bpCategory];
    totalBeta += bpRisk.beta;
    appliedRiskFactors.push({
      name: 'Blood Pressure',
      status: `${bpCategory === 'high' ? 'High' : 'Elevated'} blood pressure (${systolicBP} mmHg)`,
      impact: bpRisk.impact,
      risk: bpCategory === 'high' ? 'high-risk' : 'moderate-risk'
    });
  }
  
  // BMI
  const bmiCategory = userAnswers.bmiCategory;
  if (bmiCategory && bmiCategory !== 'normal') {
    const bmiRisk = appData.riskFactors.bmi[bmiCategory];
    totalBeta += bmiRisk.beta;
    appliedRiskFactors.push({
      name: 'Body Mass Index',
      status: `${bmiCategory.charAt(0).toUpperCase() + bmiCategory.slice(1)} BMI`,
      impact: bmiRisk.impact,
      risk: bmiCategory === 'obese' || bmiCategory === 'underweight' ? 'high-risk' : 'moderate-risk'
    });
  }
  
  // Lifestyle
  if (userAnswers.lifestyleQuality === 'unhealthy') {
    const lifestyleRisk = appData.riskFactors.lifestyle.unhealthy;
    totalBeta += lifestyleRisk.beta;
    appliedRiskFactors.push({
      name: 'Lifestyle',
      status: 'Unhealthy lifestyle patterns',
      impact: lifestyleRisk.impact,
      risk: 'high-risk'
    });
  }
  
  // Family History
  if (userAnswers.familyHistoryPremature === 'yes') {
    const familyRisk = appData.riskFactors.familyHistory.yes;
    totalBeta += familyRisk.beta;
    appliedRiskFactors.push({
      name: 'Family History',
      status: 'Family history of premature death',
      impact: familyRisk.impact,
      risk: 'moderate-risk'
    });
  }
  
  // Circadian Disruption
  const circadianDisruption = userAnswers.circadianDisruption;
  if (circadianDisruption && circadianDisruption !== 'none') {
    const circadianRisk = appData.riskFactors.circadianDisruption[circadianDisruption];
    totalBeta += circadianRisk.beta;
    appliedRiskFactors.push({
      name: 'Circadian Disruption',
      status: `${circadianDisruption.charAt(0).toUpperCase() + circadianDisruption.slice(1)} circadian disruption`,
      impact: circadianRisk.impact,
      risk: circadianDisruption === 'severe' ? 'high-risk' : 'moderate-risk'
    });
  }
  
  // Apply Cox proportional hazards adjustment
  const hazardRatio = Math.exp(totalBeta);
  const adjustedRemainingYears = remainingYears / hazardRatio;
  
  // Calculate heartbeats
  const restingHeartRate = parseInt(userAnswers.restingHeartRate);
  const totalMinutesRemaining = adjustedRemainingYears * appData.heartbeatConstants.minutesPerYear;
  const remainingHeartbeats = Math.round(totalMinutesRemaining * restingHeartRate);
  
  // Calculate confidence intervals (±15%)
  const confidenceMargin = adjustedRemainingYears * 0.15;
  const confidenceLower = Math.max(0, adjustedRemainingYears - confidenceMargin);
  const confidenceUpper = adjustedRemainingYears + confidenceMargin;
  
  // Store results
  calculationResults = {
    currentAge: age,
    remainingYears: Math.round(adjustedRemainingYears * 10) / 10,
    expectedAge: Math.round((age + adjustedRemainingYears) * 10) / 10,
    confidenceRange: {
      lower: Math.round(confidenceLower * 10) / 10,
      upper: Math.round(confidenceUpper * 10) / 10
    },
    remainingHeartbeats: remainingHeartbeats,
    appliedRiskFactors: appliedRiskFactors,
    totalBeta: totalBeta,
    hazardRatio: hazardRatio
  };
}

// Show Results
function showResults() {
  showScreen('results-screen');
  displayResults();
}

// Display Results
function displayResults() {
  const results = calculationResults;
  
  // Update main metrics
  document.getElementById('remaining-years').textContent = results.remainingYears;
  document.getElementById('expected-age').textContent = results.expectedAge;
  document.getElementById('confidence-range').textContent = 
    `${results.confidenceRange.lower} to ${results.confidenceRange.upper}`;
  document.getElementById('remaining-heartbeats').textContent = 
    results.remainingHeartbeats.toLocaleString();
  
  // Display risk factors
  displayRiskFactors(results.appliedRiskFactors);
  
  // Display recommendations
  displayRecommendations(results.appliedRiskFactors);
}

// Display Risk Factors
function displayRiskFactors(riskFactors) {
  const container = document.getElementById('risk-factors-list');
  container.innerHTML = '';
  
  if (riskFactors.length === 0) {
    const noRiskMessage = document.createElement('div');
    noRiskMessage.className = 'risk-factor low-risk';
    noRiskMessage.innerHTML = `
      <div class="risk-factor-info">
        <div class="risk-factor-name">No Major Risk Factors Identified</div>
        <div class="risk-factor-description">Your responses indicate a relatively low-risk profile for premature mortality.</div>
      </div>
      <div class="risk-factor-impact low-risk">Baseline risk</div>
    `;
    container.appendChild(noRiskMessage);
    return;
  }
  
  riskFactors.forEach(factor => {
    const factorElement = document.createElement('div');
    factorElement.className = `risk-factor ${factor.risk}`;
    factorElement.innerHTML = `
      <div class="risk-factor-info">
        <div class="risk-factor-name">${factor.name}</div>
        <div class="risk-factor-description">${factor.status}</div>
      </div>
      <div class="risk-factor-impact ${factor.risk}">${factor.impact}</div>
    `;
    container.appendChild(factorElement);
  });
}

// Display Recommendations
function displayRecommendations(riskFactors) {
  const container = document.getElementById('recommendations-list');
  container.innerHTML = '';
  
  const recommendations = generateRecommendations(riskFactors);
  
  recommendations.forEach(rec => {
    const recElement = document.createElement('div');
    recElement.className = 'recommendation';
    recElement.innerHTML = `
      <div class="recommendation-title">${rec.title}</div>
      <div class="recommendation-description">${rec.description}</div>
    `;
    container.appendChild(recElement);
  });
}

// Generate Recommendations
function generateRecommendations(riskFactors) {
  const recommendations = [];
  const riskTypes = riskFactors.map(rf => rf.name.toLowerCase());
  
  // General recommendations
  recommendations.push({
    title: "Regular Health Checkups",
    description: "Schedule annual physical examinations and follow up with your healthcare provider about your risk factors and health status."
  });
  
  // Specific recommendations based on risk factors
  if (riskTypes.includes('smoking')) {
    recommendations.push({
      title: "Smoking Cessation",
      description: "Quitting smoking is the single most important step you can take to improve your life expectancy. Consider nicotine replacement therapy, counseling, or prescription medications."
    });
  }
  
  if (riskTypes.includes('blood pressure')) {
    recommendations.push({
      title: "Blood Pressure Management",
      description: "Monitor your blood pressure regularly, reduce sodium intake, exercise regularly, and take prescribed medications as directed by your doctor."
    });
  }
  
  if (riskTypes.includes('body mass index')) {
    recommendations.push({
      title: "Weight Management",
      description: "Work with a healthcare provider or nutritionist to develop a sustainable plan for achieving and maintaining a healthy weight through diet and exercise."
    });
  }
  
  if (riskTypes.includes('diabetes')) {
    recommendations.push({
      title: "Diabetes Management",
      description: "Maintain tight blood sugar control through medication compliance, regular monitoring, healthy eating, and consistent physical activity."
    });
  }
  
  if (riskTypes.includes('lifestyle')) {
    recommendations.push({
      title: "Lifestyle Improvements",
      description: "Focus on regular physical activity (150 minutes per week), a balanced diet rich in fruits and vegetables, adequate sleep (7-9 hours), and stress management techniques."
    });
  }
  
  if (riskTypes.includes('circadian disruption')) {
    recommendations.push({
      title: "Sleep Hygiene and Circadian Health",
      description: "Establish consistent sleep schedules when possible, use bright light therapy, limit caffeine before sleep, and consider discussing melatonin supplements with your doctor."
    });
  }
  
  // Always include preventive care
  recommendations.push({
    title: "Preventive Care",
    description: "Stay up to date with recommended screenings for cancer, heart disease, and other conditions based on your age, sex, and risk factors."
  });
  
  return recommendations;
}

// Restart Calculator
function restartCalculator() {
  currentQuestionIndex = 0;
  userAnswers = {};
  calculationResults = {};
  startAssessment();
}

// Print Results
function printResults() {
  window.print();
}