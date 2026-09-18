/*About-section*/

const about_cards= document.querySelector(".about-cards");
const observer = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
             const cards = about_cards.querySelectorAll(".about-card");
             cards.forEach((card,index)=>{
               card.style.animationDelay=`${index*0.25}s`;
               card.classList.add("show");
             });  
             observer.unobserve(about_cards);  
            }
});

observer.observe(about_cards);


/*Head-section*/

const how_section = document.querySelector(".how-steps");
const how_observer = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
             const steps = how_section.querySelectorAll(".how-step");
             steps.forEach((step,index)=>{
               step.style.animationDelay=`${index*0.25}s`;
               step.classList.add("show");
             });  
             how_observer.unobserve(how_section);  
            }
});

how_observer.observe(how_section);

/*  SIP Calculator Section */
const monthly_investment = document.querySelector("#monthly-investment");
const investment_duration = document.querySelector("#investment-duration");
const expected_return = document.querySelector("#expected-return");
const calculate_btn = document.querySelector(".calculate-btn");
const result_values = document.querySelectorAll(".result-item strong");

calculate_btn.addEventListener("click",()=>{
    const monthly = Number(monthly_investment.value);
    const years = Number(investment_duration.value);
    const annual_return = Number(expected_return.value);
    
    if (monthly <= 0 || years <= 0 || annual_return < 0) {
       alert("Please enter valid values."); 
       monthly_investment.value = "";
       investment_duration.value = "";
       expected_return.value = "";

       return;
    }

    const months= years*12;
    const monthly_rate = annual_return / 12 / 100;
    //SIP formula
    let total_value;

    if (monthly_rate === 0) {
      total_value = monthly * months;
    } else {
      total_value = monthly * ((Math.pow(1 + monthly_rate, months) - 1) / monthly_rate) * (1 + monthly_rate);
   }

    const invested_amount = monthly * months;
    const estimated_returns = total_value - invested_amount;
    result_values[0].textContent = `₹${Math.round(invested_amount).toLocaleString("en-IN")}`;
    result_values[1].textContent = `₹${Math.round(estimated_returns).toLocaleString("en-IN")}`;
    result_values[2].textContent = `₹${Math.round(total_value).toLocaleString("en-IN")}`;
    console.log(result_values.length);
});