/* ==================================================
   SIDEBAR
================================================== */

const sidebar_toggle =
    document.querySelector("#sidebar-toggle");

const dashboard_sidebar =
    document.querySelector("#dashboard-sidebar");

const user_name =
    document.querySelector("#user-name");

const welcome_name =
    document.querySelector("#welcome-name");

const logout_btn =
    document.querySelector("#logout-btn");

const saved_user =
    JSON.parse(
        localStorage.getItem("future_secure_user")
    );


/* ==================================================
   DASHBOARD PROTECTION
================================================== */

if(saved_user === null){

    window.location.href = "login.html";

}
else{

    user_name.textContent = "Profile";

    welcome_name.textContent =
        saved_user.name;

}


/* ==================================================
   SIDEBAR TOGGLE
================================================== */

sidebar_toggle.addEventListener(
    "click",
    ()=>{

        dashboard_sidebar.classList.toggle(
            "active"
        );

    }
);


/* ==================================================
   SIDEBAR NAVIGATION
================================================== */

const dashboard_nav_links =
    document.querySelectorAll(
        ".dashboard-nav-link"
    );

dashboard_nav_links.forEach((link)=>{

    link.addEventListener(
        "click",
        ()=>{

            dashboard_nav_links.forEach((item)=>{

                item.classList.remove("active");

            });

            link.classList.add("active");


            if(window.innerWidth <= 768){

                dashboard_sidebar.classList.remove(
                    "active"
                );

            }

        }
    );

});


/* ==================================================
   LOGOUT
================================================== */

logout_btn.addEventListener(
    "click",
    ()=>{

        localStorage.removeItem(
            "future_secure_user"
        );

        window.location.href =
            "login.html";

    }
);


/* ==================================================
   PLAN SELECTED FROM LANDING PAGE
================================================== */

const pending_plan =
    localStorage.getItem(
        "future_secure_selected_plan"
    );

if(
    saved_user !== null &&
    pending_plan &&
    !saved_user.selected_plan
){

    saved_user.selected_plan =
        pending_plan;

    localStorage.setItem(
        "future_secure_user",
        JSON.stringify(saved_user)
    );

    localStorage.removeItem(
        "future_secure_selected_plan"
    );

}


/* ==================================================
   CHILD MODAL
================================================== */

const add_child_buttons =
    document.querySelectorAll(
        ".add-child-btn"
    );

const child_modal =
    document.querySelector(
        "#child-modal"
    );

const child_modal_close =
    document.querySelector(
        "#child-modal-close"
    );

const child_form_title =
    document.querySelector(
        "#child-form-title"
    );


/* OPEN ADD CHILD */

add_child_buttons.forEach((button)=>{

    button.addEventListener(
        "click",
        ()=>{

            child_form.reset();

            delete child_form.dataset.editId;

            child_form_title.textContent =
                "Add Your Child";

            clear_child_errors();

            child_modal.style.display =
                "flex";

        }
    );

});


/* CLOSE CHILD MODAL */

child_modal_close.addEventListener(
    "click",
    ()=>{

        child_modal.style.display =
            "none";

        child_form.reset();

        delete child_form.dataset.editId;

        child_form_title.textContent =
            "Add Your Child";

        clear_child_errors();

    }
);


/* CLOSE ON OUTSIDE CLICK */

child_modal.addEventListener(
    "click",
    (event)=>{

        if(event.target === child_modal){

            child_modal.style.display =
                "none";

        }

    }
);


/* ==================================================
   CHILD FORM
================================================== */

const child_form =
    document.querySelector(
        "#child-form"
    );

const child_name =
    document.querySelector(
        "#child-name"
    );

const child_age =
    document.querySelector(
        "#child-age"
    );

const child_goal =
    document.querySelector(
        "#child-goal"
    );

const target_amount =
    document.querySelector(
        "#target-amount"
    );

const monthly_investment =
    document.querySelector(
        "#monthly-investment"
    );

const investment_duration =
    document.querySelector(
        "#investment-duration"
    );

const expected_return =
    document.querySelector(
        "#expected-return"
    );


/* CHILD FORM ERRORS */

const child_name_error =
    document.querySelector(
        "#child-name-error"
    );

const child_age_error =
    document.querySelector(
        "#child-age-error"
    );

const child_goal_error =
    document.querySelector(
        "#child-goal-error"
    );

const target_amount_error =
    document.querySelector(
        "#target-amount-error"
    );

const monthly_investment_error =
    document.querySelector(
        "#monthly-investment-error"
    );

const investment_duration_error =
    document.querySelector(
        "#investment-duration-error"
    );

const expected_return_error =
    document.querySelector(
        "#expected-return-error"
    );


function clear_child_errors(){

    child_name_error.textContent = "";

    child_age_error.textContent = "";

    child_goal_error.textContent = "";

    target_amount_error.textContent = "";

    monthly_investment_error.textContent = "";

    investment_duration_error.textContent = "";

    expected_return_error.textContent = "";

}


/* ==================================================
   DASHBOARD ELEMENTS
================================================== */

const children_list =
    document.querySelector(
        "#children-list"
    );

const total_children =
    document.querySelector(
        "#total-children"
    );

const active_goals =
    document.querySelector(
        "#active-goals"
    );

const total_monthly_investment =
    document.querySelector(
        "#total-monthly-investment"
    );

const total_estimated_growth =
    document.querySelector(
        "#total-estimated-growth"
    );

const empty_children =
    document.querySelector(
        "#empty-children"
    );

const children_section =
    document.querySelector(
        "#children-section"
    );


/* ==================================================
   CHILD PROFILE MODAL
================================================== */

const profile_modal =
    document.querySelector(
        "#profile-modal"
    );

const profile_modal_close =
    document.querySelector(
        "#profile-modal-close"
    );

const profile_name =
    document.querySelector(
        "#profile-name"
    );

const profile_goal =
    document.querySelector(
        "#profile-goal"
    );

const profile_age =
    document.querySelector(
        "#profile-age"
    );

const profile_target =
    document.querySelector(
        "#profile-target"
    );

const profile_monthly =
    document.querySelector(
        "#profile-monthly"
    );

const profile_duration =
    document.querySelector(
        "#profile-duration"
    );

const profile_return =
    document.querySelector(
        "#profile-return"
    );

const profile_future_value =
    document.querySelector(
        "#profile-future-value"
    );


/* ==================================================
   STORAGE
================================================== */

function get_children(){

    if(saved_user === null){

        return [];

    }


    const children_key =
        "future_secure_children_" +
        saved_user.email;


    return JSON.parse(
        localStorage.getItem(
            children_key
        )
    ) || [];

}


