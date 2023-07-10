const milestonesData = JSON.parse (data).data;

//load mailstons data
function loadMilestones (){
  const milestones = document.querySelector('.milestones');

  milestones.innerHTML = `${milestonesData.map(function(milestone){
      return ` <div class="milestone border-b" id ="${milestone._id}">
      <div class="flex">
        <div class="checkbox"><input type="checkbox" onclick="function markMilestion (this,${milestone._id})"/></div>
        <div onclick="openMilestone(this, ${milestone._id})">
          <p>
            ${milestone.name}
            <span><i class="fas fa-chevron-down"></i></span>
          </p>
        </div>
      </div>
      <div class="hidden_panel ">
        ${milestone.modules.map(function(mobule){
           return `<div class="module border-b">
           <p>${mobule.name}</p>
         </div>`;
        })
        .join("")}
      </div>
    </div>`;
  })
  .join("")}`;
}

function openMilestone(milestoneElement, id){
  const currentpanel = milestoneElement.parentNode.nextElementSibling;
  const showpanel = document.querySelector (".show");

  const active = document.querySelector(".active");
  //first remove previous active class if any [other then the clicked one]
    if (active && !milestoneElement.classList.contains("active")) {
      active.classList.remove("active");
    }
    //toogle current clicked  one
  milestoneElement.classList.toggle("active");
 //first hide previous panel open [other the click element]
 if(!currentpanel.classList.contains("show")&& showpanel)
  showpanel.classList.remove("show");
  //toogle current element
  currentpanel.classList.toggle("show"); 

  showMilestone(id);
}

function showMilestone(id){
   const milestoneImage = document.querySelector(".milestoneImage");
   const name = document.querySelector(".title");
   const details = document.querySelector(".details");
   milestoneImage.style.opacity = "0";
   milestoneImage.src = milestonesData[id].image;
   name.innerText = milestonesData[id].name;
   details.innerText = milestonesData[id].description;
}

//lisen for hero image load
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function (){
   this.style.opacity ="1";
}

function markMilestion (checkbox, id){
     const doneList = document.querySelector(".doneList");
     const milestonesList = document.querySelector(".milestones");
     const item = document.getElementById(id);

     if (checkbox.checked){
      //mark as done
      milestonesList.removeChild(item);
      doneList.appendChild(item);
     }else {
      //back to main list
      milestonesList.appendChild(item);
      doneList.removeChild(item);
     }
}

loadMilestones();