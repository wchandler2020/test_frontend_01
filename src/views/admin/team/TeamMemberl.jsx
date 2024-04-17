import Card from "components/card/Card";
import React, { useState } from "react";
// import {useNavigate} from 'react-router-dom'

let myDate = new Date();
let hours = myDate.getHours();
let greet;

if (hours < 12) greet = "Morning";
else if (hours >= 12 && hours <= 17) greet = "Afternoon";
else if (hours >= 17 && hours <= 24) greet = "Evening";

const TeamMember = (props) => {
  return (
    <Card key={member.id}>
              <div class="text-center text-gray-500 dark:text-gray-400">
                <img
                  class="mx-auto mb-4 w-36 h-36 rounded-full"
                  src={member.image}
                  alt="Bonnie Avatar"
                />
                <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{member.name}</a>
                </h3>
                <p>{member.position}</p>
                <ul class="flex justify-center mt-4 space-x-4">
                  <li>
                    <a
                      href="#"
                      class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                    >
                      <MdOutlineEmail color="#2988bc" size="24px" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                    >
                      <MdOutlineLocalPhone color="#ed8c72" size="24px" />
                    </a>
                  </li>
                </ul>
              </div>
            </Card>
  );
};

export default TeamMember;