function save_children(children){

    const children_key =
        "future_secure_children_" +
        saved_user.email;


    localStorage.setItem(
        children_key,
        JSON.stringify(children)
    );

}


/* ==================================================
   MONEY FORMAT
================================================== */

function format_money(value){

    return "₹" +
        Math.round(value)
            .toLocaleString("en-IN");

}


/* ==================================================
   FUTURE VALUE CALCULATION
================================================== */

function calculate_future_value(
    monthly,
    years,
    annual_return
){

    const months =
        years * 12;

    const monthly_rate =
        annual_return / 12 / 100;


    if(monthly_rate === 0){

        return monthly * months;

    }


    return monthly *
        (
            (
                Math.pow(
                    1 + monthly_rate,
                    months
                ) - 1
            ) / monthly_rate
        ) *
        (1 + monthly_rate);

}


/* ==================================================
   DISPLAY CHILDREN
================================================== */

function display_children(){

    const saved_children =
        get_children();


    children_list.innerHTML = "";

    total_children.textContent =
        saved_children.length;

    active_goals.textContent =
        saved_children.length;


    if(saved_children.length === 0){

        children_section.style.display =
            "none";

        empty_children.style.display =
            "block";

        update_dashboard_summary();

        render_goals_section();

        render_investments_section();

        return;

    }


    children_section.style.display =
        "block";

    empty_children.style.display =
        "none";


    saved_children.forEach((child)=>{

        const duration =
            Number(child.duration) || 1;

        const annual_return =
            Number(child.expected_return) || 0;

        const monthly =
            Number(child.monthly_investment) || 0;

        const target =
            Number(child.target_amount) || 0;


        const future_value =
            calculate_future_value(
                monthly,
                duration,
                annual_return
            );


        const invested_amount =
            monthly *
            duration *
            12;


        let progress = 0;


        if(target > 0){

            progress =
                (
                    invested_amount /
                    target
                ) * 100;

        }


        progress =
            Math.min(
                Math.max(progress,0),
                100
            );


        const child_card =
            document.createElement(
                "div"
            );


        child_card.classList.add(
            "child-card"
        );


        child_card.innerHTML = `

            <div class="child-card-header">

                <div class="child-card-icon">

                    <i class="fa-solid fa-child"></i>

                </div>

                <div>

                    <h3>
                        ${child.name}
                    </h3>

                    <span>
                        Age: ${child.age} years
                    </span>

                </div>

            </div>


            <div class="child-details">

                <div class="child-detail">

                    <span>
                        Financial Goal
                    </span>

                    <strong>
                        ${child.goal}
                    </strong>

                </div>


                <div class="child-detail">

                    <span>
                        Target Amount
                    </span>

                    <strong>
                        ${format_money(target)}
                    </strong>

                </div>


                <div class="child-detail">

                    <span>
                        Monthly Investment
                    </span>

                    <strong>
                        ${format_money(monthly)}
                    </strong>

                </div>

            </div>


            <div class="plan-summary">

                <div class="plan-summary-item">

                    <span>
                        Duration
                    </span>

                    <strong>
                        ${duration} Years
                    </strong>

                </div>


                <div class="plan-summary-item">

                    <span>
                        Estimated Value
                    </span>

                    <strong>
                        ${format_money(future_value)}
                    </strong>

                </div>

            </div>


            <div class="progress-section">

                <div class="progress-header">

                    <span>
                        Goal Progress
                    </span>

                    <strong>
                        ${Math.round(progress)}%
                    </strong>

                </div>


                <div class="progress-bar">

                    <div
                        class="progress-fill"
                        style="width:${progress}%">
                    </div>

                </div>

            </div>


            <div class="child-card-actions">

                <button
                    class="child-action-btn view-child-btn"
                    data-id="${child.id}"
                    type="button">

                    View

                </button>


                <button
                    class="child-action-btn edit-child-btn"
                    data-id="${child.id}"
                    type="button">

                    Edit

                </button>


                <button
                    class="child-action-btn delete-child-btn"
                    data-id="${child.id}"
                    type="button">

                    Delete

                </button>

            </div>

        `;


        children_list.appendChild(
            child_card
        );

    });


    add_card_events();

    update_dashboard_summary();

    render_goals_section();

    render_investments_section();

}


/* ==================================================
   CHILD CARD EVENTS
================================================== */

function add_card_events(){

    const view_buttons =
        document.querySelectorAll(
            ".view-child-btn"
        );

    const edit_buttons =
        document.querySelectorAll(
            ".edit-child-btn"
        );

    const delete_buttons =
        document.querySelectorAll(
            ".delete-child-btn"
        );


    /* VIEW */

    view_buttons.forEach((button)=>{

        button.addEventListener(
            "click",
            ()=>{

                view_child(
                    Number(
                        button.dataset.id
                    )
                );

            }
        );

    });


    /* EDIT */

    edit_buttons.forEach((button)=>{

        button.addEventListener(
            "click",
            ()=>{

                edit_child(
                    Number(
                        button.dataset.id
                    )
                );

            }
        );

    });


    /* DELETE */

    delete_buttons.forEach((button)=>{

        button.addEventListener(
            "click",
            ()=>{

                delete_child(
                    Number(
                        button.dataset.id
                    )
                );

            }
        );

    });

}


/* ==================================================
   VIEW CHILD
================================================== */

function view_child(child_id){

    const saved_children =
        get_children();


    const child =
        saved_children.find(
            (item)=>
                item.id === child_id
        );


    if(!child){

        return;

    }


    const duration =
        Number(child.duration) || 1;

    const annual_return =
        Number(child.expected_return) || 0;

    const monthly =
        Number(child.monthly_investment) || 0;


    const future_value =
        calculate_future_value(
            monthly,
            duration,
            annual_return
        );


    profile_name.textContent =
        child.name;

    profile_goal.textContent =
        child.goal;

    profile_age.textContent =
        child.age +
        " years";

    profile_target.textContent =
        format_money(
            Number(
                child.target_amount
            )
        );

    profile_monthly.textContent =
        format_money(monthly);

    profile_duration.textContent =
        duration +
        " Years";

    profile_return.textContent =
        annual_return +
        "%";

    profile_future_value.textContent =
        format_money(
            future_value
        );


    profile_modal.style.display =
        "flex";

}


/* CLOSE CHILD PROFILE */

profile_modal_close.addEventListener(
    "click",
    ()=>{

        profile_modal.style.display =
            "none";

    }
);


profile_modal.addEventListener(
    "click",
    (event)=>{

        if(event.target === profile_modal){

            profile_modal.style.display =
                "none";

        }

    }
);


