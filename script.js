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

/*Plan cards click*/
const plan_buttons = document.querySelectorAll(".plan-btn");
const plan_modal = document.querySelector("#plan-modal");
const modal_close = document.querySelector(".modal-close");

const modal_plan_name = document.querySelector("#modal-plan-name");
const modal_plan_description = document.querySelector("#modal-plan-description");
const modal_plan_amount = document.querySelector("#modal-plan-amount");
const modal_plan_duration = document.querySelector("#modal-plan-duration");
const modal_plan_features = document.querySelector("#modal-plan-features");

const plan_data = {
    starter: {
        name: "Starter",
        description: "For small and early goals",
        amount: "₹1,000",
        duration: "5+ Years",
        features: [
            "Flexible investment planning",
            "Goal-based planning",
            "Growth estimation"
        ]
    },

    growth: {
        name: "Growth",
        description: "For long-term future goals",
        amount: "₹3,000",
        duration: "8+ Years",
        features: [
            "Long-term goal planning",
            "SIP growth estimation",
            "Investment tracking"
        ]
    },

    "future-plus": {
        name: "Future Plus",
        description: "For bigger future goals",
        amount: "₹5,000",
        duration: "10+ Years",
        features: [
            "Higher investment planning",
            "Future goal estimation",
            "Long-term growth tracking"
        ]
    }
};


plan_buttons.forEach((button)=>{
    button.addEventListener("click",()=>{

        current_plan = button.dataset.plan;

        const selected_data = plan_data[current_plan];

        modal_plan_name.textContent = selected_data.name;
        modal_plan_description.textContent = selected_data.description;
        modal_plan_amount.textContent = selected_data.amount;
        modal_plan_duration.textContent = selected_data.duration;

        modal_plan_features.innerHTML = "";

        selected_data.features.forEach((feature)=>{
            const li = document.createElement("li");
            li.textContent = feature;
            modal_plan_features.appendChild(li);
        });

        plan_modal.style.display = "flex";

    });
});
modal_close.addEventListener("click",()=>{
    plan_modal.style.display = "none";
});
const modal_select_plan =
    document.querySelector("#modal-select-plan");

modal_select_plan.addEventListener("click",(event)=>{

    event.preventDefault();

    localStorage.setItem(
        "future_secure_selected_plan",
        current_plan
    );

    window.location.href = "signup.html";

});

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

/*Menu_Toggle*/
const menu_toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menu_toggle.addEventListener("click",()=>{
    nav.classList.toggle("active");
});


/*FAQ questions*/
const faq_questions = document.querySelectorAll(".faq-question");

faq_questions.forEach((question)=>{
    question.addEventListener("click",()=>{

        const answer = question.nextElementSibling;
        const icon = question.querySelector("i");

        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
        }
        else{
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
        }

    });
});
