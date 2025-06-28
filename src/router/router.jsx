import {
  createBrowserRouter,
} from "react-router";
import Home from "../Layout/Home";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import Skills from "../Pages/skills/Skills";
import ProjectCardSection from "../Pages/ProjectCardSectio/ProjectCardSectio";
import EducationTimeline from "../Pages/Education/Education";
import ContactSection from "../Pages/ContactSection/ContactSection";


 export const router = createBrowserRouter([
{
    path: "/",
    Component:MainLayout ,
    children:[
        {index:true ,Component:Home},
        {path:'about',Component:About},
        {path:'skills',Component:Skills},
        {path:'projects',Component:ProjectCardSection},
        {path:'education',Component:EducationTimeline},
        {path:'contact',Component:ContactSection}
    ]
  },
])