/* ==================================================
   EDIT CHILD
================================================== */

function edit_child(child_id){

    const saved_children =
        get_children();


    const child =
        saved_children.find(
            (item)=>
                item.id === child_id
        );


    if(!child){

        return;

    }


    child_name.value =
        child.name;

    child_age.value =
        child.age;

    child_goal.value =
        child.goal;

    target_amount.value =
        child.target_amount;

    monthly_investment.value =
        child.monthly_investment;

    investment_duration.value =
        child.duration;

    expected_return.value =
        child.expected_return;


    child_form.dataset.editId =
        child.id;


    child_form_title.textContent =
        "Edit Child Profile";


    clear_child_errors();


    child_modal.style.display =
        "flex";

}


/* ==================================================
   SAVE CHILD
================================================== */

child_form.addEventListener(
    "submit",
    (event)=>{

        event.preventDefault();


        clear_child_errors();


        const name =
            child_name.value.trim();

        const age =
            Number(
                child_age.value
            );

        const goal =
            child_goal.value;

        const target =
            Number(
                target_amount.value
            );

        const monthly =
            Number(
                monthly_investment.value
            );

        const duration =
            Number(
                investment_duration.value
            );

        const annual_return =
            Number(
                expected_return.value
            );


        let is_valid = true;


        /* NAME */

        if(name === ""){

            child_name_error.textContent =
                "Please enter your child's name.";

            is_valid = false;

        }


        /* AGE */

        if(child_age.value === ""){

            child_age_error.textContent =
                "Please enter your child's age.";

            is_valid = false;

        }
        else if(age < 0 || age > 18){

            child_age_error.textContent =
                "Age must be between 0 and 18.";

            is_valid = false;

        }


        /* GOAL */

        if(goal === ""){

            child_goal_error.textContent =
                "Please select a financial goal.";

            is_valid = false;

        }


        /* TARGET */

        if(target <= 0){

            target_amount_error.textContent =
                "Please enter a valid target amount.";

            is_valid = false;

        }


        /* MONTHLY */

        if(monthly <= 0){

            monthly_investment_error.textContent =
                "Please enter a valid monthly investment.";

            is_valid = false;

        }


        /* DURATION */

        if(duration <= 0){

            investment_duration_error.textContent =
                "Please enter a valid duration.";

            is_valid = false;

        }


        /* RETURN */

        if(expected_return.value === ""){

            expected_return_error.textContent =
                "Please enter expected return.";

            is_valid = false;

        }
        else if(annual_return < 0){

            expected_return_error.textContent =
                "Return cannot be negative.";

            is_valid = false;

        }


        if(!is_valid){

            return;

        }


        const saved_children =
            get_children();


        const edit_id =
            Number(
                child_form.dataset.editId
            );


        /* UPDATE */

        if(edit_id){

            const child_index =
                saved_children.findIndex(
                    (item)=>
                        item.id === edit_id
                );


            if(child_index !== -1){

                saved_children[child_index] = {

                    id:edit_id,

                    name:name,

                    age:age,

                    goal:goal,

                    target_amount:target,

                    monthly_investment:monthly,

                    duration:duration,

                    expected_return:annual_return

                };

            }


            alert(
                "Child profile updated successfully!"
            );

        }


        /* ADD */

        else{

            const child = {

                id:Date.now(),

                name:name,

                age:age,

                goal:goal,

                target_amount:target,

                monthly_investment:monthly,

                duration:duration,

                expected_return:annual_return

            };


            saved_children.push(
                child
            );


            alert(
                "Child profile added successfully!"
            );

        }


        save_children(
            saved_children
        );


        child_form.reset();

        delete child_form.dataset.editId;

        child_form_title.textContent =
            "Add Your Child";


        child_modal.style.display =
            "none";


        display_children();

    }
);


/* ==================================================
   DELETE CHILD
================================================== */

function delete_child(child_id){

    const confirm_delete =
        confirm(
            "Are you sure you want to delete this child profile?"
        );


    if(!confirm_delete){

        return;

    }


    let saved_children =
        get_children();


    saved_children =
        saved_children.filter(
            (child)=>
                child.id !== child_id
        );


    save_children(
        saved_children
    );


    display_children();

}


/* ==================================================
   DASHBOARD SUMMARY
================================================== */

function update_dashboard_summary(){

    const saved_children =
        get_children();


    total_children.textContent =
        saved_children.length;


    active_goals.textContent =
        saved_children.length;


    const total_monthly =
        saved_children.reduce(
            (total,child)=>{

                return total +
                    (
                        Number(
                            child.monthly_investment
                        ) || 0
                    );

            },
            0
        );


    total_monthly_investment.textContent =
        format_money(
            total_monthly
        );


    const total_growth =
        saved_children.reduce(
            (total,child)=>{

                const monthly =
                    Number(
                        child.monthly_investment
                    ) || 0;


                const duration =
                    Number(
                        child.duration
                    ) || 1;


                const annual_return =
                    Number(
                        child.expected_return
                    ) || 0;


                const future_value =
                    calculate_future_value(
                        monthly,
                        duration,
                        annual_return
                    );


                const invested =
                    monthly *
                    duration *
                    12;


                return total +
                    (
                        future_value -
                        invested
                    );

            },
            0
        );


    total_estimated_growth.textContent =
        format_money(
            total_growth
        );

}


/* ==================================================
   GOALS SECTION
================================================== */

function render_goals_section(){

    const goals_list =
        document.querySelector(
            "#goals-list"
        );


    if(!goals_list){

        return;

    }


    const saved_children =
        get_children();


    goals_list.innerHTML = "";


    if(saved_children.length === 0){

        goals_list.innerHTML = `

            <div class="dashboard-empty">

                <div class="empty-icon">

                    <i class="fa-solid fa-bullseye"></i>

                </div>

                <h2>
                    No Goals Yet
                </h2>

                <p>
                    Add a child profile to start
                    planning their financial goals.
                </p>

            </div>

        `;

        return;

    }


    saved_children.forEach((child)=>{

        const monthly =
            Number(
                child.monthly_investment
            ) || 0;


        const duration =
            Number(
                child.duration
            ) || 1;


        const target =
            Number(
                child.target_amount
            ) || 0;


        const invested_amount =
            monthly *
            duration *
            12;


        let progress = 0;


        if(target > 0){

            progress =
                (
                    invested_amount /
                    target
                ) * 100;

        }


        progress =
            Math.min(
                Math.max(progress,0),
                100
            );


        const goal_card =
            document.createElement(
                "div"
            );


        goal_card.classList.add(
            "goal-card"
        );


        goal_card.innerHTML = `

            <div class="goal-card-header">

                <div class="goal-card-icon">

                    <i class="fa-solid fa-bullseye"></i>

                </div>

                <div>

                    <h3>
                        ${child.name}
                    </h3>

                    <span>
                        ${child.goal}
                    </span>

                </div>

            </div>


            <div class="goal-row">

                <span>
                    Target Amount
                </span>

                <strong>
                    ${format_money(target)}
                </strong>

            </div>


            <div class="goal-row">

                <span>
                    Amount Planned
                </span>

                <strong>
                    ${format_money(
                        invested_amount
                    )}
                </strong>

            </div>


            <div class="goal-row">

                <span>
                    Progress
                </span>

                <strong>
                    ${Math.round(progress)}%
                </strong>

            </div>

        `;


        goals_list.appendChild(
            goal_card
        );

    });

}


