"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { supabase } from "@/lib/supabase";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
  Link,
  Input,
} from "@nextui-org/react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Flex, Timeline, Text } from "@mantine/core";
import { IconGitBranch } from "@tabler/icons-react";
import { Badge } from "@mantine/core";
import { Container } from "@mantine/core";
import { useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { useAuth } from "@clerk/nextjs";
import { supabaseClient } from "@/lib/utlis/supabaseClient";
import Loading from "@/components/own/Loading";
import { Progress } from "@nextui-org/react";

function Task() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { userId, token, getToken } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [goal, setGoal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getTasks = async ({ userId, token }) => {
    const supabase = await supabaseClient(token);
    const { data: tasks } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", userId);
    return tasks;
  };

  const addTask = async ({ userId, event, token }) => {
    const supabase = await supabaseClient(token);
    const { data, error } = await supabase.from("tasks").insert({
      user_id: userId,
      task_name: taskName,
      task_description: taskDescription,
      goals: goal,
    });
    if (error) {
      console.log("error");
      return;
    }

    fetchTasks();
    onClose();
    return data;
  };

  const handleApiRequest = async () => {
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const MODEL_NAME = "gemini-1.0-pro-001";
    const API_KEY = "AIzaSyCtAjdVuIFveGenHwSyecxMXzJTd3BwGbU";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const parts = [
      { text: "input: Youth Leadership Training" },
      {
        text: "input 2: Empowering young leaders through leadership training programs and opportunities for civic engagement and community service.",
      },
      { text: "output: 8" },
      { text: "input: Accessible Public Transportation Campaign" },
      {
        text: "input 2: Advocating for accessible public transportation options for people with disabilities to ensure equal access to transportation services.",
      },
      { text: "output: 10" },
      { text: "input: Fair Trade Coffee Initiative" },
      {
        text: "input 2: Promoting fair trade coffee products to support small-scale coffee farmers and ensure fair wages and working conditions.",
      },
      { text: "output: 10" },
      { text: "input: Sustainable Fashion Campaign" },
      {
        text: "input 2: Raising awareness about the environmental and social impacts of the fashion industry and promoting sustainable and ethical fashion choices.",
      },
      { text: "output: 11" },
      { text: "input: Clean Air Advocacy Initiative" },
      {
        text: "input 2: Campaigning for policies and regulations to reduce air pollution and protect public health through measures such as emission controls and clean energy transitions.",
      },
      { text: "output: 13" },
      { text: "input: Digital Inclusion Project" },
      {
        text: "input 2: Expanding access to digital technology and internet connectivity in underserved communities to bridge the digital divide and promote digital literacy.",
      },
      { text: "output: 10,4" },
      { text: "input: Citizen Science Initiative" },
      {
        text: "input 2: Engaging citizens in scientific research and data collection efforts to address environmental and community challenges through collaboration and participation.",
      },
      { text: "output: 11,9" },
      { text: "input: Community Literacy Initiative" },
      {
        text: "input 2: Establishing programs and resources to promote literacy skills and lifelong learning opportunities for individuals of all ages.",
      },
      { text: "output: 11,4" },
      { text: "input: Community Cultural Center" },
      {
        text: "input 2: Creating cultural centers to celebrate and preserve local heritage traditions arts and cultural diversity.",
      },
      { text: "output: 11,16" },
      { text: "input: Climate Change Education Program" },
      {
        text: "input 2: Providing education and outreach programs to increase awareness and understanding of climate change impacts adaptation strategies and mitigation efforts.",
      },
      { text: "output: 4,13" },
      { text: "input: Artificial Intelligence for Social Good" },
      {
        text: "input 2: Utilizing artificial intelligence (AI) technology to address social and environmental challenges such as poverty inequality and climate change.",
      },
      { text: "output: 1,10,13,9" },
      { text: "input: Urban Mobility Solutions" },
      {
        text: "input 2: Implementing innovative urban mobility solutions such as bike-sharing programs pedestrian-friendly infrastructure and smart transportation systems.",
      },
      { text: "output: 9,11" },
      { text: "input: Neighborhood Watch Program" },
      {
        text: "input 2: Establishing neighborhood watch programs to enhance community safety reduce crime and promote social cohesion and solidarity.",
      },
      { text: "output: 11,17" },
      { text: "input: Safe Spaces for LGBTQ+ Youth" },
      {
        text: "input 2: Creating safe and inclusive spaces for LGBTQ+ youth to access support resources and social networks in a welcoming environment.",
      },
      { text: "output: 5,10,11" },
      { text: "input: Youth Entrepreneurship Incubator" },
      {
        text: "input 2: Providing mentorship resources and support to young entrepreneurs to develop and launch sustainable and innovative business ventures.",
      },
      { text: "output: 8,9,11" },
      { text: "input: Cultural Diversity Celebration" },
      {
        text: "input 2: Organizing events and activities to celebrate cultural diversity and promote understanding tolerance and inclusivity in communities.",
      },
      { text: "output: 10,16" },
      { text: "input: Public Health Awareness Campaign" },
      {
        text: "input 2: Launching campaigns to raise awareness about public health issues such as disease prevention vaccination and mental health support.",
      },
      { text: "output: 3,12" },
      { text: "input: Women's Rights Education Campaign" },
      {
        text: "input 2: Establishing savings groups and financial cooperatives for women to pool resources build assets and access credit and loans.",
      },
      { text: "output: 5,4,11" },
      { text: "input: Girls' Outdoor Adventure Program" },
      {
        text: "input 2: Creating safe and inclusive spaces for women and girls to access support resources and social networks in a welcoming environment.",
      },
      { text: "output: 5,10,16" },
      { text: "input: Girls' Sports Program" },
      {
        text: "input 2: Offering self-defense classes and workshops for girls to learn practical skills build confidence and enhance personal safety and empowerment.",
      },
      { text: "output: 16,5" },
      { text: "input: Women's Cooperative Savings Group" },
      {
        text: "input 2: Providing shelter counseling and support services for survivors of domestic violence and their children.",
      },
      { text: "output: 16,8" },
      { text: "input: Girls' Empowerment Theater" },
      {
        text: "input 2: Establishing legal aid clinics to provide free or low-cost legal assistance and representation for women facing discrimination violence or injustice.",
      },
      { text: "output: 16,17,3" },
      { text: "input: Community Clean-Up" },
      {
        text: "input 2: Organizing a clean-up event in the local community to remove litter and promote environmental awareness.",
      },
      { text: "output: 2,6,13" },
      { text: "input: Planting Trees" },
      {
        text: "input 2: Collaborating with local organizations to plant trees in deforested areas and combat climate change.",
      },
      { text: "output: 13,15" },
      { text: "input: Educational Workshop" },
      {
        text: "input 2: Holding a workshop for students on sustainable living practices and environmental conservation.",
      },
      { text: "output: 4,11" },
      { text: "input: Food Drive" },
      {
        text: "input 2: Organizing a food drive to collect donations for local food banks and support community members in need.",
      },
      { text: "output: 2" },
      { text: "input: Beach Cleanup" },
      {
        text: "input 2: Participating in a beach clean-up initiative to remove plastic pollution and protect marine life.",
      },
      { text: "output: 14,6" },
      { text: "input: Renewable Energy Project" },
      {
        text: "input 2: Implementing solar panel installations in the community to promote renewable energy use and reduce carbon emissions.",
      },
      { text: "output: 9,12" },
      { text: "input: Recycling Program" },
      {
        text: "input 2: Establishing a community-wide recycling program to reduce waste and promote resource conservation.",
      },
      { text: "output: 12" },
      { text: "input: Environmental Awareness Campaign" },
      {
        text: "input 2: Conducting an educational campaign to raise awareness about environmental issues and promote sustainable behaviors.",
      },
      { text: "output: 13,4" },
      { text: "input: Community Garden Project" },
      {
        text: "input 2: Creating a community garden to grow fresh produce and foster a sense of community engagement and food security.",
      },
      { text: "output: 13,15,2,3" },
      { text: "input: Composting Initiative" },
      {
        text: "input 2: Implementing a composting program to reduce organic waste and produce nutrient-rich soil for gardening.",
      },
      { text: "output: 6,12" },
      { text: "input: Public Transportation Advocacy" },
      {
        text: "input 2: Campaigning for improved public transportation infrastructure and accessibility to reduce traffic congestion and air pollution.",
      },
      { text: "output: 9,13" },
      { text: "input: Youth Empowerment Program" },
      {
        text: "input 2: Establishing a program to empower young people through education skill-building and leadership opportunities.",
      },
      { text: "output: 10,16" },
      { text: "input: Green Building Design" },
      {
        text: "input 2: Designing and constructing buildings with environmentally sustainable features such as energy efficiency and renewable materials.",
      },
      { text: "output: 13,15,11" },
      { text: "input: Sustainable Agriculture Training" },
      {
        text: "input 2: Providing training and resources to farmers on sustainable agricultural practices to improve productivity and environmental conservation.",
      },
      { text: "output: 4,13,12" },
      { text: "input: Plastic Reduction Campaign" },
      {
        text: "input 2: Launching a campaign to reduce single-use plastic consumption and promote alternatives such as reusable products.",
      },
      { text: "output: 15,12,11" },
      { text: "input: Water Conservation Initiative" },
      {
        text: "input 2: Implementing measures to reduce water usage and promote conservation practices in households and businesses.",
      },
      { text: "output: 6" },
      { text: "input: Renewable Energy Advocacy" },
      {
        text: "input 2: Campaigning for policies and incentives to promote the adoption of renewable energy sources such as solar and wind power.",
      },
      { text: "output: 9,12" },
      { text: "input: Health Education Program" },
      {
        text: "input 2: Offering educational programs and resources to promote healthy lifestyles and disease prevention in communities.",
      },
      { text: "output: 3,4" },
      { text: "input: Biodiversity Conservation Project" },
      {
        text: "input 2: Preserving and restoring natural habitats to protect biodiversity and promote ecosystem resilience.",
      },
      { text: "output: 15,14,12" },
      { text: "input: Fair Trade Advocacy" },
      {
        text: "input 2: Promoting fair trade practices and supporting producers in developing countries to ensure fair wages and working conditions.",
      },
      { text: "output: 10,8" },
      { text: "input: Gender Equality Workshop" },
      {
        text: "input 2: Conducting workshops and training sessions to promote gender equality and empower women and girls.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Cultural Heritage Preservation" },
      {
        text: "input 2: Initiating projects to preserve and promote cultural heritage sites traditions and practices.",
      },
      { text: "output: 16,12" },
      { text: "input: Community Health Clinic" },
      {
        text: "input 2: Establishing a community health clinic to provide accessible healthcare services to underserved populations.",
      },
      { text: "output: 3,9,11" },
      { text: "input: Clean Energy Access Initiative" },
      {
        text: "input 2: Expanding access to clean and affordable energy solutions for rural and marginalized communities.",
      },
      { text: "output: 6,12,11" },
      { text: "input: Microfinance Program" },
      {
        text: "input 2: Providing microloans and financial services to support entrepreneurship and economic empowerment in underserved areas.",
      },
      { text: "output: 1,8,11" },
      { text: "input: Climate Resilience Planning" },
      {
        text: "input 2: Developing strategies and policies to build resilience to climate change impacts such as extreme weather events and sea-level rise.",
      },
      { text: "output: 13,7,12" },
      { text: "input: Digital Literacy Training" },
      {
        text: "input 2: Offering training programs to improve digital literacy skills and bridge the digital divide in underserved communities.",
      },
      { text: "output: 4,9,10,11" },
      { text: "input: Social Entrepreneurship Incubator" },
      {
        text: "input 2: Creating a platform to support and mentor social entrepreneurs who develop innovative solutions to social and environmental challenges.",
      },
      { text: "output: 9,11" },
      { text: "input: Community-Based Disaster Preparedness" },
      {
        text: "input 2: Empowering communities to develop and implement disaster preparedness plans and resilience strategies.",
      },
      { text: "output: 3,11" },
      { text: "input: Healthy Food Access Initiative" },
      {
        text: "input 2: Increasing access to healthy and affordable food options in food deserts and low-income neighborhoods.",
      },
      { text: "output: 1,2,3" },
      { text: "input: Public Space Revitalization Project" },
      {
        text: "input 2: Transforming neglected public spaces into vibrant and accessible areas for recreation social interaction and community engagement.",
      },
      { text: "output: 12,8,9" },
      { text: "input: Energy-Efficient Home Retrofitting" },
      {
        text: "input 2: Assisting homeowners with retrofitting their homes to improve energy efficiency and reduce greenhouse gas emissions.",
      },
      { text: "output: 7,13,11" },
      { text: "input: Animal Welfare Advocacy" },
      {
        text: "input 2: Campaigning for improved animal welfare laws and policies to protect animals from cruelty and exploitation.",
      },
      { text: "output: 15,16" },
      { text: "input: Community Education Center" },
      {
        text: "input 2: Establishing a center to provide educational programs workshops and resources for lifelong learning and personal development.",
      },
      { text: "output: 4,9,11" },
      { text: "input: Urban Farming Initiative" },
      {
        text: "input 2: Promoting urban agriculture and rooftop gardening to increase food production enhance green spaces and strengthen local food systems.",
      },
      { text: "output: 7,11,12,13,2" },
      { text: "input: Waste Reduction Challenge" },
      {
        text: "input 2: Engaging community members in a challenge to reduce household waste through recycling composting and mindful consumption.",
      },
      { text: "output: 12,2" },
      { text: "input: Mental Health Awareness Campaign" },
      {
        text: "input 2: Raising awareness about mental health issues and promoting access to support services and resources for individuals and families.",
      },
      { text: "output: 3,11,16" },
      { text: "input: Youth Mentorship Program" },
      {
        text: "input 2: Pairing youth with mentors to provide guidance support and encouragement in personal and academic development.",
      },
      { text: "output: 17,4,11" },
      { text: "input: Sustainable Tourism Promotion" },
      {
        text: "input 2: Promoting responsible and sustainable tourism practices that minimize negative impacts on the environment and local communities.",
      },
      { text: "output: 6,4,8,11,16,17" },
      { text: "input: Public Health Screening Campaign" },
      {
        text: "input 2: Organizing health screening events to provide free or low-cost screenings for diseases such as diabetes hypertension and cancer.",
      },
      { text: "output: 3" },
      { text: "input: Community Art Project" },
      {
        text: "input 2: Engaging local artists and community members in a collaborative art project to beautify public spaces and inspire creativity.",
      },
      { text: "output: 9,11,17" },
      { text: "input: Eco-Friendly Transportation Initiative" },
      {
        text: "input 2: Promoting walking biking carpooling and other eco-friendly transportation options to reduce carbon emissions and traffic congestion.",
      },
      { text: "output: 7,9,11,12,13,15" },
      { text: "input: Rural Development Program" },
      {
        text: "input 2: Implementing development projects to improve infrastructure healthcare education and livelihood opportunities in rural areas.",
      },
      { text: "output: 3,4,9" },
      { text: "input: Environmental Policy Advocacy" },
      {
        text: "input 2: Advocating for stronger environmental policies and regulations to address issues such as air and water pollution deforestation and habitat loss.",
      },
      { text: "output: 13,11" },
      { text: "input: Solar Panel Installation" },
      {
        text: "input 2: Installing solar panels on residential rooftops to generate renewable energy and reduce dependence on fossil fuels.",
      },
      { text: "output: 7,12,13,15" },
      { text: "input: Green Job Training Program" },
      {
        text: "input 2: Offering training programs and certifications in green industries such as renewable energy energy efficiency and sustainable agriculture.",
      },
      { text: "output: 7,12,13" },
      { text: "input: Healthy School Lunch Program" },
      {
        text: "input 2: Implementing a healthy school lunch program to provide nutritious and balanced meals for students and promote healthy eating habits.",
      },
      { text: "output: 2,3" },
      { text: "input: Community Renewable Energy Co-op" },
      {
        text: "input 2: Establishing a community-owned renewable energy cooperative to invest in and manage local renewable energy projects.",
      },
      { text: "output: 7,12,11" },
      { text: "input: Elderly Care Program" },
      {
        text: "input 2: Providing support services and companionship for elderly individuals to enhance their quality of life and promote social inclusion.",
      },
      { text: "output: 10" },
      { text: "input: Community Orchard Project" },
      {
        text: "input 2: Planting fruit trees and establishing community orchards to provide fresh and healthy food options and promote urban green spaces.",
      },
      { text: "output: 15,13" },
      { text: "input: Green Building Retrofit Program" },
      {
        text: "input 2: Retrofitting existing buildings with energy-efficient technologies and sustainable building materials to reduce energy consumption and environmental impact.",
      },
      { text: "output: 7,12,11" },
      { text: "input: Community Health Promotion Campaign" },
      {
        text: "input 2: Conducting health promotion campaigns to encourage healthy behaviors prevent disease and improve overall community health and well-being.",
      },
      { text: "output: 3" },
      { text: "input: Healthy Workplace Program" },
      {
        text: "input 2: Promoting workplace wellness and safety programs to improve employee health productivity and satisfaction in organizations.",
      },
      { text: "output: 3,4,9,11" },
      { text: "input: Public Bike Sharing Program" },
      {
        text: "input 2: Implementing public bike-sharing programs to promote active transportation reduce traffic congestion and improve air quality in urban areas.",
      },
      { text: "output: 7,11,12,13" },
      { text: "input: Microgrid Development Project" },
      {
        text: "input 2: Developing microgrid systems to enhance energy resilience reliability and access in remote or vulnerable communities.",
      },
      { text: "output: 7,8,,11" },
      { text: "input: Community Recycling Center" },
      {
        text: "input 2: Establishing community recycling centers to facilitate the collection sorting and processing of recyclable materials.",
      },
      { text: "output: 12,13" },
      { text: "input: Home Energy Efficiency Retrofit Program" },
      {
        text: "input 2: Assisting homeowners with energy efficiency upgrades such as insulation weatherization and appliance upgrades to reduce energy consumption.",
      },
      { text: "output: 7,12,11,13" },
      { text: "input: Women's Rights Legal Aid Clinic" },
      {
        text: "input 2: Establishing cooperative farming initiatives to empower women farmers improve agricultural productivity and enhance food security.",
      },
      { text: "output: 2,8,9" },
      { text: "input: Volunteering at a Homeless Shelter" },
      {
        text: "input 2: Helping at a homeless shelter by serving meals providing support and offering resources to those in need.",
      },
      { text: "output: 2,1,10" },
      { text: "input: Community Health Fair" },
      {
        text: "input 2: Organizing a health fair to provide free screenings vaccinations and education on preventive healthcare.",
      },
      { text: "output: 3,11" },
      { text: "input: Zero Waste Initiative" },
      {
        text: "input 2: Implementing a zero waste program in a community to minimize waste generation and promote recycling and composting efforts.",
      },
      { text: "output: 12,13" },
      { text: "input: Clean Water Project" },
      {
        text: "input 2: Constructing wells and water treatment facilities in underserved communities to provide access to clean and safe drinking water.",
      },
      { text: "output: 6,3,13" },
      { text: "input: Community Resilience Workshop" },
      {
        text: "input 2: Conducting workshops to help communities develop resilience strategies and preparedness plans for natural disasters and emergencies.",
      },
      { text: "output: 4,9,16" },
      { text: "input: Public Park Restoration Project" },
      {
        text: "input 2: Restoring and revitalizing public parks and green spaces to enhance recreational opportunities and community well-being.",
      },
      { text: "output: 11,12" },
      { text: "input: Green School Certification Program" },
      {
        text: "input 2: Implementing green building and sustainability practices in schools to reduce environmental impact and promote environmental education.",
      },
      { text: "output: 4,12,11" },
      { text: "input: Community Emergency Response Team Training" },
      {
        text: "input 2: Training community members in disaster response and emergency management to enhance community resilience and preparedness.",
      },
      { text: "output: 4,11,16" },
      { text: "input: Community Emergency Shelter" },
      {
        text: "input 2: Establishing emergency shelters to provide temporary housing and support services for individuals and families experiencing homelessness or displacement.",
      },
      { text: "output: 1,3,11" },
      { text: "input: Urban Renewal Project" },
      {
        text: "input 2: Revitalizing urban neighborhoods through infrastructure improvements economic development initiatives and community engagement efforts.",
      },
      { text: "output: 9,11" },
      { text: "input: Nature-Based Solutions for Climate Adaptation" },
      {
        text: "input 2: Implementing nature-based solutions such as wetland restoration forest conservation and coastal protection to enhance resilience to climate change.",
      },
      { text: "output: 7,13" },
      { text: "input: Local Food Cooperative" },
      {
        text: "input 2: Creating a local food cooperative to support small-scale farmers promote sustainable agriculture and provide access to fresh and locally produced food.",
      },
      { text: "output: 2,3,17" },
      { text: "input: Green Infrastructure Investment" },
      {
        text: "input 2: Investing in green infrastructure projects such as green roofs rain gardens and permeable pavement to manage stormwater and improve urban resilience.",
      },
      { text: "output: 7,13,17" },
      { text: "input: Sustainable Tourism Certification Program" },
      {
        text: "input 2: Developing certification programs to promote sustainable tourism practices among hotels tour operators and travel destinations.",
      },
      { text: "output: 4,8,9,11" },
      { text: "input: Women's Cooperative Farming Project" },
      {
        text: "input 2: Establishing women's health clinics to provide comprehensive healthcare services including reproductive health family planning and screenings.",
      },
      { text: "output: 4,5,3" },
      { text: "input: Women's Leadership Conference" },
      {
        text: "input 2: Offering educational programs and resources to promote women's health and well-being including reproductive health nutrition and mental wellness.",
      },
      { text: "output: 5,4,3,16" },
      { text: "input: Girls' Entrepreneurship Workshop" },
      {
        text: "input 2: Forming advocacy coalitions to advance women's health and reproductive rights influence policies and improve access to healthcare services.",
      },
      { text: "output: 3,5,10" },
      { text: "input: Women's Artisan Collective" },
      {
        text: "input 2: Establishing maternal health clinics to provide prenatal care maternal education and support services for expectant mothers.",
      },
      { text: "output: 3,4,5" },
      { text: "input: Women's Advocacy Coalition" },
      {
        text: "input 2: Facilitating support groups and peer counseling sessions for women to share experiences receive emotional support and access resources for empowerment.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Women's Support Group" },
      {
        text: "input 2: Providing outdoor adventure programs and wilderness experiences for girls to build confidence resilience and leadership skills in nature.",
      },
      { text: "output: 5,10,16" },
      { text: "input: Women's Economic Empowerment Symposium" },
      {
        text: "input 2: Providing opportunities for girls to participate in sports and physical activities to build confidence teamwork skills and physical fitness.",
      },
      { text: "output: 3,5" },
      { text: "input: Women's Empowerment Workshop" },
      {
        text: "input 2: Providing access to quality education and scholarship opportunities for girls to improve literacy rates and promote gender equality.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Gender Equality Advocacy Campaign" },
      {
        text: "input 2: Organizing coding camps and computer science workshops to encourage girls to pursue careers in technology and close the gender gap in STEM fields.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Maternal Health Clinic" },
      {
        text: "input 2: Offering career exploration programs and internships to expose girls to diverse career paths and empower them to pursue their professional aspirations.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Girls' Mentorship Program" },
      {
        text: "input 2: Offering scholarships and mentorship opportunities to encourage women and girls to pursue careers in science technology engineering and mathematics (STEM).",
      },
      { text: "output: 4,5,10" },
      { text: "input: Women's Entrepreneurship Network" },
      {
        text: "input 2: Offering STEM education programs and extracurricular activities to girls to encourage interest and participation in science technology engineering and mathematics.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Girls' Leadership Academy" },
      {
        text: "input 2: Organizing science fairs and STEM competitions for girls to showcase their talents creativity and innovation in science and technology fields.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Girls' STEM Education Program" },
      {
        text: "input 2: Establishing coding clubs and hackathons for girls to learn programming skills explore technology projects and connect with peers and mentors in STEM.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Women's Leadership Forum" },
      {
        text: "input 2: Establishing leadership academies for girls to develop leadership skills self-confidence and social awareness through education and mentorship.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Women's Health Advocacy Coalition" },
      {
        text: "input 2: Pairing girls with mentors to provide guidance support and encouragement in academic and personal development.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Girls' Education Program" },
      {
        text: "input 2: Hosting leadership camps and mentorship programs to empower girls and develop their leadership skills and confidence.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Women-Owned Business Incubator" },
      {
        text: "input 2: Advocating for gender-responsive budgeting practices to ensure that government budgets prioritize gender equality and women's rights.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Domestic Violence Shelter" },
      {
        text: "input 2: Hosting leadership conferences and summits to showcase women leaders and inspire others to take on leadership roles.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Equal Pay Initiative" },
      {
        text: "input 2: Raising awareness about women's rights issues and advocating for legal reforms and policy changes to protect and promote gender equality.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Girls' Leadership Camp" },
      {
        text: "input 2: Organizing film festivals and screenings to raise awareness about women's rights issues and amplify women's voices and stories.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Women's Health Clinic" },
      {
        text: "input 2: Building coalitions and alliances among women's organizations and activists to advocate for policy reforms and social change on women's rights issues.",
      },
      { text: "output: 3,5,10" },
      { text: "input: Women in STEM Scholarship Program" },
      {
        text: "input 2: Raising awareness about the importance of women's political participation and advocating for women's representation and leadership in government.",
      },
      { text: "output: 5,10" },
      { text: "input: Financial Literacy Workshops" },
      {
        text: "input 2: Launching leadership initiatives and mentorship programs to inspire and empower girls to become leaders and change-makers in their communities.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Women's Health Education Initiative" },
      {
        text: "input 2: Producing and performing plays and theatrical productions that empower girls challenge stereotypes and promote gender equality and social justice.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Women's Leadership Network" },
      {
        text: "input 2: Creating clubs and support groups for girls to build self-esteem leadership skills and social connections through peer support and activities.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Girls' Career Exploration Program" },
      {
        text: "input 2: Convening leadership forums and dialogues to promote women's leadership mentorship and advocacy for gender equality and social justice.",
      },
      { text: "output: 4,5,10,16" },
      { text: "input: Women's Rights Film Festival" },
      {
        text: "input 2: Campaigning for gender equality and women's rights through awareness-raising activities policy advocacy and community engagement.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Girls' Science Fair" },
      {
        text: "input 2: Hosting leadership retreats and camps for girls to cultivate leadership skills resilience and personal growth in a supportive and empowering environment.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Girls' Self-Defense Classes" },
      {
        text: "input 2: Building networks and communities to connect and support women leaders share best practices and advocate for gender-inclusive policies and practices.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Girls' Coding Club" },
      {
        text: "input 2: Holding workshops to empower women and girls through education skill-building and leadership development.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Girls' Leadership Initiative" },
      {
        text: "input 2: Creating resource centers to provide information support services and training opportunities for women's empowerment and gender equality.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Gender-Responsive Budgeting Initiative" },
      {
        text: "input 2: Sponsoring programs and resources to support women entrepreneurs in starting and growing their businesses.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Safe Spaces for Women" },
      {
        text: "input 2: Providing financial education and literacy workshops to women and girls to promote economic empowerment and financial independence.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Microfinance for Women" },
      {
        text: "input 2: Providing microloans and financial services to women entrepreneurs to start or expand small businesses and generate income.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Girls' Coding Camp" },
      {
        text: "input 2: Conducting entrepreneurship workshops and business training programs to inspire and equip girls with the skills and knowledge to start their own businesses.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Women's Empowerment Resource Center" },
      {
        text: "input 2: Organizing symposiums and conferences to promote women's economic empowerment entrepreneurship and financial inclusion.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Girls' Empowerment Club" },
      {
        text: "input 2: Advocating for equal pay for equal work and closing the gender pay gap through policies legislation and workplace initiatives.",
      },
      { text: "output: 5,10" },
      { text: "input: Girls' Leadership Retreat" },
      {
        text: "input 2: Establishing artisan collectives and cooperatives to empower women artisans preserve traditional crafts and generate sustainable income.",
      },
      { text: "output: 4,5,10" },
      { text: "input: Women's Political Participation Campaign" },
      {
        text: "input 2: Creating networks and platforms to connect women entrepreneurs share resources and facilitate collaboration and growth opportunities.",
      },
      { text: "output: 4,5,10" },
      { text: `${taskName}${taskDescription}` },
      { text: "output: " },
    ];
    const generationConfig = {
      temperature: 0.7,
      top_p: 1,
      top_k: 1,
      max_output_tokens: 10,
    };

    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
    });

    const response = result.response;
    const gxxoal = response.text();
    //console.log(gxxoal);
    setGoal(gxxoal);
    console.log(goal);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const token = await getToken({ template: "supabase" });
    const tasks = await getTasks({ userId, token });
    setTasks(tasks);

    if (error) {
      console.error("Error fetching tasks:", error.message);
    } else {
      setTasks(tasks || []);
    }
  };

  const handleSubmit = async (event) => {
    if (!taskName || !taskDescription) return;
    setIsLoading(true);
    // Call Gemini API to get goals data
    await handleApiRequest();

    // Once Gemini API request completes, proceed to add the task
    setTimeout(async () => {
      const token = await getToken({ template: "supabase" });
      await addTask({ event, userId, token });
    }, 3000);
    setIsLoading(false);
  };

  if (!isLoaded) {
    // Handle loading state however you like
    return <Loading />;
  }
  if (isSignedIn) {
    return (
      <MantineProvider className="mt-20">
        <AuroraBackground>
          <div className="flex items-center mt-20">
            <UserButton afterSignOutUrl="/form" />
            <p className="pl-5 text-2xl text-white">{user.username}</p>
          </div>
          <Button
            radius="full"
            size="sm"
            href="/dashboard"
            as={Link}
            showAnchorIcon
            className="mt-10 bg-gradient-to-tr from-red-500 to-cyan-500 text-white shadow-lg">
            Go to your Organization's Dashboard
          </Button>

          <motion.div
            initial={{ opacity: 0.0, y: 0 }}
            whileInView={{ opacity: 1, y: 50 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center mb-40">
            <div className="text-3xl md:text-7xl font-bold text-white text-center">
              Sacred timeline of the Day
            </div>

            <div className="font-extralight text-base md:text-xl text-neutral-200 ">
              <TextRevealCard
                className="flex justify-center"
                text="Every Action Counts"
                revealText="Towards the GOALS"></TextRevealCard>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                radius="50"
                onClick={onOpen}
                className="bg-gradient-to-tr from-blue-300 to-blue-700 text-white shadow-lg">
                Add Task
              </Button>
            </div>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              classNames={{
                body: "py-6",
                base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
                header: "border-b-[1px] border-[#292f46]",
                footer: "border-t-[1px] border-[#292f46]",
                closeButton: "hover:bg-white/5 active:bg-white/10",
              }}>
              <ModalContent>
                <ModalHeader className="flex flex-col gap-1 text-2xl text-white">
                  Add New Task
                </ModalHeader>
                <ModalBody>
                  <Input
                    type="text"
                    label="Task Name"
                    color="primary"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                  />
                  <Textarea
                    color="primary"
                    label="Description"
                    placeholder="Enter the Task description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    className="max-w"
                  />
                  {isLoading && (
                    <Progress
                      size="sm"
                      isIndeterminate
                      aria-label="Gemini is thinking..."
                      className="max-w-md"
                      label="Gemini is thinking"
                    />
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="default" onClick={handleSubmit}>
                    Add
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Container size="responsive" m="xl" p="xl">
              <Timeline active={10} bulletSize={30} lineWidth={5} m="xl" p="xl">
                {tasks.map((task) => (
                  <Timeline.Item
                    key={task.id}
                    bullet={<IconGitBranch size={12} />}
                    title={task.task_name}
                    c="blue">
                    <Container size="xs">
                      <Text c="dimmed" size="sm" p="sm" m="sm">
                        {task.task_description}
                      </Text>
                      <Flex
                        mih={50}
                        bg="transparent"
                        gap="sm"
                        justify="flex-start"
                        align="center"
                        direction="row"
                        wrap="wrap">
                        {task.goals === "0" ? (
                          <Badge color="red" variant="light" size="lg">
                            Not aligned with any goals
                          </Badge>
                        ) : (
                          <Badge color="blue" variant="light" size="lg">
                            Goal: {task.goals}
                          </Badge>
                        )}
                      </Flex>
                    </Container>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Container>
          </motion.div>
        </AuroraBackground>
      </MantineProvider>
    );
  } else {
    redirect("/");
  }
}

export default Task;