/* ==================================================
   INVESTMENTS SECTION
================================================== */

function render_investments_section(){

    const investments_list =
        document.querySelector(
            "#investments-list"
        );


    if(!investments_list){

        return;

    }


    const saved_children =
        get_children();


    investments_list.innerHTML = "";


    if(saved_children.length === 0){

        investments_list.innerHTML = `

            <div class="dashboard-empty">

                <div class="empty-icon">

                    <i class="fa-solid fa-chart-line"></i>

                </div>

                <h2>
                    No Investments Yet
                </h2>

                <p>
                    Add a child profile to view
                    your investment details.
                </p>

            </div>

        `;

        return;

    }


    saved_children.forEach((child)=>{

        const monthly =
            Number(
                child.monthly_investment
            ) || 0;


        const duration =
            Number(
                child.duration
            ) || 1;


        const annual_return =
            Number(
                child.expected_return
            ) || 0;


        const future_value =
            calculate_future_value(
                monthly,
                duration,
                annual_return
            );


        const investment_card =
            document.createElement(
                "div"
            );


        investment_card.classList.add(
            "investment-card"
        );


        investment_card.innerHTML = `

            <h3>
                ${child.name}'s Investment
            </h3>


            <div class="investment-grid">

                <div class="investment-item">

                    <span>
                        Monthly Investment
                    </span>

                    <strong>
                        ${format_money(monthly)}
                    </strong>

                </div>


                <div class="investment-item">

                    <span>
                        Duration
                    </span>

                    <strong>
                        ${duration} Years
                    </strong>

                </div>


                <div class="investment-item">

                    <span>
                        Expected Return
                    </span>

                    <strong>
                        ${annual_return}%
                    </strong>

                </div>


                <div class="investment-item">

                    <span>
                        Estimated Value
                    </span>

                    <strong>
                        ${format_money(
                            future_value
                        )}
                    </strong>

                </div>

            </div>

        `;


        investments_list.appendChild(
            investment_card
        );

    });

}


/* ==================================================
   PAYMENT STORAGE
================================================== */

function get_payment_record(){

    if(saved_user === null){

        return null;

    }


    const payment_key =
        "future_secure_payment_" +
        saved_user.email;


    return JSON.parse(
        localStorage.getItem(
            payment_key
        )
    ) || null;

}


/* ==================================================
   PLAN DETAILS
================================================== */

const investment_plans = [

    {
        key:"starter",
        name:"Starter",
        monthly:1000,
        duration:"5+ Years"
    },

    {
        key:"growth",
        name:"Growth",
        monthly:3000,
        duration:"8+ Years"
    },

    {
        key:"future-plus",
        name:"Future Plus",
        monthly:5000,
        duration:"10+ Years"
    }

];


function get_plan_details(plan_key){

    return investment_plans.find(
        (plan)=>
            plan.key === plan_key
    ) || null;

}


/* ==================================================
   DASHBOARD PROFILE
================================================== */

function render_dashboard_profile(){

    const dashboard_profile_name =
        document.querySelector(
            "#dashboard-profile-name"
        );

    const dashboard_profile_email =
        document.querySelector(
            "#dashboard-profile-email"
        );

    const dashboard_profile_plan =
        document.querySelector(
            "#dashboard-profile-plan"
        );

    const dashboard_profile_payment =
        document.querySelector(
            "#dashboard-profile-payment"
        );


    if(dashboard_profile_name){

        dashboard_profile_name.textContent =
            saved_user.name;

    }


    if(dashboard_profile_email){

        dashboard_profile_email.textContent =
            saved_user.email;

    }


    const selected_plan =
        get_plan_details(
            saved_user.selected_plan
        );


    if(dashboard_profile_plan){

        dashboard_profile_plan.textContent =
            selected_plan
                ? selected_plan.name
                : "Not selected";

    }


    const payment =
        get_payment_record();


    if(dashboard_profile_payment){

        if(
            payment &&
            payment.plan === saved_user.selected_plan &&
            payment.status === "success"
        ){

            dashboard_profile_payment.textContent =
                "Paid";

        }
        else{

            dashboard_profile_payment.textContent =
                "Not Paid";

        }

    }

}


/* ==================================================
   PROFILE BUTTON
================================================== */

const profile_btn =
    document.querySelector(
        "#profile-btn"
    );


profile_btn.addEventListener(
    "click",
    (event)=>{

        event.preventDefault();


        const profile_section =
            document.querySelector(
                "#profile-section"
            );


        if(profile_section){

            profile_section.scrollIntoView({
                behavior:"smooth"
            });

        }


        if(window.innerWidth <= 768){

            dashboard_sidebar.classList.remove(
                "active"
            );

        }

    }
);


/* ==================================================
   EDIT PROFILE
================================================== */

const edit_profile_btn =
    document.querySelector(
        "#edit-profile-btn"
    );

const edit_profile_modal =
    document.querySelector(
        "#edit-profile-modal"
    );

const edit_profile_modal_close =
    document.querySelector(
        "#edit-profile-modal-close"
    );

const cancel_profile_btn =
    document.querySelector(
        "#cancel-profile-btn"
    );

const edit_profile_form =
    document.querySelector(
        "#edit-profile-form"
    );

const edit_profile_name =
    document.querySelector(
        "#edit-profile-name"
    );

const edit_profile_email =
    document.querySelector(
        "#edit-profile-email"
    );

const edit_profile_name_error =
    document.querySelector(
        "#edit-profile-name-error"
    );

const edit_profile_email_error =
    document.querySelector(
        "#edit-profile-email-error"
    );


/* OPEN EDIT PROFILE */

edit_profile_btn.addEventListener(
    "click",
    ()=>{

        edit_profile_name.value =
            saved_user.name;

        edit_profile_email.value =
            saved_user.email;

        edit_profile_name_error.textContent =
            "";

        edit_profile_email_error.textContent =
            "";

        edit_profile_modal.style.display =
            "flex";

    }
);


/* CLOSE EDIT PROFILE */

function close_edit_profile(){

    edit_profile_modal.style.display =
        "none";

}


edit_profile_modal_close.addEventListener(
    "click",
    close_edit_profile
);

cancel_profile_btn.addEventListener(
    "click",
    close_edit_profile
);


edit_profile_modal.addEventListener(
    "click",
    (event)=>{

        if(event.target === edit_profile_modal){

            close_edit_profile();

        }

    }
);


/* SAVE EDIT PROFILE */

edit_profile_form.addEventListener(
    "submit",
    (event)=>{

        event.preventDefault();


        edit_profile_name_error.textContent =
            "";

        edit_profile_email_error.textContent =
            "";


        const updated_name =
            edit_profile_name.value.trim();

        const updated_email =
            edit_profile_email.value.trim();


        let is_valid = true;


        /* NAME */

        if(updated_name === ""){

            edit_profile_name_error.textContent =
                "Please enter your name.";

            is_valid = false;

        }


        /* EMAIL */

        const email_pattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if(updated_email === ""){

            edit_profile_email_error.textContent =
                "Please enter your email.";

            is_valid = false;

        }
        else if(
            !email_pattern.test(
                updated_email
            )
        ){

            edit_profile_email_error.textContent =
                "Please enter a valid email.";

            is_valid = false;

        }


        if(!is_valid){

            return;

        }


        const old_email =
            saved_user.email;


        /* MOVE CHILD DATA IF EMAIL CHANGES */

        if(
            old_email !== updated_email
        ){

            const old_children_key =
                "future_secure_children_" +
                old_email;

            const new_children_key =
                "future_secure_children_" +
                updated_email;


            const old_children =
                localStorage.getItem(
                    old_children_key
                );


            if(
                old_children !== null &&
                localStorage.getItem(
                    new_children_key
                ) === null
            ){

                localStorage.setItem(
                    new_children_key,
                    old_children
                );

                localStorage.removeItem(
                    old_children_key
                );

            }


            /* MOVE PAYMENT DATA */

            const old_payment_key =
                "future_secure_payment_" +
                old_email;

            const new_payment_key =
                "future_secure_payment_" +
                updated_email;


            const old_payment =
                localStorage.getItem(
                    old_payment_key
                );


            if(
                old_payment !== null &&
                localStorage.getItem(
                    new_payment_key
                ) === null
            ){

                localStorage.setItem(
                    new_payment_key,
                    old_payment
                );

                localStorage.removeItem(
                    old_payment_key
                );

            }

        }


        /* UPDATE USER */

        saved_user.name =
            updated_name;

        saved_user.email =
            updated_email;


        localStorage.setItem(
            "future_secure_user",
            JSON.stringify(
                saved_user
            )
        );


        /* UPDATE DASHBOARD */

        user_name.textContent =
            "Profile";

        welcome_name.textContent =
            saved_user.name;


        render_dashboard_profile();

        display_children();

        update_dashboard_summary();

        render_goals_section();

        render_investments_section();


        close_edit_profile();


        alert(
            "Profile updated successfully!"
        );

    }
);


/* ==================================================
   CHANGE PASSWORD
================================================== */

const change_password_btn =
    document.querySelector(
        "#change-password-btn"
    );

const change_password_modal =
    document.querySelector(
        "#change-password-modal"
    );

const change_password_close =
    document.querySelector(
        "#change-password-close"
    );

const cancel_password_btn =
    document.querySelector(
        "#cancel-password-btn"
    );

const change_password_form =
    document.querySelector(
        "#change-password-form"
    );

const current_password =
    document.querySelector(
        "#current-password"
    );

const new_password =
    document.querySelector(
        "#new-password"
    );

const confirm_new_password =
    document.querySelector(
        "#confirm-new-password"
    );

const current_password_error =
    document.querySelector(
        "#current-password-error"
    );

const new_password_error =
    document.querySelector(
        "#new-password-error"
    );

const confirm_new_password_error =
    document.querySelector(
        "#confirm-new-password-error"
    );


/* OPEN CHANGE PASSWORD */

change_password_btn.addEventListener(
    "click",
    ()=>{

        change_password_form.reset();

        current_password_error.textContent =
            "";

        new_password_error.textContent =
            "";

        confirm_new_password_error.textContent =
            "";

        change_password_modal.style.display =
            "flex";

    }
);


/* CLOSE */

function close_change_password(){

    change_password_modal.style.display =
        "none";

}


change_password_close.addEventListener(
    "click",
    close_change_password
);

cancel_password_btn.addEventListener(
    "click",
    close_change_password
);


change_password_modal.addEventListener(
    "click",
    (event)=>{

        if(
            event.target ===
            change_password_modal
        ){

            close_change_password();

        }

    }
);


/* SAVE NEW PASSWORD */

change_password_form.addEventListener(
    "submit",
    (event)=>{

        event.preventDefault();


        current_password_error.textContent =
            "";

        new_password_error.textContent =
            "";

        confirm_new_password_error.textContent =
            "";


        const current =
            current_password.value;

        const new_value =
            new_password.value;

        const confirm =
            confirm_new_password.value;


        let is_valid = true;


        /* CURRENT */

        if(current === ""){

            current_password_error.textContent =
                "Please enter your current password.";

            is_valid = false;

        }
        else if(
            current !== saved_user.password
        ){

            current_password_error.textContent =
                "Current password is incorrect.";

            is_valid = false;

        }


        /* NEW PASSWORD */

        if(new_value === ""){

            new_password_error.textContent =
                "Please create a new password.";

            is_valid = false;

        }
        else if(new_value.length < 8){

            new_password_error.textContent =
                "Password must be at least 8 characters.";

            is_valid = false;

        }
        else if(!/[A-Z]/.test(new_value)){

            new_password_error.textContent =
                "Password must contain an uppercase letter.";

            is_valid = false;

        }
        else if(!/[a-z]/.test(new_value)){

            new_password_error.textContent =
                "Password must contain a lowercase letter.";

            is_valid = false;

        }
        else if(!/[0-9]/.test(new_value)){

            new_password_error.textContent =
                "Password must contain a number.";

            is_valid = false;

        }
        else if(
            !/[!@#$%^&*(),.?":{}|<>_\-]/
                .test(new_value)
        ){

            new_password_error.textContent =
                "Password must contain a special character.";

            is_valid = false;

        }
        else if(
            new_value === saved_user.password
        ){

            new_password_error.textContent =
                "New password must be different.";

            is_valid = false;

        }


        /* CONFIRM */

        if(confirm === ""){

            confirm_new_password_error.textContent =
                "Please confirm your new password.";

            is_valid = false;

        }
        else if(
            new_value !== confirm
        ){

            confirm_new_password_error.textContent =
                "Passwords do not match.";

            is_valid = false;

        }


        if(!is_valid){

            return;

        }


        saved_user.password =
            new_value;


        localStorage.setItem(
            "future_secure_user",
            JSON.stringify(
                saved_user
            )
        );


        change_password_form.reset();

        close_change_password();


        alert(
            "Password updated successfully!"
        );

    }
);


/* ==================================================
   CHANGE PLAN
================================================== */

const change_plan_btn =
    document.querySelector(
        "#change-plan-btn"
    );

const change_plan_modal =
    document.querySelector(
        "#change-plan-modal"
    );

const change_plan_close =
    document.querySelector(
        "#change-plan-close"
    );

const plan_choice_list =
    document.querySelector(
        "#plan-choice-list"
    );


/* RENDER PLANS */

function render_plan_choices(){

    plan_choice_list.innerHTML =
        "";


    investment_plans.forEach((plan)=>{

        const plan_card =
            document.createElement(
                "div"
            );


        plan_card.classList.add(
            "plan-choice-card"
        );


        const is_selected =
            saved_user.selected_plan ===
            plan.key;


        if(is_selected){

            plan_card.classList.add(
                "selected"
            );

        }


        plan_card.innerHTML = `

            <div class="plan-choice-info">

                <h3>
                    ${plan.name}
                </h3>

                <p>
                    ₹${plan.monthly.toLocaleString("en-IN")}
                    / month
                </p>

                <span>
                    Suggested duration:
                    ${plan.duration}
                </span>

            </div>


            <button
                type="button"
                data-plan="${plan.key}">

                ${
                    is_selected
                        ? "Selected"
                        : "Choose Plan"
                }

            </button>

        `;


        plan_choice_list.appendChild(
            plan_card
        );

    });


    const plan_buttons =
        plan_choice_list.querySelectorAll(
            "button"
        );


    plan_buttons.forEach((button)=>{

        button.addEventListener(
            "click",
            ()=>{

                const selected_plan =
                    button.dataset.plan;


                if(
                    saved_user.selected_plan ===
                    selected_plan
                ){

                    change_plan_modal.style.display =
                        "none";

                    return;

                }


                saved_user.selected_plan =
                    selected_plan;


                localStorage.setItem(
                    "future_secure_user",
                    JSON.stringify(
                        saved_user
                    )
                );


                render_dashboard_profile();

                update_payment_button();


                change_plan_modal.style.display =
                    "none";


                alert(
                    "Investment plan updated successfully!"
                );

            }
        );

    });

}


/* OPEN CHANGE PLAN */

change_plan_btn.addEventListener(
    "click",
    ()=>{

        render_plan_choices();

        change_plan_modal.style.display =
            "flex";

    }
);


/* CLOSE */

function close_change_plan(){

    change_plan_modal.style.display =
        "none";

}


change_plan_close.addEventListener(
    "click",
    close_change_plan
);


change_plan_modal.addEventListener(
    "click",
    (event)=>{

        if(
            event.target ===
            change_plan_modal
        ){

            close_change_plan();

        }

    }
);


/* ==================================================
   PAYMENT
================================================== */

const payment_btn =
    document.querySelector(
        "#payment-btn"
    );

const payment_modal =
    document.querySelector(
        "#payment-modal"
    );

const payment_close =
    document.querySelector(
        "#payment-close"
    );

const payment_step =
    document.querySelector(
        "#payment-step"
    );

const payment_success =
    document.querySelector(
        "#payment-success"
    );

const payment_plan_name =
    document.querySelector(
        "#payment-plan-name"
    );

const payment_plan_amount =
    document.querySelector(
        "#payment-plan-amount"
    );

const demo_payment_btn =
    document.querySelector(
        "#demo-payment-btn"
    );

const payment_success_close =
    document.querySelector(
        "#payment-success-close"
    );

const success_plan =
    document.querySelector(
        "#success-plan"
    );

const success_method =
    document.querySelector(
        "#success-method"
    );

const success_amount =
    document.querySelector(
        "#success-amount"
    );


/* ==================================================
   PAYMENT DETAILS BOX
================================================== */

const payment_form_group =
    document.querySelector(
        ".payment-form-group"
    );


const payment_details =
    document.createElement(
        "div"
    );


payment_details.id =
    "payment-details";

payment_form_group.insertAdjacentElement(
    "afterend",
    payment_details
);


/* ==================================================
   PAYMENT METHOD FIELDS
================================================== */

function render_payment_fields(){

    payment_details.innerHTML =
        "";


    const selected_method =
        document.querySelector(
            'input[name="payment-method"]:checked'
        );


    if(!selected_method){

        return;

    }


    const method =
        selected_method.value;


    /* UPI */

    if(method === "UPI"){

        payment_details.innerHTML = `

            <div class="account-form-group">

                <label for="upi-id">
                    UPI ID
                </label>

                <input
                    type="text"
                    id="upi-id"
                    placeholder="example@upi">

                <small id="upi-error"></small>

            </div>

        `;

    }


    /* CARD */

    if(method === "Card"){

        payment_details.innerHTML = `

            <div class="account-form-group">

                <label for="card-holder-name">
                    Cardholder Name
                </label>

                <input
                    type="text"
                    id="card-holder-name"
                    placeholder="Enter cardholder name">

                <small id="card-name-error"></small>

            </div>


            <div class="account-form-group">

                <label for="card-number">
                    Card Number
                </label>

                <input
                    type="text"
                    id="card-number"
                    maxlength="19"
                    inputmode="numeric"
                    placeholder="Enter card number">

                <small id="card-number-error"></small>

            </div>


            <div class="account-form-group">

                <label for="card-expiry">
                    Expiry Date
                </label>

                <input
                    type="text"
                    id="card-expiry"
                    maxlength="5"
                    placeholder="MM/YY">

                <small id="card-expiry-error"></small>

            </div>


            <div class="account-form-group">

                <label for="card-cvv">
                    CVV
                </label>

                <input
                    type="password"
                    id="card-cvv"
                    maxlength="4"
                    inputmode="numeric"
                    placeholder="Enter CVV">

                <small id="card-cvv-error"></small>

            </div>

        `;


        /* CARD NUMBER */

        const card_number =
            document.querySelector(
                "#card-number"
            );


        card_number.addEventListener(
            "input",
            ()=>{

                let value =
                    card_number.value
                        .replace(/\D/g,"")
                        .slice(0,19);


                value =
                    value.match(/.{1,4}/g);

                card_number.value =
                    value
                        ? value.join(" ")
                        : "";

            }
        );


        /* EXPIRY */

        const card_expiry =
            document.querySelector(
                "#card-expiry"
            );


        card_expiry.addEventListener(
            "input",
            ()=>{

                let value =
                    card_expiry.value
                        .replace(/\D/g,"")
                        .slice(0,4);


                if(value.length > 2){

                    value =
                        value.slice(0,2) +
                        "/" +
                        value.slice(2);

                }


                card_expiry.value =
                    value;

            }
        );

    }


    /* NET BANKING */

    if(method === "Net Banking"){

        payment_details.innerHTML = `

            <div class="account-form-group">

                <label for="bank-name">
                    Bank Name
                </label>

                <input
                    type="text"
                    id="bank-name"
                    placeholder="Enter your bank name">

                <small id="bank-error"></small>

            </div>

        `;

    }

}


/* METHOD CHANGE */

const payment_methods =
    document.querySelectorAll(
        'input[name="payment-method"]'
    );


payment_methods.forEach((method)=>{

    method.addEventListener(
        "change",
        render_payment_fields
    );

});


/* ==================================================
   PAYMENT BUTTON STATUS
================================================== */

function update_payment_button(){

    const selected_plan =
        get_plan_details(
            saved_user.selected_plan
        );


    if(!selected_plan){

        payment_btn.innerHTML = `

            <i class="fa-solid fa-list-check"></i>

            Choose a Plan

        `;

        payment_btn.disabled =
            false;

        return;

    }


    const payment =
        get_payment_record();


    if(
        payment &&
        payment.plan ===
        saved_user.selected_plan &&
        payment.status === "success"
    ){

        payment_btn.innerHTML = `

            <i class="fa-solid fa-circle-check"></i>

            Payment Completed

        `;

        payment_btn.disabled =
            true;

    }
    else{

        payment_btn.innerHTML = `

            <i class="fa-solid fa-credit-card"></i>

            Make Payment

        `;

        payment_btn.disabled =
            false;

    }

}


/* ==================================================
   OPEN PAYMENT
================================================== */

payment_btn.addEventListener(
    "click",
    ()=>{

        const selected_plan =
            get_plan_details(
                saved_user.selected_plan
            );


        /* NO PLAN */

        if(!selected_plan){

            render_plan_choices();

            change_plan_modal.style.display =
                "flex";

            return;

        }


        payment_plan_name.textContent =
            selected_plan.name;


        payment_plan_amount.textContent =
            "₹" +
            selected_plan.monthly.toLocaleString(
                "en-IN"
            );


        payment_step.style.display =
            "block";

        payment_success.style.display =
            "none";


        /* RESET PAYMENT METHOD */

        const default_method =
            document.querySelector(
                'input[name="payment-method"][value="UPI"]'
            );


        if(default_method){

            default_method.checked =
                true;

        }


        render_payment_fields();


        payment_modal.style.display =
            "flex";

    }
);


/* ==================================================
   CLOSE PAYMENT
================================================== */

function close_payment(){

    payment_modal.style.display =
        "none";

    payment_step.style.display =
        "block";

    payment_success.style.display =
        "none";

    payment_details.innerHTML =
        "";

}


payment_close.addEventListener(
    "click",
    close_payment
);


payment_modal.addEventListener(
    "click",
    (event)=>{

        if(
            event.target ===
            payment_modal
        ){

            close_payment();

        }

    }
);


/* ==================================================
   PAYMENT VALIDATION
================================================== */

function validate_payment(){

    const selected_method =
        document.querySelector(
            'input[name="payment-method"]:checked'
        );


    if(!selected_method){

        alert(
            "Please select a payment method."
        );

        return false;

    }


    const method =
        selected_method.value;


    /* UPI */

    if(method === "UPI"){

        const upi =
            document.querySelector(
                "#upi-id"
            );

        const error =
            document.querySelector(
                "#upi-error"
            );


        error.textContent =
            "";


        const upi_pattern =
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/;


        if(
            !upi ||
            upi.value.trim() === ""
        ){

            error.textContent =
                "Please enter your UPI ID.";

            return false;

        }


        if(
            !upi_pattern.test(
                upi.value.trim()
            )
        ){

            error.textContent =
                "Please enter a valid UPI ID.";

            return false;

        }

    }


    /* CARD */

    if(method === "Card"){

        const card_name =
            document.querySelector(
                "#card-holder-name"
            );

        const card_number =
            document.querySelector(
                "#card-number"
            );

        const card_expiry =
            document.querySelector(
                "#card-expiry"
            );

        const card_cvv =
            document.querySelector(
                "#card-cvv"
            );


        const card_name_error =
            document.querySelector(
                "#card-name-error"
            );

        const card_number_error =
            document.querySelector(
                "#card-number-error"
            );

        const card_expiry_error =
            document.querySelector(
                "#card-expiry-error"
            );

        const card_cvv_error =
            document.querySelector(
                "#card-cvv-error"
            );


        card_name_error.textContent =
            "";

        card_number_error.textContent =
            "";

        card_expiry_error.textContent =
            "";

        card_cvv_error.textContent =
            "";


        let valid = true;


        /* CARD NAME */

        if(
            card_name.value.trim() === ""
        ){

            card_name_error.textContent =
                "Please enter cardholder name.";

            valid = false;

        }


        /* CARD NUMBER */

        const clean_card_number =
            card_number.value.replace(
                /\s/g,
                ""
            );


        if(clean_card_number === ""){

            card_number_error.textContent =
                "Please enter card number.";

            valid = false;

        }
        else if(
            clean_card_number.length < 12
        ){

            card_number_error.textContent =
                "Please enter a valid card number.";

            valid = false;

        }


        /* EXPIRY */

        const expiry_value =
            card_expiry.value.trim();


        const expiry_pattern =
            /^(0[1-9]|1[0-2])\/\d{2}$/;


        if(expiry_value === ""){

            card_expiry_error.textContent =
                "Please enter expiry date.";

            valid = false;

        }
        else if(
            !expiry_pattern.test(
                expiry_value
            )
        ){

            card_expiry_error.textContent =
                "Use MM/YY format.";

            valid = false;

        }
        else{

            const parts =
                expiry_value.split("/");

            const month =
                Number(parts[0]);

            const year =
                Number(parts[1]);


            const current_date =
                new Date();

            const current_year =
                current_date.getFullYear() % 100;

            const current_month =
                current_date.getMonth() + 1;


            if(
                year < current_year ||
                (
                    year === current_year &&
                    month < current_month
                )
            ){

                card_expiry_error.textContent =
                    "Card expiry date is invalid.";

                valid = false;

            }

        }


        /* CVV */

        const cvv_value =
            card_cvv.value.trim();


        if(cvv_value === ""){

            card_cvv_error.textContent =
                "Please enter CVV.";

            valid = false;

        }
        else if(
            !/^\d{3,4}$/.test(
                cvv_value
            )
        ){

            card_cvv_error.textContent =
                "CVV must contain 3 or 4 digits.";

            valid = false;

        }


        if(!valid){

            return false;

        }

    }


    /* NET BANKING */

    if(method === "Net Banking"){

        const bank_name =
            document.querySelector(
                "#bank-name"
            );

        const bank_error =
            document.querySelector(
                "#bank-error"
            );


        bank_error.textContent =
            "";


        if(
            !bank_name ||
            bank_name.value.trim() === ""
        ){

            bank_error.textContent =
                "Please enter your bank name.";

            return false;

        }

    }


    return true;

}


/* ==================================================
   COMPLETE DEMO PAYMENT
================================================== */

demo_payment_btn.addEventListener(
    "click",
    ()=>{

        const selected_plan =
            get_plan_details(
                saved_user.selected_plan
            );


        if(!selected_plan){

            return;

        }


        const is_valid =
            validate_payment();


        if(!is_valid){

            return;

        }


        const selected_method =
            document.querySelector(
                'input[name="payment-method"]:checked'
            );


        const payment_method =
            selected_method.value;


        const payment_record = {

            plan:
                saved_user.selected_plan,

            amount:
                selected_plan.monthly,

            method:
                payment_method,

            status:
                "success",

            transaction_id:
                "FS" +
                Date.now(),

            date:
                new Date().toLocaleString(
                    "en-IN"
                )

        };


        const payment_key =
            "future_secure_payment_" +
            saved_user.email;


        localStorage.setItem(
            payment_key,
            JSON.stringify(
                payment_record
            )
        );


        /* SUCCESS DETAILS */

        success_plan.textContent =
            selected_plan.name;

        success_method.textContent =
            payment_method;

        success_amount.textContent =
            "₹" +
            selected_plan.monthly.toLocaleString(
                "en-IN"
            );


        payment_step.style.display =
            "none";

        payment_success.style.display =
            "block";


        render_dashboard_profile();

        update_payment_button();

    }
);


/* ==================================================
   PAYMENT SUCCESS DONE
================================================== */

payment_success_close.addEventListener(
    "click",
    ()=>{

        close_payment();

    }
);


/* ==================================================
   ESC KEY - CLOSE MODALS
================================================== */

document.addEventListener(
    "keydown",
    (event)=>{

        if(event.key !== "Escape"){

            return;

        }


        if(
            child_modal.style.display ===
            "flex"
        ){

            child_modal.style.display =
                "none";

        }


        if(
            profile_modal.style.display ===
            "flex"
        ){

            profile_modal.style.display =
                "none";

        }


        if(
            edit_profile_modal.style.display ===
            "flex"
        ){

            close_edit_profile();

        }


        if(
            change_password_modal.style.display ===
            "flex"
        ){

            close_change_password();

        }


        if(
            change_plan_modal.style.display ===
            "flex"
        ){

            close_change_plan();

        }


        if(
            payment_modal.style.display ===
            "flex"
        ){

            close_payment();

        }

    }
);

/* ==================================================
   UPI PAYMENT + QR CODE
================================================== */

// UPI section
const upiPaymentSection =
    document.getElementById("upi-payment-section");

// QR code container
const paymentQR =
    document.getElementById("payment-qr");

// UPI ID display
const displayUpiId =
    document.getElementById("display-upi-id");

// Amount display
const displayUpiAmount =
    document.getElementById("display-upi-amount");

// Payment methods
const paymentMethods =
    document.querySelectorAll(
        'input[name="payment-method"]'
    );


/* ==================================================
   GENERATE UPI QR CODE
================================================== */

function generatePaymentQR(amount){

    // Demo UPI ID
    const upiId = "futuresecure@upi";

    /*
       UPI payment information

       pa = UPI ID
       pn = Payee name
       am = Amount
       cu = Currency
    */

    const upiURL =
        `upi://pay?pa=${upiId}&pn=Future%20Secure&am=${amount}&cu=INR`;


    // Remove previous QR
    paymentQR.innerHTML = "";


    // Generate new QR
    new QRCode(paymentQR, {

        text: upiURL,

        width: 200,

        height: 200

    });


    // Show UPI ID
    displayUpiId.textContent = upiId;


    // Show amount
    displayUpiAmount.textContent =
        `₹${amount}`;

}


/* ==================================================
   GET CURRENT PAYMENT AMOUNT
================================================== */

function getPaymentAmount(){

    const amountElement =
        document.getElementById(
            "payment-plan-amount"
        );


    if(!amountElement){

        return "0";

    }


    const amount =
        amountElement.textContent
        .replace("₹", "")
        .replace(/,/g, "")
        .trim();


    return amount || "0";

}


/* ==================================================
   PAYMENT METHOD CHANGE
================================================== */

paymentMethods.forEach(function(method){

    method.addEventListener("change", function(){

        // If UPI is selected
        if(this.value === "UPI"){

            // Show UPI section
            upiPaymentSection.style.display =
                "block";


            // Get current amount
            const amount =
                getPaymentAmount();


            // Generate QR
            generatePaymentQR(amount);

        }


        // If Card / Net Banking selected
        else{

            // Hide UPI section
            upiPaymentSection.style.display =
                "none";

        }

    });

});


/* ==================================================
   DEFAULT PAYMENT METHOD
================================================== */

// UPI is checked by default in HTML

const selectedPaymentMethod =
    document.querySelector(
        'input[name="payment-method"]:checked'
    );


if(
    selectedPaymentMethod &&
    selectedPaymentMethod.value === "UPI"
){

    // Show UPI section
    upiPaymentSection.style.display =
        "block";


    // Get amount
    const amount =
        getPaymentAmount();


    // Generate QR
    generatePaymentQR(amount);

}

/* ==================================================
   INITIAL LOAD
================================================== */

if(saved_user !== null){

    display_children();

    update_dashboard_summary();

    render_goals_section();

    render_investments_section();

    render_dashboard_profile();

    update_payment_button();

}